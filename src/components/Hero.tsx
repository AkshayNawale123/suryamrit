import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Shield, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-hero text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-white animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              ✨ Over 82% of Indians are deficient in Vitamin D
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Natural
              <span className="block text-secondary">D₃ Daily</span>
              <span className="block text-3xl md:text-4xl">with Ghee</span>
            </h1>

            <p className="text-xl mb-8 text-white/90">
              AYURBRAMH SuryAmrit™ - Soft Chewable Veg Capsules Of 
              Natural Vitamin D₃-600 IU With Ghee
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Sun className="h-5 w-5 text-secondary" />
                <span>600 IU Natural D₃</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Enhanced with Ghee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-secondary" />
                <span>100% Vegetarian</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 hover:shadow-golden transition-all duration-300">
                Order Now - PAN India Delivery
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 hover:shadow-golden transition-all duration-300">
                Learn More
              </Button>
            </div>

            <p className="text-sm mt-4 text-white/70">
              - ICMR-NIN Survey, 2020
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                  <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center shadow-golden">
                    <span className="text-4xl">💊</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft animate-float">
                <Sun className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;