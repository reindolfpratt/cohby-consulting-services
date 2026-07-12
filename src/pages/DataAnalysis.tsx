import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, WordsReveal } from "@/components/motion/Reveal";

const DataAnalysis = () => {
  const services = [
    {
      title: "Data Engineering & Pipelines",
      category: "PIPELINES",
      description: "Centralise your scattered data into robust data warehouses and lakes. We build automated ETL/ELT pipelines that ensure your data is clean, accurate, and ready to use.",
      features: ["Data Warehouse architecture (Snowflake, BigQuery)", "Automated ETL/ELT pipeline development", "Data cleansing and normalisation", "Real-time streaming data solutions"],
    },
    {
      title: "Business Intelligence & Dashboards",
      category: "INTELLIGENCE",
      description: "Turn raw data into interactive, intuitive dashboards. We help executive teams and operators understand their business performance at a glance.",
      features: ["Tableau, PowerBI & Looker implementation", "Custom dashboard design and UX", "KPI and metric definition", "Self-service analytics setup"],
    },
    {
      title: "Predictive Analytics & Modeling",
      category: "PREDICTIVE",
      description: "Leverage statistical models and machine learning to forecast trends, understand customer behaviour, and optimise pricing strategies.",
      features: ["Customer churn prediction", "Demand forecasting & inventory optimisation", "Pricing elasticity models", "Propensity and segmentation analysis"],
    },
    {
      title: "Data Strategy & Governance",
      category: "GOVERNANCE",
      description: "Establish a secure, compliant data foundation. We define data governance policies so your teams trust the data they rely on.",
      features: ["Data maturity assessments", "Data governance framework implementation", "Master Data Management (MDM)", "Compliance and security reviews"],
    },
  ];

  const benefits = [
    { title: "Deep Insights",      description: "Uncover hidden patterns in your data that drive strategic decisions." },
    { title: "Revenue Growth",     description: "Identify new market opportunities and optimise pricing models." },
    { title: "Improved Accuracy",  description: "Eliminate manual data entry and blind guesswork." },
    { title: "Holistic View",      description: "Maintain a single source of truth across all departments." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      <section className="relative min-h-[85vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <RevealItem className="lg:col-span-8">
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
                Harness<br />Your<br />
                Data <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">potential</span>.
              </h1>
            </RevealItem>
            <RevealItem className="lg:col-span-4 lg:pb-2 flex flex-col gap-8">
              <p className="text-base text-white/45 leading-relaxed">
                Transform raw, complex data into an actionable strategic asset with predictive modelling and powerful business intelligence.
              </p>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-rose text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors self-start"
              >
                Unlock Your Data →
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
            <h2 className="studio-heading text-3xl md:text-4xl">Analytics Services</h2>
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
              <WordsReveal text="Data driven impact. Stop guessing and start knowing. We turn complex data streams into predictable business growth." />
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
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Stop Guessing, Start Knowing</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Our data engineers can turn your messy data into a powerful engine for predictable growth.</p>
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

export default DataAnalysis;
