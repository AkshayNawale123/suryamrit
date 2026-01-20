import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
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
    { path: '/where-to-buy', label: 'Shop' },
    { path: '/product#science', label: 'Science' },
    { path: '/endorsements', label: 'Reviews' },
    { path: '/product#faq', label: 'FAQ' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-soft sticky top-0 z-50 border-b border-primary/10">
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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path.split('#')[0]
                    ? 'text-primary' 
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
            </Button>
            <CartDrawer />
            <Button asChild className="bg-gradient-primary hover:shadow-golden transition-all duration-300 px-6 font-semibold">
              <Link to="/product">Order Now</Link>
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
                  className={`font-medium transition-colors ${
                    location.pathname === link.path.split('#')[0]
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-gradient-primary hover:shadow-golden transition-all duration-300 mt-4">
                <Link to="/product" onClick={() => setIsMobileMenuOpen(false)}>
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