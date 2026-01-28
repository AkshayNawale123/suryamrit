import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchComponent from "./SearchComponent";
import { CartDrawer } from "./CartDrawer";
import suryamritLogo from "@/assets/suryamrit-logo.png";
import LokarthBadge from "./LokarthBadge";

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { path: "/buy", label: "Shop" },
    { path: "/self-assessment", label: "Self Assessment" },
    { path: "/product#science", label: "Why Ghee?" },
    { path: "/endorsements", label: "Reviews" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-soft sticky top-0 z-50 border-b border-primary/10">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Lokarth Badge */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center">
              <img
                src={suryamritLogo}
                alt="Ayurbramh SuryAmrit - Natural Daily D3 with Ghee"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
            <div className="hidden md:block">
              <LokarthBadge size="sm" variant="header" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path.split("#")[0]
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="text-muted-foreground hover:text-primary"
            >
              <Search className="h-4 w-4" />
            </Button>
            <CartDrawer />
            <Button
              asChild
              className="bg-gradient-primary hover:shadow-golden transition-all duration-300 px-6 font-semibold"
            >
              <Link to="/buy">Order Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground/70 hover:text-primary h-10 w-10 p-0"
            >
              <Search className="h-5 w-5" />
            </Button>
            <CartDrawer />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 p-0 relative"
            >
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span 
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Premium Slide-Down */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-6">
            {/* Gold accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6" />
            
            <nav className="flex flex-col space-y-1">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center py-3 px-4 rounded-xl transition-all duration-300 ${
                    location.pathname === link.path.split("#")[0]
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted/50 hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Left gold accent for active */}
                  <span 
                    className={`w-1 h-6 rounded-full mr-3 transition-all duration-300 ${
                      location.pathname === link.path.split("#")[0]
                        ? 'bg-primary'
                        : 'bg-transparent group-hover:bg-primary/30'
                    }`}
                  />
                  <span className="font-medium tracking-wide text-base">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA Button with shimmer */}
            <div className="mt-6 px-4">
              <Button 
                asChild 
                className="w-full bg-gradient-primary hover:shadow-golden transition-all duration-300 py-6 text-base font-semibold tracking-wide relative overflow-hidden group"
              >
                <Link to="/buy" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="relative z-10">Order Now — ₹99</span>
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
            </div>

            {/* Lokarth Badge for mobile */}
            <div className="mt-6 flex justify-center">
              <LokarthBadge size="sm" variant="header" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Component */}
      <SearchComponent isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
