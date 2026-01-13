import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import suryamritLogo from "@/assets/suryamrit-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background border-t border-white/10 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] radial-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={suryamritLogo} 
                alt="Ayurbramh SuryAmrit - Natural Daily D3 with Ghee" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Natural Daily D₃ with Ghee - The Grace of Ghee with the Power of Sun, in One Honest Chew.
            </p>
            <div className="flex space-x-4">
              <div className="glass-card p-2 rounded-lg hover:neon-border transition-all duration-300 cursor-pointer">
                <Facebook className="h-5 w-5 text-primary hover:text-primary-glow transition-colors" />
              </div>
              <div className="glass-card p-2 rounded-lg hover:neon-border transition-all duration-300 cursor-pointer">
                <Twitter className="h-5 w-5 text-primary hover:text-primary-glow transition-colors" />
              </div>
              <div className="glass-card p-2 rounded-lg hover:neon-border transition-all duration-300 cursor-pointer">
                <Instagram className="h-5 w-5 text-primary hover:text-primary-glow transition-colors" />
              </div>
              <div className="glass-card p-2 rounded-lg hover:neon-border transition-all duration-300 cursor-pointer">
                <Youtube className="h-5 w-5 text-primary hover:text-primary-glow transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#science" className="text-muted-foreground hover:text-primary transition-colors">Science</a></li>
              <li><a href="#dosage" className="text-muted-foreground hover:text-primary transition-colors">Dosage</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Clinical Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Product Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground">Product Information</h4>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground"><span className="text-primary">✓</span> 600 IU Natural Vitamin D₃</span></li>
              <li><span className="text-muted-foreground"><span className="text-primary">✓</span> Enhanced with Pure Ghee</span></li>
              <li><span className="text-muted-foreground"><span className="text-primary">✓</span> Lichen-sourced (100% Vegan)</span></li>
              <li><span className="text-muted-foreground"><span className="text-primary">✓</span> Soft Chewable Capsules</span></li>
              <li><span className="text-muted-foreground"><span className="text-primary">✓</span> FSSAI Approved</span></li>
              <li><span className="text-muted-foreground"><span className="text-primary">✓</span> No Water Required</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@ayurbramh.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Available across India<br />PAN India Distribution</span>
              </div>
            </div>

            <Button className="mt-6 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-neon transition-all duration-300 rounded-xl">
              Order Now - Free Delivery
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground/60 text-sm">
                © 2024 Ayurbramh SuryAmrit™. All rights reserved. | FSSAI Health Supplement - Not for Medicinal Use
              </p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground/60 text-sm">
                <strong className="text-muted-foreground">Sunlight alone cannot guarantee adequate D₃ levels due to pollution, clothing, skin tone, and time of day.</strong>
              </p>
              <p className="text-muted-foreground/40 text-xs mt-1">- Endocrine Reviews, 2010</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;