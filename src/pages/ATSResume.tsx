import { Link } from "react-router-dom";
import {
  Mail,
  MessageSquare,
  Zap,
  Cpu,
  LayoutGrid,
  Download,
  ArrowRight,
  FileSearch,
  UploadCloud
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const ATSResume = () => {
  const tiers = [
    { name: "Free",          price: "£0",       limits: ["2 CV tailors/day", "1 CV build/month"] },
    { name: "Pro Monthly",   price: "£10/mo",   limits: ["80 tailors/month"] },
    { name: "Pro Quarterly", price: "£25/3mo",  limits: ["Unlimited tailors"] },
    { name: "Pro 8 Months",  price: "£50/8mo",  limits: ["Unlimited tailors"] },
  ];

  const features = [
    { icon: <Zap       className="text-rose h-5 w-5" />, title: "CV Tailoring",      desc: "Matches keywords, reorders experience reverse-chronologically, and strips redundant language for a target job." },
    { icon: <Mail      className="text-rose h-5 w-5" />, title: "Cover Letter",      desc: "Writes a professional, bespoke cover letter with zero fluff or AI clichés." },
    { icon: <MessageSquare className="text-rose h-5 w-5" />, title: "Interview Prep",   desc: "Generates technical and behavioural questions with personalised strategies based on your actual CV." },
    { icon: <FileSearch className="text-rose h-5 w-5" />, title: "Resume Optimiser",  desc: "Rewrites sections using action verbs and quantified achievements for maximum impact." },
    { icon: <Cpu       className="text-rose h-5 w-5" />, title: "Skill Suggester",   desc: "Analyses your history and recommends missing technical, soft, and tool skills." },
    { icon: <LayoutGrid className="text-rose h-5 w-5" />, title: "Application Email", desc: "Drafts a concise, ready-to-send job application email tailored to the role." },
  ];

  const builderItems = [
    { label: "6 Premium Templates", sub: "Classic, Modern, Minimal, Professional, Elegant, Creative", icon: <LayoutGrid size={18} className="text-rose" /> },
    { label: "Smart Import",         sub: "Upload existing PDF or DOCX — auto-parses into structured JSON instantly.", icon: <UploadCloud size={18} className="text-rose" /> },
    { label: "Flexible Export",      sub: "Export to PDF or DOCX for every document type with just a toggle.", icon: <Download size={18} className="text-rose" /> },
  ];

  const atsScores = [
    { label: "Contact Info Completeness",      score: 100 },
    { label: "Professional Summary Presence",  score: 100 },
    { label: "Work Experience Depth",          score: 85  },
    { label: "Use of Action Verbs",            score: 90  },
    { label: "Quantified Achievements",        score: 75  },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <RevealItem className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// Cohby Resume Tool</span>
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
                ATS Resume<br />
                Tailor <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">system</span>.
              </h1>
            </RevealItem>
            <RevealItem className="lg:col-span-4 lg:pb-2 flex flex-col gap-8">
              <p className="text-base text-white/45 leading-relaxed">
                Automatically rewrite and package everything you need to land your dream role.
              </p>
              <a
                href="https://www.atsresumetailor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors self-start"
              >
                Tailor Your CV Now →
              </a>
            </RevealItem>
          </RevealGroup>

          {/* Mockup preview — real product screenshot */}
          <Reveal className="mt-16 w-full relative z-10">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden p-3 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="ml-4 flex-1 bg-white/[0.06] rounded-full h-5 flex items-center px-3">
                  <span className="text-[9px] font-mono text-white/30 tracking-wider">atsresumetailor.com</span>
                </div>
              </div>
              <a href="https://www.atsresumetailor.com/" target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src="/ats-preview.png"
                  alt="ATS Resume Tailor — app preview"
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

          {/* Core features */}
          <Reveal y={16} className="pb-12 border-b studio-rule flex items-baseline justify-between">
            <h2 className="studio-heading text-3xl md:text-4xl">Core AI Features</h2>
            <span className="studio-label">Capabilities</span>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 border-b studio-rule">
            {features.map((item, i) => (
              <RevealItem key={i} className="p-8 border-b studio-rule md:border-b-0 md:border-r studio-rule last:border-r-0 group hover:bg-black/[0.015] transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose/[0.08] border border-rose/[0.12] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#121214] mb-3 group-hover:text-rose transition-colors uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="text-xs font-mono text-rose/70 uppercase tracking-widest mt-8 mb-16">
            // You always have the final say; full edit capabilities before you download.
          </p>

          {/* CV Builder & Export + ATS Score */}
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b studio-rule py-16">
            <RevealItem className="space-y-6">
              <h3 className="studio-heading text-2xl mb-8">CV Builder & Export</h3>
              {builderItems.map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <h4 className="font-black text-[#121214] mb-2 flex items-center gap-3 uppercase tracking-tight">
                    {item.icon} {item.label}
                  </h4>
                  <p className="text-sm text-black/50 leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </RevealItem>

            <RevealItem>
              <h3 className="studio-heading text-2xl mb-8">ATS Scoring Engine</h3>
              <div className="bg-white border border-black/[0.07] rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] space-y-6">
                {atsScores.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-black/60">{item.label}</span>
                      <span className="text-rose font-bold">{item.score}/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/[0.06] rounded-full overflow-hidden">
                      <div className="h-full bg-rose rounded-full transition-all duration-500" style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
                <p className="text-[9px] text-center text-black/30 uppercase tracking-widest font-mono pt-2">// Accepts PDF, DOCX, PNG, JPG (via OCR)</p>
              </div>
            </RevealItem>
          </RevealGroup>

          {/* Subscription Tiers */}
          <div className="py-16 border-b studio-rule">
            <Reveal y={16} className="flex items-baseline justify-between mb-12">
              <h2 className="studio-heading text-3xl">Subscription Tiers</h2>
              <span className="studio-label">Flexible Access</span>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.07] border border-black/[0.07] rounded-2xl overflow-hidden bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
              {tiers.map((tier, i) => (
                <RevealItem key={i} className="p-8 group hover:bg-[#f8f5f1] transition-colors duration-300">
                  <span className="studio-label mb-4 block">Tier 0{i + 1}</span>
                  <h3 className="text-xl font-black text-[#121214] mb-2 group-hover:text-rose transition-colors uppercase tracking-tight">{tier.name}</h3>
                  <div className="text-3xl font-black text-[#121214] mb-6 font-mono tracking-tight">{tier.price}</div>
                  <ul className="space-y-3">
                    {tier.limits.map((limit, li) => (
                      <li key={li} className="flex items-start gap-2.5 text-xs text-black/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose/70 mt-1 flex-shrink-0" />
                        <span>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* CTA */}
          <Reveal className="pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Land the Role. Instantly.</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Join hundreds of applicants who have optimised their career search with ATS Resume Tailor.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.atsresumetailor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#121214] text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose hover:text-black transition-colors duration-300"
              >
                Start Tailoring →
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

export default ATSResume;
