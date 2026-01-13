import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sun, Shield, Heart, MapPin, Users, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import D3DeficiencyMap from '@/components/D3DeficiencyMap';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              India's #1 Vitamin D₃ Solution
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Combat India's Silent
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Vitamin D Crisis
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Over 80% of Indians are Vitamin D deficient. SuryAmrit™ provides the natural, 
              plant-based solution your body needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-golden"
              >
                <Link to="/product">
                  Explore SuryAmrit™ <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/where-to-buy">Where to Buy</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sun className="h-12 w-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Shield className="h-10 w-10 text-white/30" />
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Hidden Health Crisis in India
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vitamin D deficiency affects millions across India, leading to serious health complications 
                that could be easily prevented with the right supplementation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-primary/20 shadow-soft">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-primary">80%+ Deficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 80% of Indians have insufficient Vitamin D levels, 
                    especially in urban areas with limited sun exposure.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20 shadow-soft">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-secondary">Multiple Health Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deficiency leads to bone problems, weakened immunity, 
                    depression, and increased risk of chronic diseases.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20 shadow-soft">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-primary">Growing Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modern lifestyle, pollution, and dietary changes are 
                    making Vitamin D deficiency more prevalent each year.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* D3 Deficiency Map */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vitamin D Deficiency Across India
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the regional distribution of Vitamin D deficiency rates across different states. 
              The darker regions indicate higher deficiency rates.
            </p>
          </div>
          <D3DeficiencyMap />
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  The SuryAmrit™ Solution
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Natural, Plant-Based Vitamin D₃ for Every Indian
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  SuryAmrit™ is specially formulated for Indian lifestyles, using lichen-derived 
                  Vitamin D₃ in a traditional ghee base for optimal absorption and cultural acceptance.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium">100% Plant-Based & Vegetarian</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium">Traditional Ghee Base for Better Absorption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium">Safe for All Ages - From Infants to Elderly</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="shadow-golden">
                    <Link to="/product">
                      Learn More About SuryAmrit™ <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">Our Story</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-golden">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sun className="h-16 w-16 text-primary animate-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">600 IU Natural D₃</h3>
                  <p className="text-white/90 mb-6">
                    Optimal daily dose in a soft, chewable format that's easy to take and pleasant to taste.
                  </p>
                  <Button asChild variant="secondary" size="lg" className="w-full">
                    <Link to="/where-to-buy">Order Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Explore More
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-golden transition-all duration-300 cursor-pointer border-primary/20">
                <Link to="/about" className="block">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-primary">About Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Learn about our mission to combat Vitamin D deficiency in India.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-golden transition-all duration-300 cursor-pointer border-primary/20">
                <Link to="/endorsements" className="block">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-secondary">Endorsements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      See what health experts and satisfied customers say about us.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-golden transition-all duration-300 cursor-pointer border-primary/20">
                <Link to="/blog" className="block">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-primary">Knowledge Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Read articles about Vitamin D health and wellness tips.
                    </p>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-golden transition-all duration-300 cursor-pointer border-primary/20">
                <Link to="/where-to-buy" className="block">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-primary">Where to Buy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Find SuryAmrit™ on leading e-commerce platforms.
                    </p>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;