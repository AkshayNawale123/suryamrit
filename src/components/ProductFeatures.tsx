import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Award, Globe, Droplets, Sparkles } from "lucide-react";
import sacredCow from "@/assets/sacred-cow-sunrise.jpg";
import vitaminNature from "@/assets/vitamin-d-nature.jpg";

const ProductFeatures = () => {
  const lichenVsAnimal = [
    { aspect: "Form", lichen: "Cholecalciferol (D₃)", animal: "Cholecalciferol (D₃)" },
    { aspect: "Source", lichen: "Lichen (fungus + algae)", animal: "Sheep's wool grease (lanolin)" },
    { aspect: "Regulatory Approval", lichen: "Approved by the EU, US, and FSSAI", animal: "Widely approved" },
    { aspect: "Vegetarian", lichen: "100% Vegetarian", animal: "Animal-derived" },
    { aspect: "Allergen-Free", lichen: "Free from animal proteins, lanolin, or allergens", animal: "May contain lanolin residues" },
    { aspect: "Stability", lichen: "Highly stable when microencapsulated", animal: "Stable" },
    { aspect: "Sustainability", lichen: "Environment-friendly; no harm to nature", animal: "Animal welfare concerns" },
    { aspect: "Ideal For", lichen: "Ethical consumers, vegans, and sensitive users", animal: "Omnivorous populations" }
  ];

  const matrixFeatures = [
    {
      title: "Ghee-Based Nutrient Delivery System",
      description: "A next-gen oral delivery matrix powered by 125 mg Ghee and 600 IU Vegan D₃ (Lichen Source). Scientifically designed for maximum absorption, great taste, and clean compliance.",
      icon: Droplets
    },
    {
      title: "Fat-Soluble Absorption",
      description: "Ghee enhances D₃ bioavailability via lymphatic transport.",
      icon: Sparkles
    },
    {
      title: "Stable Emulsion Matrix",
      description: "Carrageenan + Glycerin support dispersion and shelf life.",
      icon: CheckCircle
    },
    {
      title: "Taste & Feel Optimized",
      description: "Cinnamon / Cardamom / Lemon Peppermint / Orange.",
      icon: Sparkles
    },
    {
      title: "Zero-Glycemic Sweetening",
      description: "Sweetening with Sucralose & Sorbitol - Diabetic-Safe",
      icon: CheckCircle
    },
    {
      title: "Antioxidant Protection",
      description: "Vitamin E stabilizes active compounds.",
      icon: Leaf
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-4 py-2">
            <Leaf className="w-4 h-4 mr-2 inline" />
            Nature's Wisdom
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Why Lichen-Based Vitamin D₃?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The superior choice for ethical, sustainable, and effective vitamin D₃ supplementation
          </p>
        </div>

        {/* Nature Images Feature */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-warm rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={sacredCow} 
                alt="Sacred Indian Gir cow at sunrise" 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sacred Tradition</h3>
                <p className="text-white/80">Pure ghee from revered Indian Gir cows, crafted with ancient wisdom</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-natural rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden shadow-natural">
              <img 
                src={vitaminNature} 
                alt="Natural vitamin D essence" 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Nature's Gift</h3>
                <p className="text-white/80">Lichen-derived D₃ combined with the power of pure ghee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lichen vs Animal Comparison */}
        <div className="mb-20">
          <Card className="border-primary/20 shadow-warm overflow-hidden">
            <CardHeader className="bg-gradient-warm text-secondary">
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                <Leaf className="w-6 h-6" />
                Lichen-based vs Animal-source Vitamin D₃
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left p-4 font-bold text-secondary">Aspect</th>
                      <th className="text-left p-4 font-bold text-primary">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Lichen-based D₃
                        </span>
                      </th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Animal-source D₃</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lichenVsAnimal.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-primary/5 transition-colors">
                        <td className="p-4 font-medium text-secondary">{row.aspect}</td>
                        <td className="p-4 text-accent font-medium">{row.lichen}</td>
                        <td className="p-4 text-muted-foreground">{row.animal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-natural text-white rounded-2xl p-6 mt-6 shadow-natural">
            <p className="text-center font-medium flex items-center justify-center gap-2">
              <Leaf className="h-5 w-5" />
              Lichen-derived D₃ is bioidentical to animal sources — suitable for vegan, gut-friendly formulations.
            </p>
            <p className="text-center text-sm mt-2 opacity-80">
              - European Food Safety Authority (EFSA), 2021
            </p>
          </div>
        </div>

        {/* Matrix Enhancer Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-secondary mb-10 text-center">Matrix Enhancer Technology</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matrixFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-primary/10 hover:border-primary/30 hover:shadow-warm transition-all duration-300 group bg-white">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-secondary leading-tight flex-1">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <Card className="text-center border-none bg-gradient-warm hover:shadow-warm transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">100% Vegetarian</h4>
              <p className="text-sm text-muted-foreground">Lichen-sourced D₃ suitable for all dietary preferences</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none bg-gradient-natural hover:shadow-natural transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">FSSAI Approved</h4>
              <p className="text-sm text-muted-foreground">Compliant health supplement with safety certifications</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none bg-gradient-warm hover:shadow-warm transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">Clean Formula</h4>
              <p className="text-sm text-muted-foreground">No cholesterol, added sugar, or synthetic fats</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none bg-gradient-natural hover:shadow-natural transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="h-10 w-10 text-accent" />
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">Global Standards</h4>
              <p className="text-sm text-muted-foreground">EU, US, and FSSAI regulatory approvals</p>
            </CardContent>
          </Card>
        </div>

        {/* Product Usage */}
        <div className="bg-white rounded-3xl p-10 shadow-warm border border-primary/10">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Recommended Usage</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💊</span>
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">Dosage</h4>
              <p className="text-muted-foreground">Chew or pop 1 SuryAmrit™ veg capsule daily, or as advised by a healthcare professional.</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-natural rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">💧</span>
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">No Water Required</h4>
              <p className="text-muted-foreground">Convenient soft chewable format for anytime, anywhere consumption.</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🕒</span>
              </div>
              <h4 className="font-bold text-secondary mb-2 text-lg">Daily Habit</h4>
              <p className="text-muted-foreground">Best results with consistent daily intake for optimal vitamin D₃ levels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
