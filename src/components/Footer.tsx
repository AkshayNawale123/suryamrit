import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import suryamritLogo from "@/assets/suryamrit-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-secondary to-green-700 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
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
            <p className="text-white/80 mb-4">
              Natural Daily D₃ with Ghee - The Grace of Ghee with the Power of Sun, in One Honest Chew.
            </p>
            <div className="flex space-x-3">
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Facebook className="h-5 w-5 text-primary-glow hover:text-white transition-colors" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Twitter className="h-5 w-5 text-primary-glow hover:text-white transition-colors" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Instagram className="h-5 w-5 text-primary-glow hover:text-white transition-colors" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Youtube className="h-5 w-5 text-primary-glow hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/where-to-buy" className="text-white/80 hover:text-primary-glow transition-colors">Shop</a></li>
              <li><a href="/product#science" className="text-white/80 hover:text-primary-glow transition-colors">Science</a></li>
              <li><a href="/endorsements" className="text-white/80 hover:text-primary-glow transition-colors">Reviews</a></li>
              <li><a href="/product#faq" className="text-white/80 hover:text-primary-glow transition-colors">FAQ</a></li>
              <li><a href="/about" className="text-white/80 hover:text-primary-glow transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-white/80 hover:text-primary-glow transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Product Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Product Information</h4>
            <ul className="space-y-3">
              <li><span className="text-white/80"><span className="text-primary-glow">✓</span> 600 IU Natural Vitamin D₃</span></li>
              <li><span className="text-white/80"><span className="text-primary-glow">✓</span> Enhanced with Pure Ghee</span></li>
              <li><span className="text-white/80"><span className="text-primary-glow">✓</span> Lichen-sourced (100% Vegan)</span></li>
              <li><span className="text-white/80"><span className="text-primary-glow">✓</span> Soft Chewable Capsules</span></li>
              <li><span className="text-white/80"><span className="text-primary-glow">✓</span> FSSAI Approved</span></li>
              <li><span className="text-white/80"><span className="text-primary-glow">✓</span> No Water Required</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-white/80">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-white/80">info@ayurbramh.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow mt-1" />
                <span className="text-white/80">Available across India<br />PAN India Distribution</span>
              </div>
            </div>

            <Button className="mt-6 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-golden transition-all duration-300 rounded-xl">
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
                <strong className="text-white/80">Sunlight alone cannot guarantee adequate D₃ levels due to pollution, clothing, skin tone, and time of day.</strong>
              </p>
              <p className="text-white/40 text-xs mt-1">- Endocrine Reviews, 2010</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;