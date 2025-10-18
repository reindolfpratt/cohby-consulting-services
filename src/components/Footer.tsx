import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import cohbyLogo from "@/assets/cohby-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={cohbyLogo} alt="Cohby Consulting Services" className="h-12 w-12 object-contain" />
              <span className="text-lg font-bold">Cohby Consulting</span>
            </div>
            <p className="text-sm text-white/80">
              Your trusted partner for Salesforce and data consulting.
            </p>
            <p className="text-sm text-white/80">
              Proudly serving clients in the UK and Canada
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-white/80 hover:text-white transition-colors">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link to="/non-profits" className="text-sm text-white/80 hover:text-white transition-colors">
                  Non-Profits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Non-Profit Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Non-Profit Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/non-profits/free-salesforce"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Free Salesforce
                </Link>
              </li>
              <li>
                <Link
                  to="/non-profits/npsp-basics"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  NPSP Basics
                </Link>
              </li>
              <li>
                <Link
                  to="/non-profits/challenges"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Common Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div>UK: +44 7424 742415</div>
                  <div>Canada: +1 343 297 1992</div>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@cohbyconsult.com" className="hover:text-white transition-colors">
                  info@cohbyconsult.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  Monday to Saturday<br />
                  10 a.m. – 6 p.m.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Cohby Consulting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
