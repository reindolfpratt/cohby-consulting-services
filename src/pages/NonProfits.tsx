import { Link } from "react-router-dom";
import { ArrowRight, Gift, Users, TrendingUp } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, WordsReveal } from "@/components/motion/Reveal";

const NonProfits = () => {
  const benefits = [
    {
      icon: <Gift className="h-5 w-5 text-rose" />,
      title: "Free Salesforce Licenses",
      description: "Access up to 10 free Salesforce licenses through the Power of Us Programme.",
      link: "/non-profits/free-salesforce",
      category: "LICENSING",
    },
    {
      icon: <Users className="h-5 w-5 text-rose" />,
      title: "Nonprofit Success Pack",
      description: "Purpose-built tools for donor management, fundraising, and program delivery.",
      link: "/non-profits/npsp-basics",
      category: "NPSP BASICS",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-rose" />,
      title: "Overcome Common Challenges",
      description: "Solutions for data fragmentation, fundraising tracking, and impact reporting.",
      link: "/non-profits/challenges",
      category: "STRATEGY",
    },
  ];

  const points = [
    { title: "Unified Donor Management",   desc: "Keep all donor information, interactions, and giving history in one place." },
    { title: "Powerful Fundraising Tools", desc: "Track campaigns, pledges, and donations with purpose-built features." },
    { title: "Programme Management",       desc: "Measure programme outcomes and demonstrate impact to stakeholders." },
    { title: "Volunteer Coordination",     desc: "Manage volunteer recruitment, scheduling, and engagement efficiently." },
    { title: "Grant Tracking",             desc: "Monitor grant applications, requirements, and reporting deadlines." },
    { title: "Cost-Effective Implementation", desc: "Free or heavily discounted licensing through Salesforce.org programs." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      <section className="relative min-h-[85vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <RevealItem className="lg:col-span-8">
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
                Tech for<br />Your<br />
                Mission <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">outcomes</span>.
              </h1>
            </RevealItem>
            <RevealItem className="lg:col-span-4 lg:pb-2 flex flex-col gap-8">
              <p className="text-base text-white/45 leading-relaxed">
                Maximise your impact with powerful, affordable Salesforce solutions designed specifically for non-profit organisations.
              </p>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-rose text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors self-start"
              >
                Book Consultation →
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

          <Reveal y={16} className="pb-12 border-b studio-rule">
            <h2 className="studio-heading text-3xl md:text-4xl mb-4">Technology That Amplifies Your Mission</h2>
            <p className="text-sm text-black/50 max-w-2xl leading-relaxed">
              Running a non-profit is challenging enough without worrying about complex, expensive technology. We specialise in helping non-profits leverage Salesforce's powerful tools at little to no licence cost, so you can focus entirely on making a difference.
            </p>
          </Reveal>

          <RevealGroup className="border-b studio-rule">
            {benefits.map((benefit, index) => (
              <RevealItem key={index} className="grid grid-cols-1 lg:grid-cols-12 py-10 border-t studio-rule items-start group hover:bg-black/[0.015] transition-colors duration-300">
                <div className="lg:col-span-2 studio-label mb-3 lg:mb-0 lg:pt-1">{benefit.category}</div>
                <div className="lg:col-span-9 pr-8 mb-5 lg:mb-0">
                  <h3 className="text-xl font-black text-[#121214] group-hover:text-rose transition-colors mb-3 uppercase tracking-tight">{benefit.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed mb-4">{benefit.description}</p>
                  <Link to={benefit.link} className="inline-flex items-center text-xs font-mono uppercase tracking-[0.15em] text-rose hover:text-[#121214] transition-colors">
                    Learn More →
                  </Link>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                  <Link to={benefit.link}>
                    <div className="w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center group-hover:border-[#121214] group-hover:bg-[#121214] transition-all duration-300">
                      <ArrowRight className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Why Salesforce */}
          <div className="pt-20 pb-8">
            <p className="text-4xl md:text-5xl font-black text-[#121214] uppercase tracking-tight leading-tight max-w-3xl mb-16">
              <WordsReveal text="Why Salesforce? Build donor trust, volunteer engagement, and grant transparency through cloud systems." />
            </p>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t studio-rule pt-10">
              {points.map((item, i) => (
                <RevealItem key={i} className="group">
                  <span className="text-xs font-mono text-black/25 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-black text-[#121214] mb-2 group-hover:text-rose transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal className="border-t studio-rule pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Ready to Upgrade?</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Let's discuss how Salesforce can help you achieve more with less.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-[#121214] text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose hover:text-black transition-colors duration-300"
              >
                Book Free Consultation →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-transparent border border-black/[0.15] text-[#121214] font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#121214] hover:text-white hover:border-[#121214] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default NonProfits;
