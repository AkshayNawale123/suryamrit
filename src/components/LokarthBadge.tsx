import React from 'react';
import lokarthLogo from '@/assets/lokarth-logo.png';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LokarthBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
  className?: string;
  variant?: 'default' | 'header' | 'footer';
}

/**
 * Lokarth Foundation Badge Component
 * Displays institutional credibility branding for the health subsidy program.
 */
const LokarthBadge: React.FC<LokarthBadgeProps> = ({ 
  size = 'md',
  showTooltip = true,
  className,
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'h-4',
    md: 'h-6',
    lg: 'h-8'
  };

  const containerClasses = {
    default: 'bg-primary/5 border-primary/20',
    header: 'bg-secondary/5 border-secondary/20',
    footer: 'bg-white/10 border-white/20'
  };

  const textClasses = {
    default: 'text-primary',
    header: 'text-secondary',
    footer: 'text-white/90'
  };

  const BadgeContent = (
    <div className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105",
      containerClasses[variant],
      className
    )}>
      <img 
        src={lokarthLogo} 
        alt="Lokarth Foundation" 
        className={cn("w-auto object-contain", sizeClasses[size])}
      />
      <span className={cn(
        "text-xs font-medium whitespace-nowrap",
        textClasses[variant]
      )}>
        An Initiative by Lokarth
      </span>
    </div>
  );

  if (!showTooltip) {
    return BadgeContent;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {BadgeContent}
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4 bg-card border-primary/20">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Lokarth Foundation</p>
            <p className="text-sm text-muted-foreground">
              Lokarth's mission is to eradicate 'Silent Hunger' (Micronutrient Deficiency) from India. 
              We believe elite nutrition shouldn't be a luxury.
            </p>
            <p className="text-xs text-secondary font-medium italic">
              "Serve Together. Change Forever."
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LokarthBadge;
