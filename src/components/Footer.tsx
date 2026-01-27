import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";
import suryamritLogo from "@/assets/suryamrit-logo.png";
import lokarthLogo from "@/assets/lokarth-logo.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-secondary to-green-700 text-white py-16 overflow-hidden"
    >
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
              <li>
                <a href="/buy" className="text-white/80 hover:text-primary-glow transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="/product#science" className="text-white/80 hover:text-primary-glow transition-colors">
                  Science
                </a>
              </li>
              <li>
                <a href="/endorsements" className="text-white/80 hover:text-primary-glow transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/partners" className="text-white/80 hover:text-primary-glow transition-colors">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white/80 hover:text-primary-glow transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-primary-glow transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Product Information</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/80">
                  <span className="text-primary-glow">✓</span> 600 IU Natural Vitamin D₃
                </span>
              </li>
              <li>
                <span className="text-white/80">
                  <span className="text-primary-glow">✓</span> Enhanced with Pure Ghee
                </span>
              </li>
              <li>
                <span className="text-white/80">
                  <span className="text-primary-glow">✓</span> Lichen-sourced (100% Vegan)
                </span>
              </li>
              <li>
                <span className="text-white/80">
                  <span className="text-primary-glow">✓</span> Soft Chewable Capsules
                </span>
              </li>
              <li>
                <span className="text-white/80">
                  <span className="text-primary-glow">✓</span> FSSAI Approved
                </span>
              </li>
              <li>
                <span className="text-white/80">
                  <span className="text-primary-glow">✓</span> No Water Required
                </span>
              </li>
            </ul>
          </div>

          {/* Our Benefactor - Lokarth Foundation */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Benefactor</h4>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-sm">
              <img src={lokarthLogo} alt="Lokarth Foundation" className="h-12 w-auto object-contain mb-3" />
              <p className="text-sm text-white/80 mb-2">
                Make Vitamin D3 Sufficient India Mission, one family at a time.
              </p>
              <div className="flex items-center gap-2 text-primary-glow text-xs font-medium">
                <Heart className="h-3 w-3" />
                <span>Serve Together. Change Forever.</span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-white/80 text-sm">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-white/80 text-sm">info@suryamrit.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white/60 text-sm">
                © 2026 SuryAmrit™. All rights reserved. | FSSAI Health Supplement - Not for Medicinal Use
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-sm">
                <strong className="text-white/80">
                  Sunlight alone cannot guarantee adequate D₃ levels due to pollution, clothing, skin tone, and time of
                  day.
                </strong>
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
