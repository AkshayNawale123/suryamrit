import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Shield, Heart, Play } from "lucide-react";
import heroVideo from "@/assets/suryamrit-hero-video.mp4";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Light cream overlay for readability - fully covers dark video */}
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="max-w-2xl py-20">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-4 py-2">
            <Sun className="w-4 h-4 mr-2 inline" />
            Over 82% of Indians are deficient in Vitamin D
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Natural
            <span className="block text-primary drop-shadow-lg">D₃ Daily</span>
            <span className="block text-3xl md:text-4xl text-muted-foreground font-normal mt-2">with Pure Ghee</span>
          </h1>

          <p className="text-xl mb-8 text-foreground/80 leading-relaxed">
            AYURBRAMH SuryAmrit™ - Soft Chewable Veg Capsules of 
            Natural Vitamin D₃-600 IU with Ghee from sacred Indian cows
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Sun className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">600 IU Natural D₃</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <div className="w-10 h-10 bg-mission rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-mission-foreground" />
              </div>
              <span className="text-foreground font-medium">Enhanced with Ghee</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">100% Vegetarian</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-golden btn-shimmer text-lg px-8 py-6">
              <Link to="/buy">Order Now - PAN India Delivery</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 backdrop-blur-sm text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Watch Story
            </Button>
          </div>

          <p className="text-sm mt-6 text-muted-foreground">
            - ICMR-NIN Survey, 2020
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
