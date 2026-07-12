import { Link } from "react-router-dom";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const Challenges = () => {
  const challenges = [
    {
      num: "01",
      title: "Fragmented Donor & Constituent Data",
      problem: "Spreadsheets here, email lists there, sticky notes everywhere. When your donor and volunteer info is scattered across different places, it's easy to miss opportunities and hard to keep communications personal.",
      solution: "Salesforce brings all your data together in one place. You get a 360-degree view of every supporter — donors, volunteers, beneficiaries, all in a single, searchable database. Suddenly, you can see who's engaged, personalise your outreach, and build stronger relationships.",
    },
    {
      num: "02",
      title: "Tracking Campaigns & Donations",
      problem: "You're running multiple campaigns — online appeals, events, grant applications — and trying to track who gave what, when, and why. Without a clear system, it's nearly impossible to know what's working.",
      solution: "Salesforce's campaign and donation tracking tools let you see exactly where every pound or dollar came from, which campaigns are hitting targets, and which donors need a thank-you call. Automated workflows can even send receipts and follow-ups instantly.",
    },
    {
      num: "03",
      title: "Demonstrating Impact to Stakeholders",
      problem: "Funders want proof: How many people did you help? What outcomes did you achieve? When your data is messy or incomplete, creating compelling reports feels like pulling teeth.",
      solution: "With Salesforce, you can track programme outcomes, beneficiary progress, and key metrics in real-time. Dashboards and reports are built in, so you can generate beautiful, data-driven stories for grant applications and board meetings clearly and confidently.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      <section className="relative min-h-[45vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem><h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
            Impact<br />
            <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">challenges</span>
          </h1></RevealItem>
          <RevealItem><p className="text-base text-white/45 mt-6 max-w-md leading-relaxed">
            Top 3 challenges non-profits face, and how Salesforce solves them.
          </p></RevealItem>
        </RevealGroup>
      </section>

      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">

          <div className="pb-12 border-b studio-rule">
            <h2 className="studio-heading text-3xl mb-4">Research & Insights</h2>
            <p className="text-sm text-black/55 leading-relaxed max-w-2xl">
              Running a non-profit is a labour of love, but it's not always smooth sailing. You're juggling big missions, tight budgets, and a million moving parts. Here are the top three non-profit challenges we see all the time — and how Salesforce can help you turn chaos into clarity.
            </p>
          </div>

          <div className="space-y-0">
            {challenges.map((challenge, i) => (
              <div key={i} className="border-b studio-rule py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-3">
                    <span className="studio-label">Challenge {challenge.num}</span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-8">{challenge.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t studio-rule pt-8">
                      <div>
                        <p className="studio-label mb-3">The Obstacle</p>
                        <p className="text-sm text-black/50 leading-relaxed">{challenge.problem}</p>
                      </div>
                      <div className="border-l studio-rule pl-8 md:pl-12">
                        <p className="studio-label text-rose mb-3">Salesforce Resolution</p>
                        <p className="text-sm text-black/60 leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <div className="mt-16 bg-white border border-black/[0.08] rounded-2xl p-8 md:p-12 text-center shadow-[0_4px_40px_rgba(0,0,0,0.05)]">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight mb-4">The Bottom Line</h3>
            <p className="text-sm text-black/50 leading-relaxed max-w-xl mx-auto">
              Non-profits face unique challenges, but you don't have to tackle them alone. Salesforce is built to handle exactly these pain points. We'll show you how Salesforce can solve these challenges for your organisation, with zero jargon and total transparency.
            </p>
          </div>

          <div className="border-t studio-rule pt-16 mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Ready to Solve These Challenges?</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Let's discuss how Salesforce can transform your non-profit operations.</p>
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

export default Challenges;
