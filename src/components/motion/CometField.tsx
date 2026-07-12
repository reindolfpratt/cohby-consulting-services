import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

/**
 * Full-page interactive space scene in two fixed layers:
 *
 * Background (z-0, behind sections): starfield with scroll + cursor
 * parallax, drifting cloud-computing logo silhouettes, nebula glow,
 * occasional shooting stars.
 *
 * Overlay (z-30, above sections, below nav): the comet that chases the
 * cursor across the entire page, leaving a glowing trail. Over light
 * sections it crossfades to a dark ink palette so it stays visible.
 *
 * Cursor-driven on desktop; drifts on its own on touch. Renders a static
 * background under prefers-reduced-motion.
 */
const CometField = () => {
  const bgRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const bg = bgRef.current;
    const ov = overlayRef.current;
    if (!bg || !ov) return;
    const ctxB = bg.getContext("2d");
    const ctxO = ov.getContext("2d");
    if (!ctxB || !ctxO) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = bg.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      for (const [canvas, ctx] of [
        [bg, ctxB],
        [ov, ctxO],
      ] as const) {
        canvas.width = Math.max(1, Math.floor(w * dpr));
        canvas.height = Math.max(1, Math.floor(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ── Light-section map (document coords) for the overlay palette ── */
    let lightRects: { top: number; bottom: number }[] = [];
    const measureLight = () => {
      lightRects = [...document.querySelectorAll(".bg-studio-light")].map((el) => {
        const r = el.getBoundingClientRect();
        return { top: r.top + window.scrollY, bottom: r.bottom + window.scrollY };
      });
    };
    measureLight();
    const remeasure = window.setInterval(measureLight, 2000);
    window.addEventListener("resize", measureLight);

    /* ── Starfield ── */
    const stars = Array.from({ length: 190 }, () => ({
      x: Math.random(),
      y: Math.random(),
      depth: 0.25 + Math.random() * 0.75,
      r: 0.4 + Math.random() * 1.2,
      twinkle: Math.random() * Math.PI * 2,
    }));

    const drawStars = (t: number, offsetX: number, offsetY: number) => {
      for (const s of stars) {
        const alpha = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(t * 0.0015 + s.twinkle));
        const sx = s.x * w + offsetX * s.depth;
        const sy =
          (((s.y * h + offsetY * s.depth - scrollY * 0.14 * s.depth) % h) + h) % h;
        ctxB.beginPath();
        ctxB.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctxB.fillStyle = `rgba(255, 255, 255, ${alpha * s.depth})`;
        ctxB.fill();
      }
    };

    /* ── Cloud-logo silhouettes (the classic cloud-computing mark) ── */
    const traceCloud = (cx: number, cy: number, s: number) => {
      ctxB.beginPath();
      ctxB.arc(cx - 45 * s, cy + 10 * s, 25 * s, Math.PI * 0.5, Math.PI * 1.5);
      ctxB.arc(cx - 15 * s, cy - 20 * s, 32 * s, Math.PI * 0.95, Math.PI * 1.9);
      ctxB.arc(cx + 25 * s, cy - 12 * s, 26 * s, Math.PI * 1.2, Math.PI * 1.95);
      ctxB.arc(cx + 50 * s, cy + 10 * s, 25 * s, Math.PI * 1.5, Math.PI * 0.5);
      ctxB.closePath();
    };

    const clouds = Array.from({ length: 6 }, (_, i) => ({
      u: (i + 0.5) / 6 + (Math.random() - 0.5) * 0.12,
      v: Math.random(),
      depth: 0.3 + Math.random() * 0.7,
      scale: 0.45 + Math.random() * 0.95,
      seed: Math.random() * 10,
    }));

    const drawClouds = (now: number, headX: number, headY: number) => {
      const band = h + 400;
      for (const c of clouds) {
        const cx =
          c.u * (w + 300) -
          150 +
          Math.sin(now * 0.00005 * (1 + c.seed * 0.3) + c.seed * 7) * 46 +
          (w / 2 - headX) * 0.02 * c.depth;
        let cy = c.v * band - scrollY * 0.1 * c.depth + (h / 2 - headY) * 0.012 * c.depth;
        cy = (((cy % band) + band) % band) - 200;

        ctxB.save();
        ctxB.shadowColor = "hsla(200, 90%, 65%, 0.5)";
        ctxB.shadowBlur = 14 * c.depth;
        traceCloud(cx, cy, c.scale);
        ctxB.fillStyle = `hsla(205, 85%, 62%, ${0.045 * c.depth})`;
        ctxB.fill();
        ctxB.strokeStyle = `hsla(200, 90%, 78%, ${0.2 * c.depth})`;
        ctxB.lineWidth = 1.2;
        ctxB.stroke();
        ctxB.restore();
      }
    };

    /* ── Static render for reduced motion ── */
    if (reduce) {
      ctxB.clearRect(0, 0, w, h);
      drawStars(0, 0, 0);
      drawClouds(0, w / 2, h / 2);
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", measureLight);
        window.clearInterval(remeasure);
      };
    }

    /* ── Pointer tracking ── */
    const target = { x: w * 0.5, y: h * 0.42, active: false };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      target.active = true;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    /* ── Comet, nebula, shooting-star state ── */
    const head = { x: w * 0.5, y: h * 0.42 };
    const prevHead = { ...head };
    const particles: Particle[] = [];
    const shooting: ShootingStar[] = [];
    let nextShoot = performance.now() + 3500;
    let lightMix = 0; // 0 = over dark sections, 1 = over light sections
    const nebulae = [
      { x: w * 0.35, y: h * 0.4, r: () => Math.max(w, h) * 0.28, pull: 0.35, hue: 202 },
      { x: w * 0.65, y: h * 0.5, r: () => Math.max(w, h) * 0.34, pull: 0.2, hue: 215 },
    ];

    const mix = (a: number, b: number, m: number) => a + (b - a) * m;

    let raf = 0;

    const tick = (now: number) => {
      ctxB.clearRect(0, 0, w, h);
      ctxO.clearRect(0, 0, w, h);

      /* Idle drift when the mouse isn't over the page (and on touch) */
      if (!target.active) {
        target.x = w * (0.5 + 0.28 * Math.sin(now * 0.00035));
        target.y = h * (0.4 + 0.16 * Math.cos(now * 0.00027));
      }

      /* Comet head eases toward the cursor */
      prevHead.x = head.x;
      prevHead.y = head.y;
      head.x += (target.x - head.x) * 0.06;
      head.y += (target.y - head.y) * 0.06;
      const speed = Math.hypot(head.x - prevHead.x, head.y - prevHead.y);

      /* Palette crossfade: is the comet over a light (clay) section? */
      const headDocY = head.y + scrollY;
      const overLight = lightRects.some((r) => headDocY > r.top && headDocY < r.bottom);
      lightMix += ((overLight ? 1 : 0) - lightMix) * 0.08;
      const m = lightMix;

      /* ── Background layer ── */
      ctxB.globalCompositeOperation = "lighter";
      for (const c of nebulae) {
        c.x += (head.x * c.pull + w * (0.5 - c.pull / 2) - c.x) * 0.018;
        c.y += (head.y * c.pull + h * (0.45 - c.pull / 2) - c.y) * 0.018;
        const radius = c.r();
        const grad = ctxB.createRadialGradient(c.x, c.y, 0, c.x, c.y, radius);
        grad.addColorStop(0, `hsla(${c.hue}, 80%, 60%, 0.055)`);
        grad.addColorStop(0.55, `hsla(${c.hue}, 75%, 50%, 0.025)`);
        grad.addColorStop(1, "hsla(210, 80%, 50%, 0)");
        ctxB.fillStyle = grad;
        ctxB.beginPath();
        ctxB.arc(c.x, c.y, radius, 0, Math.PI * 2);
        ctxB.fill();
      }
      ctxB.globalCompositeOperation = "source-over";

      const parX = (w / 2 - head.x) * 0.03;
      const parY = (h / 2 - head.y) * 0.03;
      drawStars(now, parX, parY);
      drawClouds(now, head.x, head.y);

      /* Shooting stars */
      if (now > nextShoot) {
        nextShoot = now + 6000 + Math.random() * 9000;
        const fromLeft = Math.random() > 0.5;
        shooting.push({
          x: fromLeft ? -40 : w * (0.3 + Math.random() * 0.7),
          y: h * Math.random() * 0.35,
          vx: (fromLeft ? 1 : -1) * (7 + Math.random() * 4),
          vy: 3 + Math.random() * 2.5,
          life: 0,
          maxLife: 70,
        });
      }
      for (let i = shooting.length - 1; i >= 0; i--) {
        const s = shooting[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        if (s.life >= s.maxLife || s.x < -80 || s.x > w + 80 || s.y > h + 40) {
          shooting.splice(i, 1);
          continue;
        }
        const fade = Math.sin((s.life / s.maxLife) * Math.PI);
        const tailX = s.x - s.vx * 9;
        const tailY = s.y - s.vy * 9;
        const grad = ctxB.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.85 * fade})`);
        grad.addColorStop(1, "rgba(140, 200, 255, 0)");
        ctxB.strokeStyle = grad;
        ctxB.lineWidth = 1.6;
        ctxB.beginPath();
        ctxB.moveTo(s.x, s.y);
        ctxB.lineTo(tailX, tailY);
        ctxB.stroke();
      }

      /* ── Overlay layer: the comet ── */
      const emit = Math.min(6, 2 + Math.floor(speed * 0.6));
      for (let i = 0; i < emit; i++) {
        const spread = 0.6;
        particles.push({
          x: head.x + (Math.random() - 0.5) * 3,
          y: head.y + (Math.random() - 0.5) * 3,
          vx: (prevHead.x - head.x) * 0.25 + (Math.random() - 0.5) * spread,
          vy: (prevHead.y - head.y) * 0.25 + (Math.random() - 0.5) * spread,
          life: 0,
          maxLife: 35 + Math.random() * 40,
          size: 0.8 + Math.random() * 2.2,
        });
      }
      if (particles.length > 420) particles.splice(0, particles.length - 420);

      ctxO.globalCompositeOperation = m > 0.5 ? "source-over" : "lighter";
      const glowH = mix(202, 214, m);
      const glowS = mix(90, 35, m);
      const glowL = mix(62, 28, m);
      const coreR = mix(255, 35, m);
      const coreG = mix(255, 48, m);
      const coreB = mix(255, 70, m);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        const fade = 1 - p.life / p.maxLife;
        const size = p.size * fade;
        ctxO.beginPath();
        ctxO.arc(p.x, p.y, size * 2.4, 0, Math.PI * 2);
        ctxO.fillStyle = `hsla(${glowH}, ${glowS}%, ${glowL}%, ${0.12 * fade})`;
        ctxO.fill();
        ctxO.beginPath();
        ctxO.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctxO.fillStyle = `rgba(${coreR}, ${coreG}, ${coreB}, ${0.5 * fade})`;
        ctxO.fill();
      }

      /* Comet head glow */
      const glow = ctxO.createRadialGradient(head.x, head.y, 0, head.x, head.y, 26);
      glow.addColorStop(0, `rgba(${coreR}, ${coreG}, ${coreB}, ${mix(0.85, 0.55, m)})`);
      glow.addColorStop(0.25, `hsla(${glowH}, ${glowS}%, ${glowL}%, ${mix(0.35, 0.2, m)})`);
      glow.addColorStop(1, `hsla(${glowH}, ${glowS}%, ${glowL}%, 0)`);
      ctxO.fillStyle = glow;
      ctxO.beginPath();
      ctxO.arc(head.x, head.y, 26, 0, Math.PI * 2);
      ctxO.fill();
      ctxO.beginPath();
      ctxO.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
      ctxO.fillStyle = `rgba(${coreR}, ${coreG}, ${coreB}, 0.95)`;
      ctxO.fill();
      ctxO.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measureLight);
      window.clearInterval(remeasure);
    };
  }, [reduce]);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <canvas ref={bgRef} className="w-full h-full" />
      </div>
      <div className="fixed inset-0 z-30 pointer-events-none" aria-hidden="true">
        <canvas ref={overlayRef} className="w-full h-full" />
      </div>
    </>
  );
};

export default CometField;
