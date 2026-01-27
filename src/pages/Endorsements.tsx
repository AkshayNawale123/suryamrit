import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Award, Users, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Endorsements = () => {
  const expertEndorsements = [
    {
      name: "Dr. Priya Sharma",
      title: "MBBS, MD (Endocrinology)",
      hospital: "AIIMS, New Delhi",
      image: "👩‍⚕️",
      quote:
        "SuryAmrit™ represents a breakthrough in Vitamin D supplementation for Indian families. The lichen-based D3 in a ghee matrix ensures optimal absorption while respecting our vegetarian traditions.",
      rating: 5,
      specialty: "Endocrinologist",
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "MD (Pediatrics), DCH",
      hospital: "Rainbow Children's Hospital",
      image: "👨‍⚕️",
      quote:
        "I've been recommending SuryAmrit™ to my pediatric patients for over 2 years. The soft, chewable format makes it easy for children, and parents love that it's 100% natural.",
      rating: 5,
      specialty: "Pediatrician",
    },
    {
      name: "Dr. Meera Patel",
      title: "BHMS, MD (Homeopathy)",
      hospital: "Homeopathic Medical College",
      image: "👩‍⚕️",
      quote:
        "As a homeopathic practitioner, I appreciate SuryAmrit's natural approach. The Ayurvedic principles combined with modern science make it perfect for holistic health management.",
      rating: 5,
      specialty: "Homeopath",
    },
    {
      name: "Dr. Arjun Singh",
      title: "MBBS, MS (Orthopedics)",
      hospital: "Fortis Hospital, Mumbai",
      image: "👨‍⚕️",
      quote:
        "I've seen remarkable improvement in bone density among patients using SuryAmrit™. It's particularly effective for preventing osteoporosis in middle-aged adults.",
      rating: 5,
      specialty: "Orthopedic Surgeon",
    },
  ];

  const customerStories = [
    {
      name: "Anita Gupta",
      age: 42,
      location: "Delhi",
      image: "👩",
      story:
        "After 6 months of using SuryAmrit™, my vitamin D levels increased from 8 ng/ml to 32 ng/ml. My energy levels are much better, and my joint pain has significantly reduced.",
      beforeAfter: { before: "8 ng/ml", after: "32 ng/ml" },
      duration: "6 months",
    },
    {
      name: "Rakesh Malhotra",
      age: 38,
      location: "Bangalore",
      image: "👨",
      story:
        "As a software engineer working from home, I had severe vitamin D deficiency. SuryAmrit™ helped me get back to normal levels without any side effects.",
      beforeAfter: { before: "12 ng/ml", after: "28 ng/ml" },
      duration: "4 months",
    },
    {
      name: "Priya & Family",
      age: 35,
      location: "Mumbai",
      image: "👪",
      story:
        "Our entire family takes SuryAmrit™. My kids love the taste, and we've all stayed healthier this winter. No more frequent colds and infections!",
      beforeAfter: { before: "Frequent illness", after: "Strong immunity" },
      duration: "8 months",
    },
  ];

  const certifications = [
    {
      name: "ISO 22000:2018",
      description: "Food Safety Management",
      icon: "🏆",
    },
    {
      name: "GMP Certified",
      description: "Good Manufacturing Practice",
      icon: "✅",
    },
    {
      name: "FSSAI Approved",
      description: "Food Safety Standards Authority",
      icon: "🛡️",
    },
    {
      name: "Third-Party Tested",
      description: "Independent Quality Verification",
      icon: "🔬",
    },
  ];

  const awards = [
    {
      title: "Best Vitamin D Supplement 2023",
      organization: "Health & Nutrition Awards",
      year: "2023",
    },
    {
      title: "Innovation in Natural Health",
      organization: "Indian Nutraceutical Association",
      year: "2023",
    },
    {
      title: "Customer Choice Award",
      organization: "Online Health Platform",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Trusted by Experts</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Health Experts &<span className="block text-primary-glow">Customers Say</span>
            </h1>
            <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
              Don't just take our word for it. See what leading healthcare professionals and satisfied customers say
              about SuryAmrit™.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">200+</div>
              <p className="text-sm text-muted-foreground">Doctor Recommendations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">2+</div>
              <p className="text-sm text-muted-foreground">Years Trusted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Endorsements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Healthcare Professionals Recommend SuryAmrit™
              </h2>
              <p className="text-lg text-muted-foreground">
                Leading doctors and specialists trust SuryAmrit™ for their patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {expertEndorsements.map((expert, index) => (
                <Card
                  key={index}
                  className="border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{expert.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{expert.name}</CardTitle>
                          <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                            {expert.specialty}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium text-sm">{expert.title}</p>
                        <p className="text-muted-foreground text-sm">{expert.hospital}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(expert.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground italic pl-6">"{expert.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Stories, Real Results</h2>
              <p className="text-lg text-muted-foreground">
                See how SuryAmrit™ has transformed the health of families across India
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {customerStories.map((story, index) => (
                <Card key={index} className="border-primary/20 shadow-soft">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3">{story.image}</div>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Age {story.age}, {story.location}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm italic">"{story.story}"</p>

                    <div className="bg-gradient-subtle rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Results in {story.duration}:</h4>
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Before</p>
                          <p className="font-semibold text-destructive">{story.beforeAfter.before}</p>
                        </div>
                        <div className="text-secondary">→</div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">After</p>
                          <p className="font-semibold text-secondary">{story.beforeAfter.after}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certified Quality & Recognition</h2>
              <p className="text-lg text-muted-foreground">
                Our commitment to quality is recognized by leading industry bodies
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Quality Certifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="text-center border-primary/20 shadow-soft">
                      <CardContent className="p-6">
                        <div className="text-3xl mb-3">{cert.icon}</div>
                        <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Awards & Recognition</h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <Card key={index} className="border-primary/20 shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{award.title}</h4>
                            <p className="text-sm text-muted-foreground">{award.organization}</p>
                            <Badge className="mt-1 bg-primary/10 text-primary border-primary/20">{award.year}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-primary" />
                <Users className="h-8 w-8 text-secondary" />
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Thousands of Satisfied Customers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the difference that quality, natural Vitamin D₃ supplementation can make in your life. Start
              your health journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-golden">
                <Link to="/product">Learn About SuryAmrit™</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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

export default Endorsements;
