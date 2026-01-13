import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import suryamritLogo from "@/assets/suryamrit-logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={suryamritLogo} 
                alt="Ayurbramh SuryAmrit - Natural Daily D3 with Ghee" 
                className="h-14 w-auto object-contain bg-white/90 rounded-lg p-2"
              />
            </div>
            <p className="text-white/80 mb-4">
              Natural Daily D₃ with Ghee - The Grace of Ghee with the Power of Sun, in One Honest Chew.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#benefits" className="text-white/80 hover:text-secondary transition-colors">Benefits</a></li>
              <li><a href="#science" className="text-white/80 hover:text-secondary transition-colors">Science</a></li>
              <li><a href="#dosage" className="text-white/80 hover:text-secondary transition-colors">Dosage</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Clinical Studies</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Product Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Product Information</h4>
            <ul className="space-y-3">
              <li><span className="text-white/80">✓ 600 IU Natural Vitamin D₃</span></li>
              <li><span className="text-white/80">✓ Enhanced with Pure Ghee</span></li>
              <li><span className="text-white/80">✓ Lichen-sourced (100% Vegan)</span></li>
              <li><span className="text-white/80">✓ Soft Chewable Capsules</span></li>
              <li><span className="text-white/80">✓ FSSAI Approved</span></li>
              <li><span className="text-white/80">✓ No Water Required</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-white/80">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-white/80">info@ayurbramh.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <span className="text-white/80">Available across India<br />PAN India Distribution</span>
              </div>
            </div>

            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground border-none">
              Order Now - Free Delivery
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white/60 text-sm">
                © 2024 Ayurbramh SuryAmrit™. All rights reserved. | FSSAI Health Supplement - Not for Medicinal Use
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-sm">
                <strong>Sunlight alone cannot guarantee adequate D₃ levels due to pollution, clothing, skin tone, and time of day.</strong>
              </p>
              <p className="text-white/60 text-xs mt-1">- Endocrine Reviews, 2010</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;