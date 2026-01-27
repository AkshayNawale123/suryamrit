import React from 'react';
import { cn } from '@/lib/utils';

interface PremiumPriceDisplayProps {
  originalPrice: string;
  subsidyAmount: string;
  finalPrice: string;
  currency?: string;
  label?: string;
  compact?: boolean;
  className?: string;
}

/**
 * Premium Price Display Component
 * Shows: MRP ₹399 → Lokarth Health Subsidy -₹300 → Citizen Contribution ₹99
 * Implements the "Transparency Pricing" model to bridge the Premium + Social narrative
 */
const PremiumPriceDisplay: React.FC<PremiumPriceDisplayProps> = ({
  originalPrice,
  subsidyAmount,
  finalPrice,
  currency = '₹',
  label = 'Lokarth Grant Allocation',
  compact = false,
  className,
}) => {
  if (compact) {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="line-through">MRP {currency}{originalPrice}</span>
        </div>
        <div className="text-2xl font-bold text-primary">
          {currency}{finalPrice}
        </div>
        <div className="text-xs text-secondary font-medium">
          {label} • {currency}{subsidyAmount} Funded by Lokarth
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 shadow-soft", className)}>
      {/* Label Badge */}
      <div className="flex justify-center mb-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/30">
          {label}
        </span>
      </div>
      
      {/* Price Breakdown */}
      <div className="space-y-2">
        {/* MRP Row */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">MRP (Market Value)</span>
          <span className="text-muted-foreground line-through">{currency}{originalPrice}</span>
        </div>
        
        {/* Subsidy Row */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-secondary font-medium">Lokarth Health Subsidy</span>
          <span className="text-secondary font-bold">-{currency}{subsidyAmount}</span>
        </div>
        
        {/* Divider */}
        <div className="border-t border-dashed border-primary/30 my-2" />
        
        {/* Citizen Contribution Row */}
        <div className="flex justify-between items-center">
          <span className="text-foreground font-semibold">Citizen Contribution</span>
          <span className="text-2xl font-bold text-primary">{currency}{finalPrice}</span>
        </div>
      </div>
      
      {/* Mission Note */}
      <p className="text-xs text-muted-foreground text-center mt-3 leading-relaxed">
        Lokarth Health Initiative • Elite nutrition, accessible pricing
      </p>
    </div>
  );
};

export default PremiumPriceDisplay;
