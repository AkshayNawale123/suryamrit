import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchComponent from "./SearchComponent";
import { CartDrawer } from "./CartDrawer";
import suryamritLogo from "@/assets/suryamrit-logo.png";

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/about', label: 'About' },
    { path: '/where-to-buy', label: 'Where to Buy' },
    { path: '/endorsements', label: 'Endorsements' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];
  return (
    <header className="glass sticky top-0 z-50 border-b border-white/10">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-2 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>1800-XXX-XXXX</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ayurbramh.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Available PAN India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={suryamritLogo} 
              alt="Ayurbramh SuryAmrit - Natural Daily D3 with Ghee" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-primary'
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
              <span className="ml-2">Search</span>
            </Button>
            <CartDrawer />
            <Button asChild className="bg-gradient-primary hover:shadow-golden transition-all duration-300">
              <Link to="/where-to-buy">Order Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
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
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors ${
                    location.pathname === link.path 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-gradient-primary hover:shadow-golden transition-all duration-300 mt-4">
                <Link to="/where-to-buy" onClick={() => setIsMobileMenuOpen(false)}>
                  Order Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Search Component */}
      <SearchComponent 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
};

export default Header;