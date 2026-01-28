import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import LokarthBadge from "@/components/LokarthBadge";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Stethoscope, TrendingUp, Shield, Truck, Zap, MapPin } from "lucide-react";
import partnerHeroImage from "@/assets/partner-hero.jpg";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
        {/* Background Effects */}
        <div className="absolute inset-0 organic-pattern opacity-30" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Badge */}
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              Lokarth Alliance
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Partner in Building a <span className="text-primary">Vitamin D3 Sufficient India.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the Lokarth Mission. Exclusive Access for Medical Professionals & Channel Partners.
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <img
                src={partnerHeroImage}
                alt="Doctor with patient and clinical product packaging"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 md:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Value Proposition */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  The SuryAmrit Advantage
                </h2>
                <p className="text-muted-foreground">
                  Why leading healthcare professionals and distributors choose to partner with us.
                </p>
              </div>

              {/* For Doctors */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">For Doctors</h3>
                  <span className="text-sm text-muted-foreground">(The Clinical Edge)</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Better Compliance</span>
                      <p className="text-sm text-muted-foreground">
                        Bio-mimetic Ghee format ensures patients actually take their D₃.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Mission Aligned</span>
                      <p className="text-sm text-muted-foreground">
                        Dispense the "Gold Standard" at a subsidized patient price.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Clinical Packs</span>
                      <p className="text-sm text-muted-foreground">
                        Exclusive 66-Strip Counter Dispensers for your clinic.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* For Distributors */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">For Partners</h3>
                  <span className="text-sm text-muted-foreground">(The Growth Edge)</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Zero Friction</span>
                      <p className="text-sm text-muted-foreground">
                        "Free Shipping" models available for bulk stockists.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">High Velocity</span>
                      <p className="text-sm text-muted-foreground">
                        A product priced for mass adoption (₹99 consumer price).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Territory Protection</span>
                      <p className="text-sm text-muted-foreground">Be the exclusive Lokarth partner in your zone.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Lokarth Badge */}
              <div className="pt-4">
                <LokarthBadge size="lg" />
              </div>
            </div>

            {/* Right Column - Partner Form */}
            <div className="lg:sticky lg:top-24">
              <PartnerForm whatsappNumber="918001234567" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary/5 border-y border-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Partner Clinics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">1L+</div>
              <div className="text-sm text-muted-foreground">Patients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">2hrs</div>
              <div className="text-sm text-muted-foreground">Avg. Approval Time</div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloatingButton
        phoneNumber="918001234567"
        message="I am a Doctor/Partner interested in bulk buying. Please share details."
        label="Need Instant Access? Chat with our B2B Manager"
      />

      <Footer />
    </div>
  );
};

export default Partners;
