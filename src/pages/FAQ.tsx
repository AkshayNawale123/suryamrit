import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Pill, Heart, Users, HelpCircle, AlertTriangle, CheckCircle, Leaf } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      id: "general",
      title: "General Knowledge and Requirements",
      icon: HelpCircle,
      questions: [
        {
          question: "What exactly is Vitamin D?",
          answer:
            "Vitamin D is a fat-soluble nutrient that acts more like a hormone in the body. It is essential for bone development and maintenance because it enhances the absorption of calcium, magnesium, and phosphate.",
        },
        {
          question: "What are the current recommended intake levels for Indians?",
          answer:
            "According to the ICMR-NIN 2020 guidelines, the Recommended Dietary Allowance (RDA) for adult men and women is 600 IU (International Units) per day. This is an increase from the 400 IU recommended in 2010.",
          highlight: "600 IU/day RDA",
        },
        {
          question: 'What are considered "normal" blood levels for Vitamin D?',
          answer:
            "While definitions vary, sufficiency is generally defined as having serum 25-hydroxyvitamin D levels above 30 ng/mL. Levels below 20 ng/mL indicate deficiency, while levels between 20 and 30 ng/mL suggest insufficiency.",
        },
      ],
    },
    {
      id: "sources",
      title: "Sources: Sunlight and Diet",
      icon: Sun,
      questions: [
        {
          question: "Myth or Fact: India is a sunny country, so Indians cannot be Vitamin D deficient.",
          answer:
            'Myth. Despite ample sunlight, Vitamin D deficiency is a "silent epidemic" in India. One in five Indians is deficient, with prevalence ranging from 9.4% in North India to 38.8% in East India. High air pollution in cities blocks UVB radiation, and the modern indoor lifestyle of urban Indians further reduces sun exposure.',
          type: "myth",
          highlight: "1 in 5 Indians deficient",
        },
        {
          question: "How much sun exposure do I actually need?",
          answer:
            "Roughly 20 minutes of daily sunshine with over 40% of the skin exposed is typically required to prevent deficiency.",
          highlight: "20 mins daily",
        },
        {
          question: "Myth or Fact: Everyone synthesizes Vitamin D from the sun at the same rate.",
          answer:
            "Myth. Individuals with darker skin (higher melanin) synthesize Vitamin D less efficiently. Studies suggest Indians may require three to six times longer exposure to the sun to produce the same amount of Vitamin D as those with lighter skin tones.",
          type: "myth",
        },
        {
          question: "Can I get enough Vitamin D from my diet alone?",
          answer:
            "It is difficult. Dietary sources are minimal; natural sources are limited to fatty fish, egg yolks, and certain mushrooms. Furthermore, traditional Indian cooking methods, such as the prolonged boiling of milk, may reduce Vitamin D content.",
        },
      ],
    },
    {
      id: "supplements",
      title: "Supplements and Toxicity",
      icon: Pill,
      questions: [
        {
          question: "What is the difference between Vitamin D2 and Vitamin D3?",
          answer:
            "Vitamin D2 (ergocalciferol) is synthetic and plant-based, while Vitamin D3 (cholecalciferol) is the form naturally synthesized by the skin. Vitamin D3 is more effective at raising and maintaining serum levels than D2.",
        },
        {
          question: "Myth or Fact: You can get Vitamin D toxicity from spending too much time in the sun.",
          answer:
            "Myth. Toxicity, or hypervitaminosis D, typically results from excessive oral intake rather than sun exposure. Toxicity is generally considered to occur when serum levels exceed 150 ng/mL.",
          type: "myth",
        },
        {
          question: "Can I take high-dose supplements indefinitely?",
          answer:
            "No. Supplementation exceeding 4,000 IU daily is not recommended for adults who already have sufficient levels of the vitamin. High-dose treatment (e.g., 60,000 IU weekly) should be limited to short-term correction—usually 8 weeks—under medical supervision.",
          highlight: "Max 4,000 IU/day",
        },
      ],
    },
    {
      id: "health",
      title: "Health Benefits and Complications",
      icon: Heart,
      questions: [
        {
          question: "Myth or Fact: Vitamin D supplements can prevent cancer and heart disease.",
          answer:
            "Unclear/Myth. While some observational studies show a link between deficiency and these diseases, large clinical trials (such as VITAL and ViDA) showed that supplementation in adults who already have sufficient levels does not prevent cardiovascular events, cancer, or type 2 diabetes.",
          type: "unclear",
        },
        {
          question: "What happens if a deficiency is left untreated?",
          answer:
            "Chronic deficiency can lead to secondary hyperparathyroidism, which causes the body to pull calcium from the bones. This results in rickets in children and osteomalacia or osteoporosis in adults, significantly increasing the risk of fractures and falls.",
        },
        {
          question: "Why is testing for Vitamin D so expensive in India?",
          answer:
            "Private laboratories often charge upwards of INR 1,500, though government hospitals may provide them for INR 200–500. The high cost is attributed to a lack of domestic production for testing kits and a 10% import duty on these materials.",
        },
      ],
    },
    {
      id: "populations",
      title: "Special Populations",
      icon: Users,
      questions: [
        {
          question: "Who is most at risk in India?",
          answer:
            "The most vulnerable groups include children (ages 0–10), where up to 46% suffer from rickets in certain studies, and the elderly, where 80–90% may suffer from osteoporosis. Pregnant women and those with an indoor urban lifestyle are also at high risk.",
          highlight: "80-90% elderly affected",
        },
        {
          question: "Does sunscreen prevent Vitamin D synthesis?",
          answer:
            "Yes. Consistent use of sunscreen reduces the opportunity for effective sun exposure and natural Vitamin D synthesis. Cultural preferences for fair skin and the use of umbrellas to avoid tanning also contribute to the deficiency in India.",
        },
      ],
    },
  ];

  const getBadgeForType = (type?: string) => {
    if (type === "myth") {
      return (
        <Badge variant="destructive" className="ml-2 text-xs">
          <AlertTriangle className="w-3 h-3 mr-1" />
          Myth
        </Badge>
      );
    }
    if (type === "unclear") {
      return (
        <Badge variant="secondary" className="ml-2 text-xs bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          <AlertTriangle className="w-3 h-3 mr-1" />
          Unclear
        </Badge>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-light to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-cream-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Your Questions Answered</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Vitamin D: <span className="text-primary">Frequently Asked Questions</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Vitamin D, its benefits, sources, and how it affects your health.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              {[
                { stat: "600 IU", label: "Daily RDA" },
                { stat: "1 in 5", label: "Indians Deficient" },
                { stat: "20 mins", label: "Sun Exposure Needed" },
                { stat: "30 ng/mL", label: "Optimal Blood Level" },
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary">{item.stat}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
                    <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`} className="border-b last:border-0">
                          <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 text-left">
                            <span className="flex items-center flex-wrap gap-2">
                              <span className="font-medium">{faq.question}</span>
                              {getBadgeForType(faq.type)}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="prose prose-sm max-w-none">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              {faq.highlight && (
                                <div className="mt-3 inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                                  <CheckCircle className="w-4 h-4" />
                                  {faq.highlight}
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-white/90 mb-8">
              Try SuryAmrit Vitamin D3 — India's trusted source for natural Vitamin D supplementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/product">Explore SuryAmrit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-black text-white hover:bg-white/10">
                <Link to="/buy">Where to Buy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
