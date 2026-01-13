import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Award, Globe } from "lucide-react";

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
      description: "A next-gen oral delivery matrix powered by 125 mg Ghee and 600 IU Vegan D₃ (Lichen Source). Scientifically designed for maximum absorption, great taste, and clean compliance."
    },
    {
      title: "Fat-Soluble Absorption",
      description: "Ghee enhances D₃ bioavailability via lymphatic transport."
    },
    {
      title: "Stable Emulsion Matrix",
      description: "Carrageenan + Glycerin support dispersion and shelf life."
    },
    {
      title: "Taste & Feel Optimized",
      description: "Cinnamon / Cardamom / Lemon Peppermint / Orange."
    },
    {
      title: "Zero-Glycemic Sweetening",
      description: "Sweetening with Sucralose & Sorbitol - Diabetic-Safe"
    },
    {
      title: "Antioxidant Protection",
      description: "Vitamin E stabilizes active compounds."
    },
    {
      title: "Clean Label",
      description: "No cholesterol. No added sugar. No synthetic fat."
    },
    {
      title: "Compliant & Clear",
      description: "Class II Preservative (INS 211) & Colour (INS 104 / 110 / 127 / 133) Not for Medicinal Use (FSSAI Health Supplement)"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Why Lichen-Based Vitamin D₃ Cholecalciferol?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The superior choice for ethical, sustainable, and effective vitamin D₃ supplementation
          </p>
        </div>

        {/* Lichen vs Animal Comparison */}
        <div className="mb-16">
          <Card className="border-primary/20 shadow-soft">
            <CardHeader className="bg-gradient-subtle">
              <CardTitle className="text-2xl text-center text-secondary">
                Lichen-based vs Animal-source Vitamin D₃
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-bold text-secondary">Aspect</th>
                      <th className="text-left p-4 font-bold text-primary">Lichen-based Vitamin D₃ (Cholecalciferol)</th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Animal-source D₃ (Lanolin-derived)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lichenVsAnimal.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-secondary">{row.aspect}</td>
                        <td className="p-4 text-green-700 font-medium">{row.lichen}</td>
                        <td className="p-4 text-muted-foreground">{row.animal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-secondary text-white rounded-lg p-4 mt-4">
            <p className="text-center font-medium">
              <Leaf className="inline h-5 w-5 mr-2" />
              Lichen-derived D₃ is bioidentical to animal sources suitable for vegan, gut-friendly formulations.
            </p>
            <p className="text-center text-sm mt-1 opacity-90">
              - European Food Safety Authority (EFSA), 2021
            </p>
          </div>
        </div>

        {/* Matrix Enhancer Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">Matrix Enhancer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matrixFeatures.map((feature, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-golden transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <CardTitle className="text-lg text-secondary leading-tight">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-secondary mb-2">100% Vegetarian</h4>
              <p className="text-sm text-muted-foreground">Lichen-sourced D₃ suitable for all dietary preferences</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-secondary mb-2">FSSAI Approved</h4>
              <p className="text-sm text-muted-foreground">Compliant health supplement with safety certifications</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-secondary mb-2">Clean Formula</h4>
              <p className="text-sm text-muted-foreground">No cholesterol, added sugar, or synthetic fats</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:shadow-golden transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-secondary mb-2">Global Standards</h4>
              <p className="text-sm text-muted-foreground">EU, US, and FSSAI regulatory approvals</p>
            </CardContent>
          </Card>
        </div>

        {/* Product Usage */}
        <div className="bg-gradient-subtle rounded-2xl p-8 mt-16">
          <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Recommended Usage</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">💊</div>
              <h4 className="font-bold text-secondary mb-2">Dosage</h4>
              <p className="text-muted-foreground">Chew or pop 1 SuryAmrit™ veg capsule daily, or as advised by a healthcare professional.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💧</div>
              <h4 className="font-bold text-secondary mb-2">No Water Required</h4>
              <p className="text-muted-foreground">Convenient soft chewable format for anytime, anywhere consumption.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🕒</div>
              <h4 className="font-bold text-secondary mb-2">Daily Habit</h4>
              <p className="text-muted-foreground">Best results with consistent daily intake for optimal vitamin D₃ levels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;