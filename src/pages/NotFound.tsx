import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30 flex flex-col">

      {/* Dark full-screen center */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="max-w-md w-full text-center space-y-8 animate-fade-in p-10 md:p-14 bg-white/[0.03] border border-white/[0.08] shadow-2xl rounded-3xl backdrop-blur-md">
          <div className="mx-auto w-16 h-16 bg-rose/[0.08] border border-rose/[0.15] rounded-full flex items-center justify-center">
            <span className="text-rose font-mono text-base font-bold">404</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white uppercase font-mono">Page Not Found</h1>

          <p className="text-white/45 text-sm leading-relaxed">
            The page you are looking for does not exist or has been relocated to another route.
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

export default NotFound;
