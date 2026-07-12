
const TermsOfService = () => {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-16 pt-36 max-w-7xl">
          <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// Legal</span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-[0.9]">
            Terms of<br />Service
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
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website operated by Cohby Consulting Services ("we," "us," or "our"), 
                you agree to be bound by these Terms of Service. If you disagree with any part of these terms, 
                you may not access the service.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">2. Description of Service</h2>
              <p>
                Cohby Consulting Services provides digital consulting services, including but not limited to 
                Salesforce consulting, cloud infrastructure setup, AI engineering & automation pipelines, and 
                data analysis.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">3. User Obligations</h2>
              <p>
                You agree to provide accurate, current, and complete information during any registration or 
                enquiry process. You are responsible for maintaining the confidentiality of any communication or 
                account information and for all activities under your credentials.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">4. Intellectual Property</h2>
              <p>
                The website, including its original content, design features, visuals, custom animations, and 
                functionality, remains the exclusive property of Cohby Consulting Services and its licensors. 
                Our brand assets, logos, and materials are protected by copyright, trademark, and other laws of 
                both the United Kingdom, Canada, and foreign countries.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">5. Links To Other Web Sites</h2>
              <p>
                Our services may contain links to third-party websites or services that are not owned or 
                controlled by Cohby Consulting Services. We have no control over, and assume no responsibility 
                for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">6. Limitation of Liability</h2>
              <p>
                In no event shall Cohby Consulting Services, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or 
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your access to or use of, or inability to access or use, the 
                service.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if you breach the 
                Terms.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">8. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By 
                continuing to access or use our website after those revisions become effective, you agree to be 
                bound by the revised terms.
              </p>
            </div>

            <div className="h-px bg-black/[0.08]" />

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#121214] uppercase tracking-tight">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:{" "}
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

export default TermsOfService;
