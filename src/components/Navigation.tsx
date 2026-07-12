import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motionTokens";
import cohbyLogo from "@/assets/cohby-logo.png";

/* ── Sliding pill that travels between active nav items ── */
const NavActivePill = () => (
  <motion.span
    layoutId="nav-active-pill"
    className="absolute inset-0 rounded-md bg-white/[0.07] border border-white/[0.08]"
    transition={{ type: "spring", stiffness: 380, damping: 32 }}
    aria-hidden="true"
  />
);

/* ── Types ── */
interface DropdownLink { title: string; href: string; sub?: string }
interface NavDropdownProps {
  label: string;
  links: DropdownLink[];
  isActive: boolean;
}

/* ── Custom Dropdown Item ── */
const NavDropdown = ({ label, links, isActive }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`relative inline-flex items-center gap-1 px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer select-none ${
          open || isActive ? "text-rose" : "text-white/70 hover:text-white"
        }`}
      >
        {isActive && <NavActivePill />}
        <span className="relative z-10 inline-flex items-center gap-1">
          {label}
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
      {open && (
        <motion.div
          className="absolute left-0 top-full pt-2 z-50 min-w-[280px] origin-top-left"
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.15, ease: "easeOut" } }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        >
          <ul className="grid gap-1 p-4 bg-[rgba(14,16,38,0.96)] backdrop-blur-[48px] border border-white/10 shadow-2xl rounded-2xl">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block select-none rounded-xl px-3 py-2.5 leading-none no-underline outline-none transition-colors hover:bg-white/[0.05] group"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/85 group-hover:text-rose transition-colors">
                    {link.title}
                  </div>
                  {link.sub && (
                    <p className="text-[10px] text-white/40 mt-0.5 font-mono">{link.sub}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

/* ── Navigation ── */
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setOverLight(y > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOverLight(false);
    setScrolled(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isActivePrefix = (prefix: string) => location.pathname.startsWith(prefix);

  const solutionsLinks: DropdownLink[] = [
    { title: "Salesforce Consulting", href: "/solutions" },
    { title: "Cloud Solutions",       href: "/cloud-solutions" },
    { title: "Data Analysis",         href: "/data-analysis" },
  ];

  const productsLinks: DropdownLink[] = [
    { title: "Cohby LMS",  href: "/products/cohbylearn" },
    { title: "ATS Resume", href: "/products/ats-resume" },
  ];

  const aiLinks: DropdownLink[] = [
    { title: "Overview",                  href: "/ai-automation",             sub: "Intelligent systems for scale." },
    { title: "AI Engineering",            href: "/ai-automation#engineering" },
    { title: "AI & General Automations",  href: "/ai-automation#automations" },
    { title: "AI-Powered Websites",       href: "/ai-automation#websites" },
    { title: "AI Chatbots",               href: "/ai-automation#chatbots" },
    { title: "Social Media Automations",  href: "/ai-automation#social" },
  ];

  const nonprofitLinks: DropdownLink[] = [
    { title: "Overview",                         href: "/non-profits",                      sub: "Salesforce for non-profits." },
    { title: "Free Salesforce for Non-Profits",  href: "/non-profits/free-salesforce" },
    { title: "Nonprofit Success Pack Basics",    href: "/non-profits/npsp-basics" },
    { title: "Top 3 Challenges Non-Profits Face",href: "/non-profits/challenges" },
  ];

  const navBg = overLight
    ? "bg-[#0e0e12] border border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.35)]"
    : scrolled
    ? "liquid-glass-nav"
    : "";

  const linkClass = (active: boolean) =>
    `relative px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer ${
      active ? "text-rose" : "text-white/70 hover:text-white"
    }`;

  const NavLinkItem = ({ to, label }: { to: string; label: string }) => (
    <Link to={to} className={linkClass(isActive(to))}>
      {isActive(to) && <NavActivePill />}
      <span className="relative z-10">{label}</span>
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 pt-4">
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${navBg}`}>
          <div className="px-4 md:px-6 flex h-16 items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80 flex-shrink-0">
              <img src={cohbyLogo} alt="Cohby Consulting Services" className="h-9 w-9 object-contain" />
              <span className="text-sm font-mono tracking-[0.2em] uppercase hidden sm:inline text-white">
                Cohby Consulting
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavLinkItem to="/" label="Home" />
              <NavLinkItem to="/about" label="About" />

              <NavDropdown label="Solutions"     links={solutionsLinks}  isActive={isActivePrefix("/solutions") || isActive("/cloud-solutions") || isActive("/data-analysis")} />
              <NavDropdown label="Products"      links={productsLinks}   isActive={isActivePrefix("/products")} />
              <NavDropdown label="AI & Automation" links={aiLinks}       isActive={isActivePrefix("/ai-automation")} />
              <NavDropdown label="Non-Profits"   links={nonprofitLinks}  isActive={isActivePrefix("/non-profits")} />

              <NavLinkItem to="/contact" label="Contact" />

              <Link to="/book-consultation">
                <Button className="ml-4 glow-button bg-rose text-black hover:bg-white font-mono text-[10px] uppercase tracking-[0.15em] px-6 py-5 rounded-full shadow-lg transition-all duration-300 cursor-pointer">
                  Book Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 transition-colors cursor-pointer text-white/80 hover:text-rose"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/[0.08] py-4 px-4 pb-6 font-mono animate-fade-in max-h-[72vh] overflow-y-auto space-y-1">
              {[
                { label: "Home",    href: "/" },
                { label: "About",   href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider cursor-pointer ${
                    isActive(href) ? "bg-rose/10 text-rose" : "hover:bg-white/5 text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}

              {[
                { section: "Solutions",       links: solutionsLinks },
                { section: "Products",        links: productsLinks },
                { section: "AI & Automation", links: aiLinks },
                { section: "Non-Profits",     links: nonprofitLinks },
              ].map(({ section, links }) => (
                <div key={section} className="px-4 pt-4 pb-2 border-t border-white/5 mt-2">
                  <div className="text-[10px] tracking-widest text-rose uppercase mb-3">{section}</div>
                  <div className="ml-2 space-y-1">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4 pb-2 px-2 border-t border-white/5">
                <Link to="/book-consultation" className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider py-6 rounded-full shadow-lg cursor-pointer">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
