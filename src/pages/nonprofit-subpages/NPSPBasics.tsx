import { Link } from "react-router-dom";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const NPSPBasics = () => {
  const features = [
    { title: "Constituent Management",      category: "CONSTITUENTS", description: "Keep track of individuals (donors, volunteers, beneficiaries) and organisations (foundations, companies) in one place. No more scattered spreadsheets, just a single, searchable database." },
    { title: "Donation & Gift Management",  category: "FUNDRAISING",  description: "Record all types of donations: one-off gifts, pledges, recurring donations and track them easily. You can see giving history at a glance and never miss a thank you." },
    { title: "Household Management",        category: "HOUSEHOLDS",   description: "Link related people into households. This means you can communicate with families or groups together, making your outreach more personal and organised." },
    { title: "Campaign Management",         category: "CAMPAIGNS",    description: "Track your fundraising campaigns, appeals, and events. See which efforts are bringing in donations and where to focus your energy." },
    { title: "Engagement Plans",            category: "AUTOMATION",   description: "Automate follow-ups and communications. For example, send a welcome email series to new donors or schedule check-ins with volunteers." },
    { title: "Reports & Dashboards",        category: "REPORTING",    description: "Get visual snapshots of your fundraising progress, donor retention, and more. No technical expertise needed to create clear, informative reports." },
  ];

  const whyStart = [
    { label: "It's Free", body: "NPSP is included with your Salesforce nonprofit account at no extra cost." },
    { label: "Built for Nonprofits", body: "Speaks your language — donors, not customers; campaigns, not sales targets." },
    { label: "Room to Grow", body: "Start simple and add more features as your organisation's needs evolve." },
    { label: "Community Support", body: "Join a massive global community of nonprofits sharing resources." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      <section className="relative min-h-[45vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem><h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
            NPSP<br />
            <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">features</span>
          </h1></RevealItem>
          <RevealItem><p className="text-base text-white/45 mt-6 max-w-md leading-relaxed">Your foundation for nonprofit success on Salesforce.</p></RevealItem>
        </RevealGroup>
      </section>

      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">

          <div className="pb-12 border-b studio-rule space-y-4">
            <h2 className="studio-heading text-3xl">System Basics</h2>
            <p className="text-sm text-black/55 leading-relaxed">
              You've got Salesforce, now meet its nonprofit superpower: the <strong className="text-[#121214]">Nonprofit Success Pack (NPSP)</strong>! If you're a charity or nonprofit just starting out with Salesforce, NPSP is your launchpad for better donor management, fundraising, and more.
            </p>
            <div className="pt-2">
              <h3 className="text-lg font-black text-[#121214] uppercase tracking-tight mb-3">What is NPSP?</h3>
              <p className="text-sm text-black/55 leading-relaxed">
                NPSP (Nonprofit Success Pack) is a <strong className="text-[#121214]">free, open source package</strong> built on Salesforce, designed specifically for nonprofits. It comes ready to use, so you don't have to build everything from scratch.
              </p>
            </div>
          </div>

          <div className="py-12 border-b studio-rule">
            <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-8">Core NPSP Features</h3>
            <div className="border-b studio-rule">
              {features.map((feature, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 py-8 border-t studio-rule items-start group hover:bg-black/[0.015] transition-colors duration-300">
                  <div className="lg:col-span-3 studio-label mb-2 lg:mb-0 lg:pt-0.5">{feature.category}</div>
                  <div className="lg:col-span-9">
                    <h4 className="text-base font-black text-[#121214] group-hover:text-rose transition-colors mb-2 uppercase tracking-tight">{feature.title}</h4>
                    <p className="text-sm text-black/50 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-12 border-b studio-rule">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight mb-6">Why Start with NPSP?</h3>
            <div className="bg-white border border-black/[0.07] rounded-2xl p-8 space-y-5">
              {whyStart.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-rose font-mono text-sm font-bold flex-shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                  <p className="text-sm text-black/60">
                    <strong className="text-[#121214]">{item.label}:</strong> {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 space-y-4">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight">Getting Started Is Simple</h3>
            <p className="text-sm text-black/55 leading-relaxed">
              If the idea of setting up NPSP feels daunting, don't worry. That's what we're here for. At Cohby Consulting Services, we help nonprofits get up and running with NPSP quickly and painlessly. We'll handle the technical setup, train your team, and make sure you're confident using your new system.
            </p>
          </div>

          <div className="border-t studio-rule pt-16 mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Get Started with NPSP</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Let us help you set up and optimise your Nonprofit Success Pack for maximum impact.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-2 bg-[#121214] text-white font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose hover:text-black transition-colors duration-300"
              >
                Book Free Consultation →
              </Link>
              <Link
                to="/non-profits"
                className="inline-flex items-center gap-2 bg-transparent border border-black/[0.15] text-[#121214] font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#121214] hover:text-white hover:border-[#121214] transition-colors duration-300"
              >
                Back to Non-Profits
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NPSPBasics;
