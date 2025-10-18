import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const nonprofitLinks = [
    { title: "Free Salesforce for Non-Profits", href: "/non-profits/free-salesforce" },
    { title: "Nonprofit Success Pack Basics", href: "/non-profits/npsp-basics" },
    { title: "Top 3 Challenges Non-Profits Face", href: "/non-profits/challenges" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <span className="text-xl font-bold">Cohby Consulting</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${
                        isActive("/") ? "text-primary" : ""
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${
                        isActive("/about") ? "text-primary" : ""
                      }`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/solutions">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${
                        isActive("/solutions") ? "text-primary" : ""
                      }`}
                    >
                      Our Solutions
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Non-Profits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link to="/non-profits">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent">
                            <div className="text-sm font-medium leading-none">Non-Profits Overview</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Salesforce solutions for non-profit organizations
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      {nonprofitLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent">
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${
                        isActive("/contact") ? "text-primary" : ""
                      }`}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/book-consultation">
              <Button className="ml-4 bg-primary hover:bg-primary/90 text-white">
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-accent/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 rounded-md hover:bg-accent/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/solutions"
              className="block px-4 py-2 rounded-md hover:bg-accent/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Solutions
            </Link>
            <div className="px-4 py-2">
              <div className="font-medium mb-2">Non-Profits</div>
              <div className="ml-4 space-y-2">
                <Link
                  to="/non-profits"
                  className="block py-1 text-sm hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </Link>
                {nonprofitLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-1 text-sm hover:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-md hover:bg-accent/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/book-consultation"
              className="block px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
