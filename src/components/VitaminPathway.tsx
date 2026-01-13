import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sun, Zap, Target, ZoomIn, ArrowRight, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import healthAnatomy from "@/assets/health-anatomy.jpg";

const VitaminPathway = () => {
  return (
    <section id="science" className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Zap className="w-4 h-4 mr-2 inline" />
            The Science
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Vitamin D₃ Metabolic Pathway</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding how your body transforms sunlight into essential health benefits
          </p>
        </div>

        {/* Pathway Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <Card className="text-center border-none bg-white shadow-warm hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sun className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-secondary text-lg">UVB RAYS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Sunlight exposure on skin</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none bg-white shadow-warm hover:shadow-lg transition-all duration-300 group relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="w-8 h-8 text-primary/40" />
            </div>
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-natural rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-primary rounded-full" />
              </div>
              <CardTitle className="text-secondary text-lg">SKIN → LIVER</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">7-DEHYDROCHOLESTEROL</p>
              <p className="text-sm text-primary font-semibold mt-2">D₃ → 25 (OH) D</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none bg-white shadow-warm hover:shadow-lg transition-all duration-300 group relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="w-8 h-8 text-primary/40" />
            </div>
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-accent rounded-lg" />
              </div>
              <CardTitle className="text-secondary text-lg">LIVER → KIDNEY</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary font-semibold">25(OH)D → 1,25 (OH) 2D</p>
              <p className="text-muted-foreground text-sm">(CALCITRIOL, ACTIVE)</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none bg-white shadow-warm hover:shadow-lg transition-all duration-300 group relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <ArrowRight className="w-8 h-8 text-primary/40" />
            </div>
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-natural rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="text-secondary text-lg">CELL</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Active D₃ reaches target cells</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose SuryAmrit */}
        <div className="bg-white rounded-3xl p-10 shadow-warm mb-20">
          <h3 className="text-3xl font-bold text-secondary mb-10 text-center">
            Why Choose <span className="text-primary">SuryAmrit™</span>?
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {[
              { icon: "🧈", title: "Ghee Base", desc: "Enhances Vitamin D₃ Absorption", gradient: "bg-gradient-warm" },
              { icon: "600", title: "600 IU Natural D₃", desc: "Scientifically Safe, RDA-Aligned", gradient: "bg-gradient-natural" },
              { icon: "🌿", title: "Soft Chewable", desc: "Water-Free, Anytime-Anywhere", gradient: "bg-gradient-warm" },
              { icon: "🎯", title: "High Compliance", desc: "Easy to Chew = Higher Adoption", gradient: "bg-gradient-natural" },
              { icon: "🌱", title: "Plant Based Shell", desc: "100% Animal-Free and Gut-friendly", gradient: "bg-gradient-warm" },
              { icon: "☀️", title: "Indian Lifestyle", desc: "Matches Sunlight & Climate Profiles", gradient: "bg-gradient-natural" },
              { icon: "👨‍👩‍👧‍👦", title: "All Ages Safe", desc: "Safe for Kids 1+, Adults, Elderly", gradient: "bg-gradient-warm" },
              { icon: "⚡", title: "Ayurvedic Logic", desc: "Supports Agni, Ojas, and Dhatu", gradient: "bg-gradient-natural" }
            ].map((item, index) => (
              <Card key={index} className={`group border-none ${item.gradient} hover:shadow-warm transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {item.icon === "600" ? (
                      <span className="font-bold text-xl text-primary">600</span>
                    ) : (
                      <span className="text-3xl">{item.icon}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organ-wise Impact */}
        <div>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-4 py-2">
              <Leaf className="w-4 h-4 mr-2 inline" />
              Health Benefits
            </Badge>
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Organ-wise Vitamin D₃ Impact
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Vitamin D₃ benefits every organ system across all life stages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Baby/Child Impact */}
            <TooltipProvider>
              <Card className="group border-none bg-white shadow-warm hover:shadow-lg transition-all duration-500 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-secondary mb-4">Growing Children (1+ Years)</CardTitle>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="relative mx-auto w-48 h-64 bg-gradient-warm rounded-xl shadow-warm overflow-hidden cursor-pointer group/image">
                        <img 
                          src="/lovable-uploads/7551353f-d8ef-4b55-bb2d-63bfdad95f0b.png" 
                          alt="Child anatomy showing organ systems" 
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-primary rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="w-80 p-4 bg-white border border-primary/20 shadow-warm z-[60]"
                      sideOffset={15}
                    >
                      <div className="space-y-3">
                        <h5 className="font-bold text-primary text-lg">Child Benefits</h5>
                        <div className="grid gap-2 text-sm">
                          <p className="font-semibold text-secondary">🦴 Bone & Skeletal Development</p>
                          <p className="font-semibold text-secondary">🛡️ Immune System Strengthening</p>
                          <p className="font-semibold text-secondary">🧠 Brain & Cognitive Support</p>
                          <p className="font-semibold text-secondary">💪 Physical Growth Enhancement</p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gradient-warm rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Key Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bone & teeth development</li>
                      <li>• Immune system strengthening</li>
                      <li>• Brain development support</li>
                      <li>• Respiratory health</li>
                      <li>• Muscle growth</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>

            {/* Adult Male Impact */}
            <TooltipProvider>
              <Card className="group border-none bg-white shadow-natural hover:shadow-lg transition-all duration-500 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-secondary mb-4">Adult Men</CardTitle>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="relative mx-auto w-48 h-64 bg-gradient-natural rounded-xl shadow-natural overflow-hidden cursor-pointer group/image">
                        <img 
                          src="/lovable-uploads/71d77fd3-3ffe-49be-af8f-5882615635ef.png" 
                          alt="Adult male anatomy showing organ systems" 
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-accent rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="w-80 p-4 bg-white border border-accent/20 shadow-natural z-[60]"
                      sideOffset={15}
                    >
                      <div className="space-y-3">
                        <h5 className="font-bold text-accent text-lg">Adult Men Benefits</h5>
                        <div className="grid gap-2 text-sm">
                          <p className="font-semibold text-secondary">🧠 Cognitive Health Support</p>
                          <p className="font-semibold text-secondary">❤️ Cardiovascular Protection</p>
                          <p className="font-semibold text-secondary">💪 Muscle & Bone Strength</p>
                          <p className="font-semibold text-secondary">🛡️ Immune System Boost</p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gradient-natural rounded-lg p-4">
                    <h5 className="font-semibold text-accent mb-2">Key Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cognitive function support</li>
                      <li>• Heart health protection</li>
                      <li>• Bone density maintenance</li>
                      <li>• Muscle strength preservation</li>
                      <li>• Immune system enhancement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>

            {/* Adult Female Impact */}
            <TooltipProvider>
              <Card className="group border-none bg-white shadow-warm hover:shadow-lg transition-all duration-500 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-secondary mb-4">Adult Women</CardTitle>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className="relative mx-auto w-48 h-64 bg-gradient-warm rounded-xl shadow-warm overflow-hidden cursor-pointer group/image">
                        <img 
                          src="/lovable-uploads/14855da8-65a6-4354-817a-b11d11497033.png" 
                          alt="Adult female anatomy showing organ systems" 
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-primary rounded-full p-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="w-80 p-4 bg-white border border-primary/20 shadow-warm z-[60]"
                      sideOffset={15}
                    >
                      <div className="space-y-3">
                        <h5 className="font-bold text-primary text-lg">Adult Women Benefits</h5>
                        <div className="grid gap-2 text-sm">
                          <p className="font-semibold text-secondary">🌸 Hormonal Balance Support</p>
                          <p className="font-semibold text-secondary">🦴 Bone Density Protection</p>
                          <p className="font-semibold text-secondary">🤰 Pregnancy & Fertility</p>
                          <p className="font-semibold text-secondary">✨ Skin & Hair Health</p>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-gradient-warm rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Key Benefits:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hormonal rhythm regulation</li>
                      <li>• Bone density preservation</li>
                      <li>• Fertility & pregnancy support</li>
                      <li>• Skin renewal support</li>
                      <li>• Mood stability enhancement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TooltipProvider>
          </div>

          {/* Health Anatomy Feature Image */}
          <div className="mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-warm rounded-3xl blur-xl opacity-30" />
            <div className="relative bg-white rounded-3xl p-8 shadow-warm">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-secondary mb-4">Complete Body Wellness</h4>
                  <p className="text-muted-foreground mb-6">
                    Vitamin D₃ is essential for over 200 genes in your body. Combined with the bioavailability-enhancing 
                    properties of pure ghee, SuryAmrit™ delivers comprehensive health support for every organ system.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-warm rounded-xl p-4 text-center">
                      <span className="text-3xl font-bold text-primary">200+</span>
                      <p className="text-sm text-muted-foreground">Genes Supported</p>
                    </div>
                    <div className="bg-gradient-natural rounded-xl p-4 text-center">
                      <span className="text-3xl font-bold text-accent">82%</span>
                      <p className="text-sm text-muted-foreground">Indians Deficient</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-natural rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <img 
                    src={healthAnatomy} 
                    alt="Human health anatomy with vitamin D benefits" 
                    className="relative w-full h-80 object-cover rounded-2xl shadow-natural"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaminPathway;
