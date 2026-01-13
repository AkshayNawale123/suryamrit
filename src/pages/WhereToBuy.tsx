import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Truck, Shield, Clock, MapPin, Phone, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WhereToBuy = () => {
  const ecommercePartners = [
    {
      name: 'Amazon India',
      logo: '🏪',
      url: '#',
      rating: 4.8,
      reviews: '2,500+',
      delivery: '1-2 days',
      offer: '15% off on first order',
      badge: 'Best Seller'
    },
    {
      name: 'Flipkart',
      logo: '🛒',
      url: '#',
      rating: 4.7,
      reviews: '1,800+',
      delivery: '2-3 days',
      offer: 'Free delivery',
      badge: 'Top Choice'
    },
    {
      name: '1mg',
      logo: '💊',
      url: '#',
      rating: 4.9,
      reviews: '900+',
      delivery: '1-2 days',
      offer: '20% off on health supplements',
      badge: 'Trusted'
    },
    {
      name: 'PharmEasy',
      logo: '🏥',
      url: '#',
      rating: 4.6,
      reviews: '1,200+',
      delivery: '2-4 days',
      offer: 'Buy 2 Get 1 Free',
      badge: 'Popular'
    },
    {
      name: 'Netmeds',
      logo: '⚕️',
      url: '#',
      rating: 4.5,
      reviews: '800+',
      delivery: '1-3 days',
      offer: '10% cashback',
      badge: 'Verified'
    },
    {
      name: 'Apollo Pharmacy',
      logo: '🏪',
      url: '#',
      rating: 4.7,
      reviews: '1,500+',
      delivery: '1-2 days',
      offer: 'Same day delivery available',
      badge: 'Reliable'
    }
  ];

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
    'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad',
    'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik',
    'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar',
    'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Available Nationwide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get SuryAmrit™
              <span className="block text-primary-glow">Delivered to Your Doorstep</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Available on all major e-commerce platforms with fast delivery 
              across India. Order now and start your journey to better health.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">1-3 days across major cities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Authentic Product</h3>
              <p className="text-sm text-muted-foreground">100% genuine guarantee</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Customer service available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pan India</h3>
              <p className="text-sm text-muted-foreground">Available in 500+ cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Partners */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Preferred Platform
              </h2>
              <p className="text-lg text-muted-foreground">
                SuryAmrit™ is available on all leading e-commerce and pharmacy platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecommercePartners.map((partner, index) => (
                <Card key={index} className="border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300 group">
                  <CardHeader className="text-center pb-3">
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {partner.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{partner.rating}</span>
                      <span className="text-muted-foreground">({partner.reviews} reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Delivery:</span>
                      <span className="font-medium text-secondary">{partner.delivery}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Offer: </span>
                      <span className="font-medium text-primary">{partner.offer}</span>
                    </div>
                    <Button 
                      className="w-full group-hover:shadow-golden transition-all"
                      onClick={() => window.open(partner.url, '_blank')}
                    >
                      Shop Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Availability Map */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Available Across India
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver to 500+ cities across all states and union territories
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-primary/20 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      Major Cities We Serve
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {cities.map((city, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                        >
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-sm font-medium">{city}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        Don't see your city? Don't worry! We deliver to most pin codes across India. 
                        Check availability during checkout.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-primary">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <div>
                        <p className="font-medium">Customer Support</p>
                        <p className="text-sm text-muted-foreground">1800-123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-secondary" />
                      <div>
                        <p className="font-medium">Available</p>
                        <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 8 PM</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-primary text-white border-0 shadow-golden">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-3">Special Offer</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Free delivery on orders above ₹500. 
                      Subscribe and save 15% on every order.
                    </p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Subscribe & Save
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">100% Authentic</h3>
                    <p className="text-sm text-muted-foreground">
                      All products come with authenticity guarantee and proper packaging.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't let Vitamin D deficiency hold you back. Order SuryAmrit™ now 
              and experience the difference natural supplementation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-golden">
                Order Now from Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Compare All Platforms
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhereToBuy;