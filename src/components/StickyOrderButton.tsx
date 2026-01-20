import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 600px (roughly hero section height)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 animate-fade-in">
      {/* Dismiss Button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="w-8 h-8 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 shadow-md"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Order Now Button */}
      <Button
        asChild
        size="lg"
        className="group relative px-6 py-6 text-base font-bold bg-gradient-to-r from-primary via-primary to-amber-500 text-primary-foreground rounded-2xl shadow-2xl hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.6)] transition-all duration-300 hover:scale-105 animate-bounce-attention"
        style={{ animationDuration: "3s" }}
      >
        <Link to="/product" className="flex items-center gap-3">
          <ShoppingCart className="h-5 w-5" />
          <span>Order Now</span>
          <span className="bg-primary-foreground/20 px-2 py-1 rounded-lg text-sm">₹351</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyOrderButton;
