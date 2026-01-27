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

      {/* Order Now Button - Premium Clinical Design */}
      <Button
        asChild
        size="lg"
        className="group relative px-6 py-6 text-base font-bold bg-white text-foreground rounded-2xl shadow-2xl border-2 border-primary/30 hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.5)] transition-all duration-300 hover:scale-105"
      >
        <Link to="/buy" className="flex items-center gap-3">
          <ShoppingCart className="h-5 w-5 text-primary" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-muted-foreground line-through">MRP ₹399</span>
            <span className="text-primary font-bold">₹99 Allocation</span>
          </div>
          <span className="bg-secondary/15 text-secondary px-2 py-1 rounded-lg text-xs font-semibold">₹300 Funded</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyOrderButton;
