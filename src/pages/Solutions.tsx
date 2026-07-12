import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, LayoutGrid, Cloud, ShieldCheck, Database, Sliders } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Salesforce", "Cloud & Data", "AI & Automation", "Support"];

  const solutions = [
    {
      title: "Salesforce Implementation",
      category: "Salesforce",
      index: "001",
      icon: <LayoutGrid className="h-10 w-10" />,
      description: "Full end-to-end Salesforce implementation configured, customised, and optimised for maximum operational efficiency.",
      features: ["Requirements discovery", "Custom field config", "Process automation", "Permissions management"],
    },
    {
      title: "Cloud Infrastructure Setup",
      category: "Cloud & Data",
      index: "002",
      icon: <Cloud className="h-10 w-10" />,
      description: "Scale your business with secure, high-performance cloud infrastructure tailored for modern enterprises.",
      features: ["AWS, Azure & GCP setup", "Serverless architecture", "Disaster recovery plans", "Cost optimization audits"],
    },
    {
      title: "AI Engineering & Pipelines",
      category: "AI & Automation",
      index: "003",
      icon: <Sliders className="h-10 w-10" />,
      description: "Streamline your operations with intelligent workflows, machine learning models, and document extraction pipelines.",
      features: ["ML pipeline deployment", "LLM system integrations", "API & webhook config", "Automated extraction"],
    },
    {
      title: "Data Analytics & Insights",
      category: "Cloud & Data",
      index: "004",
      icon: <Database className="h-10 w-10" />,
      description: "Transform raw complex data into an actionable strategic asset with predictive modeling and powerful BI.",
      features: ["Predictive modeling", "Custom dashboards (PowerBI)", "KPI & metric definition", "Data strategy frameworks"],
    },
    {
      title: "Data Migration & Integration",
      category: "Cloud & Data",
      index: "005",
      icon: <Database className="h-10 w-10" />,
      description: "Seamlessly migrate your data and integrate with your existing systems for a unified view of your business.",
      features: ["Data cleansing & prep", "Secure cloud migration", "API integration setup", "ETL process design"],
    },
    {
      title: "Salesforce Customisation",
      category: "Salesforce",
      index: "006",
      icon: <LayoutGrid className="h-10 w-10" />,
      description: "Make Salesforce truly yours with custom Apex triggers, Lightning components, and tailored workflows.",
      features: ["Apex code development", "Lightning components", "Third-party integrations", "Custom app creation"],
    },
    {
      title: "Ongoing Training & Support",
      category: "Support",
      index: "007",
      icon: <ShieldCheck className="h-10 w-10" />,
      description: "Empower your team with comprehensive training and ongoing support to maximise your tech investment.",
      features: ["User & admin training", "Custom documentation", "Dedicated helpdesk", "Best practice audits"],
    },
    {
      title: "Non-Profit Tech Solutions",
      category: "Salesforce",
      index: "008",
      icon: <LayoutGrid className="h-10 w-10" />,
      description: "Specialised tech solutions for non-profit organisations, including free licensing guidance and donor portals.",
      features: ["Power of Us licensing", "NPSP customization", "Donor tracking setup", "Volunteer management"],
    },
    {
      title: "System Health Checks",
      category: "Salesforce",
      index: "009",
      icon: <ShieldCheck className="h-10 w-10" />,
      description: "Already using complex tech stacks? We'll review your setup and identify opportunities for optimization.",
      features: ["Comprehensive system audit", "Performance tuning", "Security & access review", "Actionable roadmap"],
    },
    {
      title: "AI-Powered Websites",
      category: "AI & Automation",
      index: "010",
      icon: <Cloud className="h-10 w-10" />,
      description: "Next-generation websites that work smarter. Personalize content, automate SEO, and capture leads with AI.",
      features: ["Content personalization", "AI search & indexing", "Automated SEO setups", "Smart lead qualification"],
    },
    {
      title: "AI Agent Chatbots",
      category: "AI & Automation",
      index: "011",
      icon: <Sliders className="h-10 w-10" />,
      description: "Engage customers 24/7 with intelligent conversational agents that understand context and write leads to CRM.",
      features: ["Natural language context", "Multi-channel support", "Salesforce integration", "Appointment booking"],
    },
    {
      title: "Social Media Automations",
      category: "AI & Automation",
      index: "012",
      icon: <Sliders className="h-10 w-10" />,
      description: "Maintain a powerful social presence without the manual grind. Automate posting, engagement, and reporting.",
      features: ["Scheduled publishing", "Cross-platform loops", "Automated replies", "Analytics reports"],
    },
  ];

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return solutions.length;
    return solutions.filter((s) => s.category === cat).length;
  };

  const filteredSolutions = activeCategory === "All"
    ? solutions
    : solutions.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark Section ── */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">

        {/* Frosted arch window */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] md:w-[55%] h-[55%] rounded-t-[14rem] border-t border-x border-white/[0.07] bg-white/[0.012] backdrop-blur-[16px] shadow-[inset_0_2px_20px_rgba(255,255,255,0.04)] z-0 pointer-events-none" />

        {/* 4-col grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="border-r border-white/[0.02] h-full" />
          <div className="border-r border-white/[0.02] h-full" />
          <div className="border-r border-white/[0.02] h-full" />
          <div className="h-full" />
        </div>

        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-28 pt-40 max-w-7xl">
          <RevealGroup className="max-w-3xl">
            <RevealItem>
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose font-mono mb-6 block">// Portfolio</span>
            </RevealItem>
            <RevealItem>
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-white uppercase tracking-tight leading-[0.9]">
                Selected<br />
                <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">solutions</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-base text-white/45 leading-relaxed max-w-md">
                Enterprise digital engineering designed to automate, scale, and transform.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* ── Gallery — Light Clay Section ── */}
      <section className="bg-studio-light relative">

        {/* 3D Side Arch Pillars */}
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        {/* Filter Bar */}
        <div className="sticky top-0 z-40 bg-studio-light border-b border-black/[0.08] backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-wrap items-center gap-2 py-5">
              <span className="studio-label mr-4 hidden md:block">Filter —</span>
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      active ? "studio-filter-active" : "studio-filter-inactive"
                    }`}
                  >
                    {cat}
                    <sup className="ml-1 opacity-50 text-[8px] font-bold">{getCategoryCount(cat)}</sup>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Count */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl pt-14 pb-4">
          <Reveal y={16} className="flex items-baseline justify-between border-b border-black/[0.08] pb-6">
            <h2 className="studio-heading text-4xl md:text-5xl">
              {activeCategory === "All" ? "All Work" : activeCategory}
            </h2>
            <span className="studio-label">
              {String(filteredSolutions.length).padStart(2, "0")} projects
            </span>
          </Reveal>
        </div>

        {/* Project Cards Grid */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-10 pb-28">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {filteredSolutions.map((solution, i) => (
              <RevealItem
                key={solution.title}
                className="studio-card group cursor-pointer"
              >
                {/* Image / Visual Block */}
                <div className="studio-card-image aspect-[16/9] relative flex items-center justify-center">
                  {/* Large index number as background texture */}
                  <span className="absolute bottom-4 right-6 text-[6rem] font-black leading-none text-black/[0.04] select-none font-mono">
                    {solution.index}
                  </span>

                  {/* Service Icon */}
                  <div className="relative z-10 text-black/20 group-hover:text-black/40 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                    {solution.icon}
                  </div>

                  {/* Top-left label */}
                  <div className="absolute top-5 left-6 studio-label">
                    {solution.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300" />
                </div>

                {/* Text Block */}
                <div className="p-6 border-t border-black/[0.08]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#121214] tracking-tight uppercase leading-tight mb-2 group-hover:opacity-70 transition-opacity">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-black/45 leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2">
                        {solution.features.map((f) => (
                          <span
                            key={f}
                            className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded border border-black/[0.1] text-black/40"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center group-hover:border-black/30 group-hover:bg-black group-hover:text-white transition-all duration-300 mt-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* CTA Block inside light section */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl pb-32">
          <Reveal className="studio-cta-block p-14 md:p-20 text-center relative overflow-hidden">
            {/* subtle noise texture */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}} />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-6">// Next Step</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95]">
              Ready to<br />
              <span className="italic font-serif lowercase tracking-normal text-rose">upgrade?</span>
            </h2>
            <p className="text-base text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
              Let's build custom Salesforce, Cloud, or AI solutions tailored for your organisation.
            </p>
            <Magnetic>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose transition-colors duration-300 font-semibold press"
              >
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
