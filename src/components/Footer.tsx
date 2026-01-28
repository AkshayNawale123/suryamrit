import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Building2, Store, Globe } from "lucide-react";
import suryamritLogo from "@/assets/suryamrit-logo.png";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-6">
              <img
                src={suryamritLogo}
                alt="Ayurbramh SuryAmrit - Natural Daily D3 with Ghee"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-4 text-sm">
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

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/buy" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/product#science" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/endorsements" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Endorsements
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/self-assessment" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Self Assessment
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Become a Partner
                </Link>
              </li>
              <li>
                <a href="tel:9373228844" className="text-white/80 hover:text-primary-glow transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Manufactured By */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary-glow" />
              Manufactured By
            </h4>
            <div className="text-sm text-white/70 space-y-1">
              <p className="font-semibold text-white/90">GELNOVA LABORATORIES (INDIA) PVT. LTD.</p>
              <p>C-125, TTC Industrial Area,</p>
              <p>Mahape, Navi Mumbai,</p>
              <p>Maharashtra, 400 703 INDIA</p>
              <p className="text-xs mt-3 text-primary-glow font-medium">FSSAI Lic. No. 10013022002314</p>
            </div>
          </div>

          {/* Column 5: Marketed By */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Store className="h-4 w-4 text-primary-glow" />
              Marketed By
            </h4>
            <div className="text-sm text-white/70 space-y-1">
              <p className="font-semibold text-white/90">
                LOKPEETH FOUNDATION <br>LOKARTH</br>
              </p>
              <p>1774, Block B1, Vasant Kunj,</p>
              <p>New Delhi - 110070 INDIA</p>
              <div className="mt-3 space-y-2">
                <a href="tel:9373228844" className="flex items-center gap-2 hover:text-primary-glow transition-colors">
                  <Phone className="h-3 w-3" /> 9373228844
                </a>
                <a
                  href="mailto:info@suryamrit.org"
                  className="flex items-center gap-2 hover:text-primary-glow transition-colors"
                >
                  <Mail className="h-3 w-3" /> lokarthinnovations@gmail.com
                </a>
                <a
                  href="https://www.suryamrit.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-glow transition-colors"
                >
                  <Globe className="h-3 w-3" /> https://www.lokarth.in/
                </a>
              </div>
              <p className="text-xs mt-3 text-primary-glow font-medium">FSSAI Lic. No. 21525083005916</p>
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
            <div className="text-left md:text-right">
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
