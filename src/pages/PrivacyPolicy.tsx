
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-16 pt-36 max-w-7xl">
          <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// Legal</span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
            Privacy<br />Policy
          </h1>
        </div>
      </section>

      {/* Gradient */}
      <div className="h-16 w-full pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)" }} />

      {/* Content */}
      <section className="bg-studio-light pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10 py-16">
          <div className="prose prose-sm max-w-none space-y-10 text-black/70 leading-relaxed">

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">1. Who We Are</h2>
              <p>
                Cohby Consulting Services ("we", "us", or "our") is a digital consultancy providing Salesforce, Cloud,
                AI Automation, and Data Analysis services. We operate from the United Kingdom and Canada and serve
                clients globally. Our registered contact email is{" "}
                <a href="mailto:info@cohbyconsultingservices.com" className="text-rose underline underline-offset-2 hover:text-rose/70 transition-colors">
                  info@cohbyconsultingservices.com
                </a>.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">2. Information We Collect</h2>
              <p>We may collect the following categories of personal information:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Contact details (name, email address, phone number) when you submit an enquiry or book a consultation.",
                  "Business information (company name, industry, project requirements) provided voluntarily.",
                  "Usage data (pages visited, time on site, browser type) collected automatically via analytics tools.",
                  "Communication records (emails and messages) when you contact us.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Respond to enquiries and deliver the services you have requested.",
                  "Schedule and manage consultation appointments.",
                  "Send relevant service updates or industry insights (you may opt out at any time).",
                  "Improve our website and service offerings through anonymous analytics.",
                  "Comply with legal and regulatory obligations.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">4. Legal Basis for Processing (UK/EU)</h2>
              <p>
                Where applicable under UK GDPR and GDPR, we process your personal data on the following legal bases:
                (a) Contractual necessity — to perform services you have requested; (b) Legitimate interests — to
                improve our services and communicate with prospective clients; (c) Consent — for marketing
                communications. You may withdraw consent at any time.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">5. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party service providers
                (such as email platforms, CRM tools, and scheduling software) solely to operate our business. All
                third parties are required to handle your data securely and only for the stated purpose.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">6. Data Retention</h2>
              <p>
                We retain personal data for as long as necessary to fulfil the purposes for which it was collected,
                or as required by law. Enquiry data is typically retained for up to 24 months. You may request
                deletion at any time by contacting us.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  "Access the personal data we hold about you.",
                  "Request correction of inaccurate data.",
                  "Request erasure of your data ('right to be forgotten').",
                  "Object to or restrict processing.",
                  "Data portability.",
                  "Lodge a complaint with a supervisory authority (e.g., the ICO in the UK).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@cohbyconsultingservices.com" className="text-rose underline underline-offset-2 hover:text-rose/70 transition-colors">
                  info@cohbyconsultingservices.com
                </a>.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">8. Cookies</h2>
              <p>
                Our website may use essential cookies to ensure basic functionality. We may also use analytics
                cookies to understand how visitors interact with the site. By continuing to use our site, you consent
                to our use of cookies. You can control cookies through your browser settings.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">9. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against
                unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is
                entirely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:info@cohbyconsultingservices.com" className="text-rose underline underline-offset-2 hover:text-rose/70 transition-colors">
                  info@cohbyconsultingservices.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
