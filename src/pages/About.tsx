import { Reveal, RevealGroup, RevealItem, WordsReveal } from "@/components/motion/Reveal";

const About = () => {
  const whyUs = [
    {
      tag: "ROOT STRENGTH",
      title: "Deep Engineering Roots",
      body: "We go beyond high-level strategy to execute complex, technical implementations. We write the code, configure the environments, and migrate the data.",
    },
    {
      tag: "ARCHITECTURE",
      title: "Future-Proof Architecture",
      body: "We build scalable, modular systems designed to handle tomorrow's data loads and computing demands without requiring a total rewrite.",
    },
    {
      tag: "TIMELINES",
      title: "Agile & Responsive",
      body: "Free from massive agency overhead, we deliver highly responsive execution, rapid prototyping, and flexible engagement models.",
    },
    {
      tag: "GEOGRAPHY",
      title: "Global Talent, Local Touch",
      body: "Operating across the UK and Canada, we offer around-the-clock capabilities combined with personalized communication and dedicated project leadership.",
    },
  ];

  const values = [
    { title: "Impact-Obsessed", body: "We engineer for quantifiable performance, speed, and business scale." },
    { title: "Collaborative",   body: "We integrate seamlessly with your teams, accelerating delivery and execution." },
    { title: "Elite Expertise", body: "Top-tier cloud architects, data engineers, and certified specialists." },
    { title: "Zero BS",         body: "Complete transparency in architecture, pricing, and timelines." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark ── */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
              About<br />
              <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">cohby</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-white/45 mt-6 max-w-md leading-relaxed">
              Your elite engineering partner in cloud, data, and business transformation.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* gradient */}
      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      {/* ── Light Clay Body ── */}
      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Mission */}
          <Reveal y={16} className="pb-12 border-b studio-rule flex items-baseline justify-between">
            <h2 className="studio-heading text-3xl md:text-4xl">Our Mission</h2>
            <span className="studio-label">UK & Canada</span>
          </Reveal>

          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-24 border-b studio-rule">
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-black text-[#121214] uppercase leading-tight">Quantifiable Impact</h3>
            </div>
            <div className="lg:col-span-8 space-y-5 text-sm text-black/55 leading-relaxed">
              <p>
                Cohby Consulting Services operates on a core thesis: premium engineering should translate directly to elite business outcomes. We've witnessed too many organisations crippled by bloated implementations, rigid architecture, and disconnected data silos.
              </p>
              <p>
                We do things differently. We are deeply technical, hands-on engineers and consultants who solve highly complex data and cloud challenges. Whether you require advanced AI pipelines, robust cloud infrastructure, or a high-performance Salesforce environment, we build to scale.
              </p>
              <p>
                Based in the UK and Canada, we architect customised, future-proof solutions for global enterprises driving the modern digital frontier.
              </p>
            </div>
          </Reveal>

          {/* Values */}
          <div className="pt-16 pb-16 border-b studio-rule">
            <Reveal y={16} className="flex items-baseline justify-between mb-12">
              <h2 className="studio-heading text-3xl">Core Values</h2>
              <span className="studio-label">Principles</span>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t studio-rule divide-y lg:divide-y-0 lg:divide-x divide-black/[0.07] pt-8">
              {values.map((v, i) => (
                <RevealItem key={i} className="group pt-6 lg:pt-0 lg:px-6 first:pl-0 last:pr-0">
                  <span className="text-xs font-mono text-black/25 block mb-4">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-black text-[#121214] mb-3 group-hover:text-rose transition-colors uppercase tracking-tight">{v.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{v.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Why us */}
          <div className="pt-16">
            <Reveal y={16} className="flex items-baseline justify-between mb-12">
              <h2 className="studio-heading text-3xl">Why Partner With Us?</h2>
            </Reveal>
            <RevealGroup className="border-b studio-rule">
              {whyUs.map((item, i) => (
                <RevealItem key={i} className="grid grid-cols-1 lg:grid-cols-12 py-10 border-t studio-rule items-start group hover:bg-black/[0.015] transition-colors duration-300">
                  <div className="lg:col-span-3 studio-label mb-3 lg:mb-0 lg:pt-1">{item.tag}</div>
                  <div className="lg:col-span-4 mb-3 lg:mb-0">
                    <h3 className="text-lg font-black text-[#121214] uppercase tracking-tight group-hover:text-rose transition-colors">{item.title}</h3>
                  </div>
                  <div className="lg:col-span-5 text-sm text-black/50 leading-relaxed">{item.body}</div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
