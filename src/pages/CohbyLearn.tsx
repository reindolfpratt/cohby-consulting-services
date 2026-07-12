import { Link } from "react-router-dom";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import {
  Video,
  Megaphone,
  Zap,
  FileCheck,
  LayoutGrid,
  ArrowRight
} from "lucide-react";

const CohbyLearn = () => {
  const features = [
    {
      category: "AGENTIC BUILDER",
      title: 'The AI "Architect"',
      description: 'Reduce course creation time by 90%. Our AI builds structure, modules, and quizzes directly into your database from a single prompt.',
      badge: "Agentic Loop Enabled",
      detail: "Generates rich curriculum structures in under 30 seconds.",
      icon: <Zap className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />,
    },
    {
      category: "COMPLIANCE",
      title: "Enterprise Standards",
      description: "Full SCORM 1.2 and 2004 compliance. Upload your Articulate or Captivate files and track grades instantly.",
      badge: "SCORM 1.2 & 2004",
      detail: "Grade tracking is built natively into standard database queries.",
      icon: <FileCheck className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />,
    },
    {
      category: "STREAMING",
      title: "Live Learning Engine",
      description: "Zoom-style conferencing built natively into the platform. No installs, just high-performance online learning.",
      badge: "Up to 100k Participants",
      detail: "Features browser-to-browser screen sharing and chat.",
      icon: <Video className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />,
    },
    {
      category: "MARKETING",
      title: "Communication Hub",
      description: "Replace Mailchimp with targeted internal announcements. Reach everyone or specific cohorts with precise read tracking.",
      badge: "Built-in Read Receipts",
      detail: "Ensure mandatory updates are reviewed and logged by users.",
      icon: <Megaphone className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />,
    },
  ];

  const blocks = [
    "Interactive Quizzes",
    "External Embeds",
    "SCORM Uploads",
    "Reflective Tasks",
    "Content Accordions",
    "Resource Downloads",
  ];

  const security = [
    { title: "RLS Policies",       desc: "Hardware-level data isolation for every database query utilizing PostgreSQL Row Level Security." },
    { title: "Role-Based Access",   desc: "Granular administrative layers supporting Learners, Managers, and Super Admins." },
    { title: "AES Encryption",      desc: "All sensitive database columns and file attachments are securely encrypted at rest." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <RevealItem className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// Cohby Academy System</span>
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
                Cohby<br />
                Learn <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">platform</span>.
              </h1>
            </RevealItem>
            <RevealItem className="lg:col-span-4 lg:pb-2 flex flex-col gap-8">
              <p className="text-base text-white/45 leading-relaxed">
                The AI-driven, multi-tenant LMS built for creators, corporations, and educators.
              </p>
              <a
                href="http://www.cohbylearn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors self-start"
              >
                Start Free Trial →
              </a>
            </RevealItem>
          </RevealGroup>

          {/* Platform mockup — real product screenshot */}
          <Reveal className="mt-16 w-full relative z-10">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden p-3 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="ml-4 flex-1 bg-white/[0.06] rounded-full h-5 flex items-center px-3">
                  <span className="text-[9px] font-mono text-white/30 tracking-wider">cohbylearn.com</span>
                </div>
              </div>
              <a href="http://www.cohbylearn.com/" target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src="/learn-preview.png"
                  alt="Cohby Learn — platform preview"
                  className="w-full rounded-xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-[1.7rem] bg-rose/[0] group-hover:bg-rose/[0.03] transition-colors duration-300 pointer-events-none" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* gradient */}
      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      {/* ── Light Clay Body ── */}
      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Why Cohby Learn */}
          <Reveal y={16} className="pb-12 border-b studio-rule flex items-baseline justify-between">
            <h2 className="studio-heading text-3xl md:text-4xl">Why Cohby Learn?</h2>
            <span className="studio-label">System Features</span>
          </Reveal>

          <RevealGroup className="border-b studio-rule">
            {features.map((f, i) => (
              <RevealItem key={i} className="grid grid-cols-1 lg:grid-cols-12 py-10 border-t studio-rule items-start group hover:bg-black/[0.015] transition-colors duration-300">
                <div className="lg:col-span-2 studio-label mb-3 lg:mb-0 lg:pt-1">{f.category}</div>
                <div className="lg:col-span-4 pr-6 mb-4 lg:mb-0">
                  <h3 className="text-xl font-black text-[#121214] group-hover:text-rose transition-colors mb-3 uppercase tracking-tight">{f.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{f.description}</p>
                </div>
                <div className="lg:col-span-5 lg:pt-1">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-rose/[0.08] border border-rose/[0.12] text-rose font-mono text-xs font-bold mb-3">{f.badge}</span>
                  <p className="text-xs text-black/40 font-mono">{f.detail}</p>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                  <div className="w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center group-hover:border-[#121214] group-hover:bg-[#121214] transition-all duration-300">
                    {f.icon}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Modular blocks + preview */}
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b studio-rule py-16">
            <RevealItem>
              <h3 className="studio-heading text-2xl mb-4">Modular Course Building Blocks</h3>
              <p className="text-sm text-black/50 leading-relaxed mb-8">
                Courses are more than just text. Cohby Learn uses a modular "Block" system that allows for rich, interactive curriculum design.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {blocks.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-black/[0.07] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0" />
                    <span className="font-mono text-xs text-black/70">{item}</span>
                  </div>
                ))}
              </div>
            </RevealItem>

            {/* Course block UI mockup */}
            <RevealItem>
              <h3 className="studio-heading text-2xl mb-4">Course Block Preview</h3>
              <div className="bg-white border border-black/[0.07] rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] space-y-3">
                {[
                  { num: "01", label: "Introductory Video Lecture",    duration: "12m"  },
                  { num: "02", label: "SCORM Course Package",          duration: "File" },
                  { num: "03", label: "Self-Reflection Questionnaire", duration: "Task" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f8f5f1] p-4 rounded-xl border border-black/[0.06] flex items-center justify-between hover:bg-[#ede9e3] transition-colors cursor-grab">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-rose/[0.08] border border-rose/[0.15] flex items-center justify-center font-mono text-xs text-rose font-bold">{item.num}</div>
                      <div className="space-y-1.5">
                        <div className="h-2.5 w-36 bg-black/[0.1] rounded-full" />
                        <div className="h-2 w-12 bg-black/[0.06] rounded-full" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-black/30">{item.duration}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </RevealGroup>

          {/* Security */}
          <div className="py-16 border-b studio-rule">
            <Reveal y={16} className="flex items-baseline justify-between mb-12">
              <h2 className="studio-heading text-3xl">Bank-Level Security</h2>
              <span className="studio-label">Data Isolation</span>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {security.map((s, i) => (
                <RevealItem key={i} className="group">
                  <span className="studio-label mb-3 block">Security Layer 0{i + 1}</span>
                  <h3 className="text-lg font-black text-[#121214] mb-3 group-hover:text-rose transition-colors uppercase tracking-tight">{s.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{s.desc}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* CTA */}
          <Reveal className="pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Build Your Academy.</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Start creating courses today with the AI Architect. No credit card required for trial organisations.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://www.cohbylearn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#121214] text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose hover:text-black transition-colors duration-300"
              >
                Launch Free Trial →
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent border border-black/[0.15] text-[#121214] font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#121214] hover:text-white hover:border-[#121214] transition-colors duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default CohbyLearn;
