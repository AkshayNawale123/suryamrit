import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sun, Shield, Heart, MapPin, Users, TrendingUp, Sparkles, Zap, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import D3DeficiencyMap from '@/components/D3DeficiencyMap';

// Import generated images
import sacredCowImage from '@/assets/sacred-cow-sunrise.jpg';
import vitaminDNatureImage from '@/assets/vitamin-d-nature.jpg';
import healthAnatomyImage from '@/assets/health-anatomy.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      {/* Hero Section - Warm Natural Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Warm Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/30" />
        <div className="absolute inset-0 organic-pattern opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow" />
        
        {/* Floating Organic Orbs */}
        <div className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-primary/25 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute bottom-32 right-[15%] w-56 h-56 rounded-full bg-gradient-to-br from-secondary/15 to-transparent blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-[20%] w-32 h-32 rounded-full bg-accent/30 blur-2xl animate-float-slow" style={{ animationDelay: '4s' }} />
        
        {/* Soft Vertical Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-8 px-6 py-2 text-sm font-medium bg-primary/15 text-primary border-primary/30 backdrop-blur-sm animate-pulse-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              India's #1 Vitamin D₃ Solution
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
              <span className="text-foreground">Combat India's Silent</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient warm-glow">
                Vitamin D Crisis
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Over 80% of Indians are Vitamin D deficient. SuryAmrit™ provides the natural, 
              plant-based solution your body needs to thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg" 
                className="group relative px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary text-primary-foreground hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.5)] transition-all duration-500 rounded-2xl overflow-hidden"
              >
                <Link to="/product">
                  <span className="relative z-10 flex items-center">
                    Explore SuryAmrit™ 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all duration-300 rounded-2xl"
              >
                <Link to="/where-to-buy">Where to Buy</Link>
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: '80%+', label: 'Indians Deficient' },
                { value: '600 IU', label: 'Daily Dose' },
                { value: '100%', label: 'Plant-Based' },
              ].map((stat, i) => (
                <div key={i} className="text-center glass-card rounded-2xl p-4 golden-border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-16 animate-float-slow hidden lg:block">
          <div className="glass-card p-4 rounded-2xl golden-border">
            <Sun className="h-8 w-8 text-primary animate-pulse-glow" />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-float-slow hidden lg:block" style={{ animationDelay: '1s' }}>
          <div className="glass-card p-4 rounded-2xl sage-border">
            <Leaf className="h-8 w-8 text-secondary" />
          </div>
        </div>
      </section>

      {/* Problem Statement - Natural Cards */}
      <section className="py-24 relative bg-gradient-to-b from-background via-accent/20 to-background">
        <div className="absolute inset-0 organic-pattern opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/30">
                <Zap className="w-4 h-4 mr-2" />
                Critical Health Alert
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Hidden Health Crisis in India
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vitamin D deficiency affects millions across India, leading to serious health complications 
                that could be easily prevented with the right supplementation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: '80%+ Deficient',
                  desc: 'Over 80% of Indians have insufficient Vitamin D levels, especially in urban areas with limited sun exposure.',
                  gradient: 'from-primary/15 to-primary/5',
                  iconBg: 'bg-gradient-to-br from-primary to-primary',
                  iconColor: 'text-primary-foreground',
                  titleColor: 'text-primary',
                },
                {
                  icon: Heart,
                  title: 'Multiple Health Risks',
                  desc: 'Deficiency leads to bone problems, weakened immunity, depression, and increased risk of chronic diseases.',
                  gradient: 'from-destructive/12 to-destructive/5',
                  iconBg: 'bg-gradient-to-br from-destructive to-red-400',
                  iconColor: 'text-white',
                  titleColor: 'text-destructive',
                },
                {
                  icon: TrendingUp,
                  title: 'Growing Problem',
                  desc: 'Modern lifestyle, pollution, and dietary changes are making Vitamin D deficiency more prevalent each year.',
                  gradient: 'from-secondary/15 to-secondary/5',
                  iconBg: 'bg-gradient-to-br from-secondary to-secondary',
                  iconColor: 'text-secondary-foreground',
                  titleColor: 'text-secondary',
                },
              ].map((item, i) => (
                <Card key={i} className="group glass-card border-0 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.3)] rounded-3xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardHeader className="relative z-10 text-center pt-8">
                    <div className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                    </div>
                    <CardTitle className={`text-xl ${item.titleColor}`}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center pb-8">
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Nature's Gift Section - Image Showcase */}
      <section className="py-24 relative overflow-hidden">
        {/* Sage Green Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-accent/60 to-accent/40" />
        <div className="absolute inset-0 radial-sage" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary/15 text-secondary border-secondary/30">
                <Leaf className="w-4 h-4 mr-2" />
                Nature's Sacred Gift
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                From Sacred Tradition to Modern Wellness
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Drawing from India's rich Ayurvedic heritage, SuryAmrit™ combines the purity of 
                traditional ghee with cutting-edge plant-based Vitamin D₃ science.
              </p>
            </div>
            
            {/* Image Grid - Bento Style */}
            <div className="grid lg:grid-cols-3 gap-6 mb-16">
              {/* Large Featured Image */}
              <div className="lg:col-span-2 image-frame group">
                <img 
                  src={sacredCowImage} 
                  alt="Sacred Indian cow in golden sunrise - representing pure, traditional source of ghee"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sacred Tradition</h3>
                  <p className="text-white/90">Pure desi cow ghee - revered for millennia as nature's perfect carrier for nutrients</p>
                </div>
              </div>
              
              {/* Health Anatomy Image */}
              <div className="image-frame group">
                <img 
                  src={healthAnatomyImage} 
                  alt="Vitamin D absorption in human body with natural herbs"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Complete Absorption</h3>
                  <p className="text-white/90 text-sm">Ghee enhances D₃ bioavailability</p>
                </div>
              </div>
            </div>
            
            {/* Full Width Nature Image */}
            <div className="image-frame group">
              <img 
                src={vitaminDNatureImage} 
                alt="Golden Vitamin D capsule in nature with sunbeams and herbs"
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-transparent to-foreground/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">The Golden Essence of Sunlight</h3>
                  <p className="text-lg text-white/90 mb-6">
                    Plant-derived Vitamin D₃ captured in a gentle, vegetarian formula
                  </p>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.5)] rounded-xl">
                    <Link to="/product">
                      Discover SuryAmrit™ <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                { icon: Sun, text: '100% Plant-Based D₃' },
                { icon: Heart, text: 'Traditional Ghee Base' },
                { icon: Shield, text: 'Safe for All Ages' },
                { icon: Leaf, text: 'Ayurvedic Heritage' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass-card px-6 py-3 rounded-full golden-border">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D3 Deficiency Map */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vitamin D Deficiency Across India
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the regional distribution of Vitamin D deficiency rates across different states. 
              The darker regions indicate higher deficiency rates.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-8 sage-border">
            <D3DeficiencyMap />
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-24 relative bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="absolute inset-0 organic-pattern opacity-30" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] radial-glow translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-secondary/15 text-secondary border-secondary/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  The SuryAmrit™ Solution
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                  Natural, Plant-Based Vitamin D₃ for Every Indian
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  SuryAmrit™ is specially formulated for Indian lifestyles, using lichen-derived 
                  Vitamin D₃ in a traditional ghee base for optimal absorption and cultural acceptance.
                </p>
                
                <div className="space-y-5 mb-10">
                  {[
                    '100% Plant-Based & Vegetarian',
                    'Traditional Ghee Base for Better Absorption',
                    'Safe for All Ages - From Infants to Elderly',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary flex items-center justify-center group-hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.4)] transition-all duration-300 shadow-md">
                        <span className="text-primary-foreground font-bold">✓</span>
                      </div>
                      <span className="text-foreground font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary text-primary-foreground hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.4)] transition-all duration-300 rounded-xl">
                    <Link to="/product">
                      Learn More About SuryAmrit™ <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-secondary/40 text-secondary hover:border-secondary hover:bg-secondary/5 rounded-xl">
                    <Link to="/about">Our Story</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass-card rounded-3xl p-10 text-center relative overflow-hidden group border-primary/20 golden-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/5 opacity-50" />
                  
                  {/* Animated Rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-primary/15 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-40 h-40 mx-auto mb-8 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/15 animate-pulse" />
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-primary flex items-center justify-center shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.5)]">
                        <Sun className="h-16 w-16 text-primary-foreground animate-pulse-glow" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground mb-4">600 IU Natural D₃</h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                      Optimal daily dose in a soft, chewable format that's easy to take and pleasant to taste.
                    </p>
                    
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-secondary to-secondary hover:shadow-[0_10px_40px_-10px_hsl(145_35%_45%_/_0.4)] text-secondary-foreground rounded-xl">
                      <Link to="/where-to-buy">Order Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
              Explore More
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { to: '/about', icon: Heart, title: 'About Us', desc: 'Learn about our mission to combat Vitamin D deficiency in India.', iconBg: 'bg-gradient-to-br from-primary to-primary', titleColor: 'text-primary' },
                { to: '/endorsements', icon: Users, title: 'Endorsements', desc: 'See what health experts and satisfied customers say about us.', iconBg: 'bg-gradient-to-br from-secondary to-secondary', titleColor: 'text-secondary' },
                { to: '/blog', icon: TrendingUp, title: 'Knowledge Center', desc: 'Read articles about Vitamin D health and wellness tips.', iconBg: 'bg-gradient-to-br from-primary to-primary', titleColor: 'text-primary' },
                { to: '/where-to-buy', icon: MapPin, title: 'Where to Buy', desc: 'Find SuryAmrit™ on leading e-commerce platforms.', iconBg: 'bg-gradient-to-br from-secondary to-secondary', titleColor: 'text-secondary' },
              ].map((item, i) => (
                <Card key={i} className="group glass-card border-0 hover:border-primary/20 transition-all duration-500 cursor-pointer rounded-3xl overflow-hidden hover:shadow-[0_10px_40px_-10px_hsl(40_95%_52%_/_0.3)]">
                  <Link to={item.to} className="block">
                    <CardHeader className="text-center pt-8">
                      <div className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className={item.titleColor}>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-8">
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;