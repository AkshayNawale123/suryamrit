import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Shield, Heart, Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Warm Cream/Pastel Background */}
      <div className="absolute inset-0 z-0">
        {/* Base warm cream gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F3] via-[#F9F5F0] to-[#FFF9F0]" />
        
        {/* Subtle golden radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(43_65%_52%_/_0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(45_70%_60%_/_0.06)_0%,_transparent_50%)]" />
        
        {/* Subtle texture pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 w-full">
          {/* Left Content */}
          <div className="max-w-xl">
            <Badge className="mb-6 bg-primary/15 text-primary border-primary/25 px-4 py-2 font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              India's #1 Vitamin D₃ Solution
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
              Combat India's Silent
              <span className="block text-primary">Vitamin D Crisis</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
              Over 80% of Indians are Vitamin D deficient. SuryAmrit™ provides the natural, plant-based solution your body needs to thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-golden btn-shimmer text-lg px-8 py-6 rounded-full">
                <Link to="/product">
                  Explore SuryAmrit™ →
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-lg px-8 py-6 rounded-full">
                <Play className="w-5 h-5 mr-2" />
                Where to Buy
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">80%+</div>
                <div className="text-sm text-muted-foreground">Indians Deficient</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">600 IU</div>
                <div className="text-sm text-muted-foreground">Daily Dose</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Plant-Based</div>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Price Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* CTA Button above card */}
              <Button asChild size="lg" className="w-full mb-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-golden btn-shimmer text-lg px-8 py-6 rounded-xl">
                <Link to="/buy">
                  <Sun className="w-5 h-5 mr-2" />
                  Claim Your Lokarth Allocation →
                </Link>
              </Button>

              {/* Premium Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-primary/10">
                {/* Floating sparkles */}
                <Sparkles className="absolute -top-2 right-12 w-5 h-5 text-primary/60 animate-pulse" />
                <Sparkles className="absolute top-1/3 -right-2 w-4 h-4 text-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
                <Sparkles className="absolute bottom-1/3 -left-2 w-4 h-4 text-primary/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

                {/* Price Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl scale-110" />
                    
                    {/* Main circle */}
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#FDF8F0] to-[#F5EDE0] border-4 border-primary/30 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-sm text-muted-foreground line-through">MRP ₹399</span>
                      <span className="text-5xl font-bold text-primary">₹99</span>
                      <span className="text-sm font-semibold text-foreground mt-1">Lokarth Allocation</span>
                      <span className="text-xs text-muted-foreground">₹300 Funded by Lokarth</span>
                    </div>
                  </div>
                </div>

                {/* Mission Text */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary mb-1">Funded by Lokarth Foundation:</p>
                  <p className="text-sm text-muted-foreground">Elite nutrition, accessible pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
