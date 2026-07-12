import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const BookConsultation = () => {
  const benefits = [
    "No-obligation conversation about your business needs",
    "Expert advice from certified Salesforce consultants",
    "Tailored recommendations for your specific challenges",
    "Clear next steps and transparent pricing",
    "Discover how Salesforce can transform your operations",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark ── */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Book Your<br />
              <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">consultation</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-white/45 mt-6 max-w-md leading-relaxed">
              30 minutes that could transform your business technology architecture.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* ── Gradient Transition ── */}
      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      {/* ── Body — Light Clay ── */}
      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Header */}
          <Reveal y={16} className="pb-12 border-b studio-rule flex items-baseline justify-between">
            <h2 className="studio-heading text-3xl md:text-4xl">Free Consultation</h2>
            <span className="studio-label">30 min · No obligation</span>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-16">

            {/* Left — What to expect */}
            <RevealItem className="lg:col-span-6 space-y-12">

              <div>
                <h3 className="text-xl font-black text-[#121214] uppercase tracking-tight mb-4">What to Expect</h3>
                <p className="text-sm text-black/50 leading-relaxed max-w-prose">
                  During your free 30-minute consultation, we'll take the time to understand your business challenges and explore how custom Salesforce, Cloud, or AI solutions can optimise your operational efficiency.
                </p>
              </div>

              <div className="border-t studio-rule pt-10 space-y-5">
                <p className="studio-label">You'll Get</p>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-xs font-mono text-black/30 mt-0.5 flex-shrink-0 w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-[#121214] leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Philosophy */}
              <div className="border-t studio-rule pt-8">
                <p className="text-sm text-black/40 leading-relaxed italic">
                  "We believe in building long-term partnerships, not making quick sales. If we are not the right fit, we will tell you. If we can help, we will show you exactly how."
                </p>
              </div>
            </RevealItem>

            {/* Right — Schedule Card */}
            <RevealItem className="lg:col-span-6">
              <div className="bg-white border border-black/[0.08] rounded-2xl p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-black text-[#121214] mb-2 uppercase tracking-tight">Schedule Your Call</h3>
                <p className="text-sm text-black/45 mb-10 leading-relaxed">
                  Contact us directly using any of the options below to arrange your free consultation.
                </p>

                <div className="space-y-8">

                  <a
                    href="tel:+447424742415"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-[#121214] group-hover:border-[#121214] transition-all duration-300">
                      <Phone className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="studio-label mb-0.5">United Kingdom</p>
                      <p className="text-base font-bold text-[#121214] font-mono group-hover:text-rose transition-colors">+44 7424 742415</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/20 group-hover:text-[#121214] transition-colors" />
                  </a>

                  <a
                    href="tel:+13438832087"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-[#121214] group-hover:border-[#121214] transition-all duration-300">
                      <Phone className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="studio-label mb-0.5">Canada</p>
                      <p className="text-base font-bold text-[#121214] font-mono group-hover:text-rose transition-colors">+1 343 883 2087</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/20 group-hover:text-[#121214] transition-colors" />
                  </a>

                  <a
                    href="mailto:info@cohbyconsultingservices.com"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:bg-[#121214] group-hover:border-[#121214] transition-all duration-300">
                      <Mail className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="studio-label mb-0.5">Email Inquiry</p>
                      <p className="text-sm font-bold text-[#121214] font-mono group-hover:text-rose transition-colors break-all">info@cohbyconsultingservices.com</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-black/20 group-hover:text-[#121214] transition-colors" />
                  </a>

                </div>

                <div className="mt-10 pt-8 border-t studio-rule">
                  <p className="text-xs text-black/35 font-mono uppercase tracking-wider text-center">
                    Available Mon–Sat · 10 AM – 6 PM
                  </p>
                </div>

                {/* Or use contact form CTA */}
                <div className="mt-6 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black/40 hover:text-[#121214] transition-colors"
                  >
                    Or fill in our contact form <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </RevealItem>

          </RevealGroup>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
