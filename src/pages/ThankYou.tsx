import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30 flex flex-col">

      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="max-w-md w-full text-center space-y-8 animate-fade-in p-10 md:p-14 bg-white/[0.03] border border-white/[0.08] shadow-2xl rounded-3xl backdrop-blur-md">
          <div className="mx-auto w-16 h-16 bg-rose/[0.08] border border-rose/[0.15] rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-rose w-7 h-7" />
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white uppercase font-mono">Thank You</h1>

          <p className="text-white/45 text-sm leading-relaxed">
            Your message has been successfully received. A member of our team will review your enquiry and get back to you shortly.
          </p>

          <div className="pt-4 border-t border-white/[0.06]">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-full shadow-lg transition-colors duration-300"
            >
              Return to Homepage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
