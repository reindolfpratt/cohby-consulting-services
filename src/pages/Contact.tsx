import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const Contact = () => {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero — Dark ── */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[45%] h-[55%] rounded-t-[12rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Get in<br />
              <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">touch</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-white/45 mt-6 max-w-md leading-relaxed">
              Let's discuss how we can help your business thrive.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* ── Body — Light Clay ── */}
      <div className="h-24 w-full pointer-events-none" style={{background:"linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Section Header */}
          <Reveal y={16} className="pb-12 border-b studio-rule flex items-baseline justify-between">
            <h2 className="studio-heading text-3xl md:text-4xl">Contact Us</h2>
            <span className="studio-label">We respond within 24h</span>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-16">

            {/* Left — Contact Details */}
            <RevealItem className="lg:col-span-4 space-y-10">

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:border-black/30 group-hover:bg-[#121214] group-hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="studio-label mb-2">Phone</p>
                  <p className="text-sm font-mono text-[#121214] font-semibold">UK: +44 7424 742415</p>
                  <p className="text-sm font-mono text-[#121214] font-semibold">Canada: +1 343 883 2087</p>
                  <p className="text-xs text-black/35 font-mono mt-1">WhatsApp available</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:border-black/30 group-hover:bg-[#121214] group-hover:text-white transition-all duration-300">
                  <Mail className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="studio-label mb-2">Email</p>
                  <a
                    href="mailto:info@cohbyconsultingservices.com"
                    className="text-sm font-mono text-[#121214] font-semibold hover:text-rose transition-colors break-all"
                  >
                    info@cohbyconsultingservices.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:border-black/30 group-hover:bg-[#121214] group-hover:text-white transition-all duration-300">
                  <Clock className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="studio-label mb-2">Business Hours</p>
                  <p className="text-sm text-[#121214] font-semibold">Monday – Thursday</p>
                  <p className="text-sm text-[#121214] font-semibold">10:00 AM – 3:00 PM</p>
                  <p className="text-xs text-black/35 font-mono mt-1">UK & Canada Time</p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 rounded-full border border-black/[0.12] flex items-center justify-center flex-shrink-0 group-hover:border-black/30 group-hover:bg-[#121214] group-hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4 text-[#121214] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="studio-label mb-2">Location</p>
                  <p className="text-sm text-[#121214] font-semibold">Serving Clients in UK & Canada</p>
                </div>
              </div>

              {/* Philosophy pull quote */}
              <div className="pt-8 border-t studio-rule">
                <p className="text-sm text-black/45 leading-relaxed italic">
                  "We believe in building long-term partnerships, not making quick sales. If we are not the right fit, we will tell you."
                </p>
              </div>
            </RevealItem>

            {/* Right — Form */}
            <RevealItem className="lg:col-span-8">
              <div className="bg-white border border-black/[0.08] rounded-2xl p-8 md:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-black text-[#121214] mb-10 uppercase tracking-tight">Send a Message</h3>

                <form
                  action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000GzkH"
                  method="POST"
                  className="space-y-8"
                >
                  <input type="hidden" name="oid" value="00DgD000000GzkH" />
                  <input type="hidden" name="retURL" value="https://cohbyconsultingservices.com/thank-you" />

                  {/* Name row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="first_name" className="studio-label">First Name</label>
                      <input
                        id="first_name" maxLength={40} name="first_name" type="text" required
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="last_name" className="studio-label">Last Name</label>
                      <input
                        id="last_name" maxLength={80} name="last_name" type="text" required
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="studio-label">Email Address</label>
                      <input
                        id="email" maxLength={80} name="email" type="email" required
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="mobile" className="studio-label">Mobile Phone</label>
                      <input
                        id="mobile" maxLength={40} name="mobile" type="tel"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="studio-label">Company / Organisation</label>
                      <input
                        id="company" maxLength={40} name="company" type="text" required
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="city" className="studio-label">City</label>
                      <input
                        id="city" maxLength={40} name="city" type="text"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="00NSj000002VLgX" className="studio-label">Country of Operation</label>
                    <select
                      id="00NSj000002VLgX" name="00NSj000002VLgX" title="Country of Operation"
                      className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent transition-colors"
                    >
                      <option value="">— Select —</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Project scope divider */}
                  <div className="border-t studio-rule pt-8 space-y-6">
                    <p className="studio-label">Project Scope</p>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NgD000000x7rt" className="text-xs text-black/50">What service are you interested in? <span className="opacity-60">(hold Cmd/Ctrl for multiple)</span></label>
                      <select
                        id="00NgD000000x7rt" multiple name="00NgD000000x7rt" title="What service are you interested in?"
                        className="border border-black/[0.1] rounded-xl p-3 text-sm text-[#121214] bg-white min-h-[130px] focus:border-[#121214] focus:outline-none"
                      >
                        <option value="Salesforce Implementation &amp; Customization">Salesforce Implementation &amp; Customization</option>
                        <option value="Data Migration &amp; Integration">Data Migration &amp; Integration</option>
                        <option value="Analytics &amp; Reporting">Analytics &amp; Reporting</option>
                        <option value="Ongoing Support &amp; Training">Ongoing Support &amp; Training</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NgD000000x7tV" className="studio-label">Current Salesforce Usage</label>
                      <select
                        id="00NgD000000x7tV" name="00NgD000000x7tV" title="Current Salesforce Usage"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent transition-colors"
                      >
                        <option value="">— Select —</option>
                        <option value="Not using Salesforce yet">Not using Salesforce yet</option>
                        <option value="Using Salesforce but need improvements">Using Salesforce but need improvements</option>
                        <option value="Other CRM system">Other CRM system</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NgD000000x7qH" className="studio-label">Estimated Project Timeline</label>
                      <select
                        id="00NgD000000x7qH" name="00NgD000000x7qH" title="Estimated Project Timeline"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent transition-colors"
                      >
                        <option value="">— Select —</option>
                        <option value="immediate (within 1 month">Immediate (within 1 month)</option>
                        <option value="1-3 months">1–3 months</option>
                        <option value="3+ months">3+ months</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000002VM4j" className="studio-label">Project Description</label>
                      <textarea
                        id="00NSj000002VM4j" name="00NSj000002VM4j" rows={4}
                        placeholder="Tell us about your challenges or goals…"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000002VLjl" className="studio-label">How did you hear about us?</label>
                      <select
                        id="00NSj000002VLjl" name="00NSj000002VLjl" title="How Did You Hear About Us"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent transition-colors"
                      >
                        <option value="">— Select —</option>
                        <option value="Referral">Referral</option>
                        <option value="Google_Search">Google Search</option>
                        <option value="Social_Media">Social Media</option>
                        <option value="Flyer">Flyer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      name="submit"
                      className="w-full h-14 bg-[#121214] text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-rose hover:text-black transition-colors duration-300 font-semibold"
                    >
                      Send Message →
                    </button>
                  </div>
                </form>
              </div>
            </RevealItem>

          </RevealGroup>
        </div>
      </section>
    </div>
  );
};

export default Contact;
