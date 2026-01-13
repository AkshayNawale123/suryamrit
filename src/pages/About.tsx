import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Target, Users, Award, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreadcrumbNavigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Illuminating Lives with the Power of
              <span className="block text-primary-glow">Vitamin D₃</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Born from a deep understanding of India's Vitamin D crisis, SuryAmrit™ represents 
              our commitment to bringing natural, effective solutions to every Indian home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  To combat India's widespread Vitamin D deficiency crisis by providing accessible, 
                  natural, and culturally-appropriate supplementation solutions that fit seamlessly 
                  into Indian lifestyles and traditions.
                </p>
                <p className="text-muted-foreground">
                  We believe that optimal health should not be a privilege but a right accessible 
                  to every individual, regardless of their geographic location or lifestyle constraints.
                </p>
              </div>
              
              <Card className="bg-gradient-subtle border-primary/20 shadow-golden">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sun className="h-8 w-8 text-white animate-glow" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-muted-foreground">
                      A world where Vitamin D deficiency is no longer a silent epidemic, 
                      and every person has access to the nutrition they need to live 
                      their healthiest, most vibrant life.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-primary">Natural & Pure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We source only the finest lichen-derived Vitamin D₃, ensuring 
                    100% plant-based purity that aligns with vegetarian principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-secondary">Science-Backed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every formulation is backed by rigorous scientific research 
                    and clinical studies, ensuring maximum efficacy and safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-primary">For Everyone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From infants to elderly, our products are formulated to be 
                    safe and effective for all age groups and life stages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Silent Crisis We're Fighting
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vitamin D deficiency has reached epidemic proportions in India, 
                affecting over 80% of the population despite abundant sunshine.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-destructive mb-2">80%+</div>
                  <p className="text-sm text-muted-foreground">Indians are Vitamin D deficient</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-destructive mb-2">90%+</div>
                  <p className="text-sm text-muted-foreground">Urban population affected</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-destructive mb-2">70%+</div>
                  <p className="text-sm text-muted-foreground">Children lack adequate levels</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-destructive mb-2">Rising</div>
                  <p className="text-sm text-muted-foreground">Health complications</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Why This Crisis Exists</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-destructive font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Modern Lifestyle</h4>
                      <p className="text-muted-foreground text-sm">
                        Indoor jobs, pollution, and limited sun exposure reduce natural Vitamin D synthesis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-destructive font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dietary Gaps</h4>
                      <p className="text-muted-foreground text-sm">
                        Traditional Indian diets lack sufficient Vitamin D-rich foods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-destructive font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Lack of Awareness</h4>
                      <p className="text-muted-foreground text-sm">
                        Many people are unaware of their deficiency and its long-term health impacts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-primary text-white border-0 shadow-golden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                  </div>
                  <p className="text-white/90 mb-6">
                    SuryAmrit™ bridges this gap with a scientifically formulated, 
                    culturally appropriate, and easily accessible Vitamin D₃ supplement 
                    that fits seamlessly into Indian lifestyles.
                  </p>
                  <Button asChild variant="secondary" size="lg" className="w-full">
                    <Link to="/product">Discover SuryAmrit™</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment to India
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We're not just a supplement company - we're partners in India's journey 
              towards better health and wellness.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="text-left border-primary/20 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-3">
                    <Heart className="h-6 w-6" />
                    Quality Promise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every batch of SuryAmrit™ undergoes rigorous testing for purity, 
                    potency, and safety. We never compromise on quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-left border-primary/20 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    Accessibility Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work tirelessly to make our products accessible across India, 
                    from metros to tier-3 cities, ensuring no one is left behind.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-subtle rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Us in This Mission
              </h3>
              <p className="text-muted-foreground mb-6">
                Together, we can make Vitamin D deficiency a thing of the past. 
                Join thousands of families who have already started their journey to better health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-golden">
                  <Link to="/product">Try SuryAmrit™</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;