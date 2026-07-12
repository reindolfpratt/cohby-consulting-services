import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const FreeSalesforce = () => {
  const items = [
    "Donors and constituents",
    "Fundraising campaigns",
    "Grants and applications",
    "Programme delivery and outcomes",
    "Volunteer management",
    "Impact reporting",
  ];

  const steps = [
    "Check your organisation's eligibility",
    "Apply for the Power of Us Programme through Salesforce.org",
    "Receive your free licences and start building your CRM",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      <section className="relative min-h-[45vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem><h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
            Free CRM<br />
            <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">outcomes</span>
          </h1></RevealItem>
          <RevealItem><p className="text-base text-white/45 mt-6 max-w-md leading-relaxed">
            Access powerful Salesforce tools at no cost through the Power of Us Programme.
          </p></RevealItem>
        </RevealGroup>
      </section>

      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">

          <div className="pb-12 border-b studio-rule">
            <h2 className="studio-heading text-3xl mb-6">Strategy & Licensing</h2>
            <p className="text-sm text-black/55 leading-relaxed">
              What if you could get powerful CRM software, designed for non-profits, for free? Many charities and non-profit organisations are concerned about technology costs. Salesforce, a global leader in CRM, offers a solution that removes this barrier through the Power of Us Programme.
            </p>
          </div>

          <div className="py-12 border-b studio-rule space-y-6">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight">What is the Power of Us Programme?</h3>
            <p className="text-sm text-black/55 leading-relaxed">
              The Salesforce Power of Us Programme is a donation scheme that gives eligible non-profits <strong className="text-[#121214]">10 free licences</strong> for either Nonprofit Cloud or Sales Cloud Enterprise Edition.
            </p>
            <p className="text-sm text-black/55 leading-relaxed">
              Nonprofit Cloud is Salesforce's modern CRM solution for non-profits, with tools for donor management, fundraising, grant tracking, and programme delivery. Alternatively, you can use the Nonprofit Success Pack (NPSP), which is a set of features tailored for non-profit needs and can be added to Sales Cloud.
            </p>
          </div>

          <div className="py-12 border-b studio-rule space-y-6">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight">Who Qualifies?</h3>
            <p className="text-sm text-black/55 leading-relaxed">
              To benefit from the Salesforce Power of Us Programme, your organisation must be a registered non-profit or charity and meet certain criteria. This includes being recognised as a charitable organisation in your country and using the CRM for mission-related work.
            </p>
            <a
              href="https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/company/p10-eligibility-guidelines-English-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-rose hover:text-[#121214] transition-colors"
            >
              View full eligibility guidelines
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="py-12 border-b studio-rule space-y-6">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight">Beyond the Free Licences: Nonprofit Cloud and NPSP</h3>
            <p className="text-sm text-black/55 leading-relaxed">
              Once you have your free licences, you gain access to either Nonprofit Cloud or Sales Cloud with the Nonprofit Success Pack (NPSP). Both options are designed to help non-profits manage:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose/70 flex-shrink-0" />
                  <span className="text-sm text-black/60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-12 border-b studio-rule space-y-6">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight">Getting Started Is Simple</h3>
            <div className="bg-white border border-black/[0.07] rounded-2xl p-8 space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-rose font-mono text-sm font-bold flex-shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                  <p className="text-sm text-black/60">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 space-y-4">
            <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight">Need Help Getting Started?</h3>
            <p className="text-sm text-black/55 leading-relaxed">
              Setting up Salesforce, even with free licences, can feel overwhelming. That's where we come in. At Cohby Consulting Services, we specialise in helping non-profits get the most out of their Salesforce investment.
            </p>
          </div>

          <div className="border-t studio-rule pt-16 mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-[#121214] uppercase tracking-tight mb-2">Transform Your Non-Profit</h3>
              <p className="text-sm text-black/45 max-w-md leading-relaxed">Let's discuss how we can help you leverage free Salesforce tools to maximise your impact.</p>
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

export default FreeSalesforce;
