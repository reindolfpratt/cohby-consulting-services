import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, WordsReveal } from "@/components/motion/Reveal";

const CloudSolutions = () => {
  const services = [
    {
      title: "Cloud Infrastructure Setup",
      category: "ARCHITECTURE",
      description: "Design and deploy scalable, high-performance cloud architectures tailored to your enterprise requirements.",
      features: ["AWS, Azure, and Google Cloud Platform (GCP)", "Serverless architecture design", "High availability and disaster recovery", "Cost optimization and auditing"],
    },
    {
      title: "Seamless Cloud Migration",
      category: "MIGRATION",
      description: "Migrate your legacy systems to the cloud with zero downtime and complete data integrity.",
      features: ["Infrastructure and application migration", "Database migration services", "Minimal downtime strategies", "Post-migration support and tuning"],
    },
    {
      title: "Cloud Security & Compliance",
      category: "SECURITY",
      description: "Enterprise-grade security implementations ensuring your data remains protected and compliant with industry standards.",
      features: ["Identity and Access Management (IAM)", "Data encryption in transit and at rest", "Vulnerability assessments", "Regulatory compliance (GDPR, HIPAA, SOC2)"],
    },
    {
      title: "Managed Cloud Services",
      category: "OPERATIONS",
      description: "24/7 monitoring, maintenance, and optimization of your cloud environments, so your team can focus on building.",
      features: ["Proactive monitoring and alerting", "Performance optimization", "Automated backups and patching", "Dedicated cloud support engineers"],
    },
  ];

  const benefits = [
    { title: "Infinite Scalability", description: "Automatically scale resources up or down based on your business demands." },
    { title: "Enhanced Security",    description: "Leverage state-of-the-art security protocols and compliance frameworks." },
    { title: "Cost Efficiency",      description: "Pay only for what you use and optimize overhead with intelligent resource management." },
    { title: "High Availability",    description: "Ensure your applications are always online with robust disaster recovery plans." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <RevealItem className="lg:col-span-8">
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
                Elevate<br />Your<br />
                Cloud <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">systems</span>.
              </h1>
            </RevealItem>
            <RevealItem className="lg:col-span-4 lg:pb-2 flex flex-col gap-8">
              <p className="text-base text-white/45 leading-relaxed">
                Secure, scalable, and high-performance cloud solutions that drive digital transformation and enterprise agility.
              </p>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-rose text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors self-start"
              >
                Architect Your Cloud →
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          <Reveal y={16} className="pb-12 border-b studio-rule flex items-baseline justify-between">
            <h2 className="studio-heading text-3xl md:text-4xl">Cloud Solutions</h2>
            <span className="studio-label">Capabilities</span>
          </Reveal>

          <RevealGroup className="border-b studio-rule">
            {services.map((service) => (
              <RevealItem key={service.title} className="grid grid-cols-1 lg:grid-cols-12 py-10 border-t studio-rule items-start group hover:bg-black/[0.015] transition-colors duration-300">
                <div className="lg:col-span-2 studio-label mb-3 lg:mb-0 lg:pt-1">{service.category}</div>
                <div className="lg:col-span-5 pr-8 mb-5 lg:mb-0">
                  <h3 className="text-xl font-black text-[#121214] group-hover:text-rose transition-colors mb-3 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{service.description}</p>
                </div>
                <div className="lg:col-span-4 mb-4 lg:mb-0 lg:pt-1">
                  <span className="studio-label mb-3 block">Core Deliverables</span>
                  <ul className="space-y-2">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose/70 flex-shrink-0" />
                        <span className="text-xs text-black/55">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                  <div className="w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center group-hover:border-[#121214] group-hover:bg-[#121214] transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="pt-20 pb-8">
            <p className="text-4xl md:text-5xl font-black text-[#121214] uppercase tracking-tight leading-tight max-w-3xl mb-16">
              <WordsReveal text="The cloud advantage. Scale instantly, secure your data, optimise infrastructure overhead, and guarantee high availability." />
            </p>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t studio-rule pt-10">
              {benefits.map((b, i) => (
                <RevealItem key={i} className="group">
                  <span className="text-xs font-mono text-black/25 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-black text-[#121214] mb-2 group-hover:text-rose transition-colors uppercase tracking-tight">{b.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{b.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal className="border-t studio-rule pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Ready to Upgrade?</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Our cloud engineers can architect a solution that guarantees uptime and boosts performance.</p>
            </div>
            <Link
              to="/book-consultation"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#121214] text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose hover:text-black transition-colors duration-300"
            >
              Schedule an Assessment →
            </Link>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
