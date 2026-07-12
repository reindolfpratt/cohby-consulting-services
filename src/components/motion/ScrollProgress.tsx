import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/** Thin rose progress line pinned to the very top of the viewport. */
const ScrollProgress = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left pointer-events-none"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, hsl(200 78% 55% / 0.9), rgba(255, 255, 255, 0.65))",
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
