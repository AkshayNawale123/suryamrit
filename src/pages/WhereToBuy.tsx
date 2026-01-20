import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Shield, Clock, MapPin, Phone, Loader2, Mail, MessageCircle, Users, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
const WhereToBuy = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consultationType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '', consultationType: '' });
  };

  const openWhatsApp = (type: 'support' | 'consultation') => {
    const messages = {
      support: "Hello! I need help with SuryAmrit product inquiry.",
      consultation: "Hello! I would like to book a consultation with your health expert."
    };
    const encodedMessage = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/918001234567?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProducts(20);
      setProducts(fetchedProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

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
              Shop directly from our store with fast delivery 
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

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop Our Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Order directly and get authentic SuryAmrit™ delivered to your doorstep
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground">Loading products...</span>
              </div>
            ) : products.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-xl">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Products are being added to the store. Check back soon or contact us for more information.
                </p>
              </div>
            )}
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

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Before You Order?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experts are ready to answer your questions about SuryAmrit™
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-secondary/20 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consultationType">Inquiry Type</Label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, consultationType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="product">Product Question</SelectItem>
                          <SelectItem value="order">Order Support</SelectItem>
                          <SelectItem value="consultation">Health Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Options */}
            <div className="space-y-6">
              {/* WhatsApp Support */}
              <Card className="border-green-200 bg-green-50/50 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp Support</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get instant answers to your product queries
                      </p>
                      <Button
                        onClick={() => openWhatsApp('support')}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Consultation */}
              <Card className="border-blue-200 bg-blue-50/50 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">Expert Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Book a free consultation with our health experts
                      </p>
                      <Button
                        onClick={() => openWhatsApp('consultation')}
                        variant="outline"
                        className="border-blue-500 text-blue-600 hover:bg-blue-50"
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Book Consultation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-secondary/20 shadow-soft">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">1800-123-4567 (Toll Free)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@ayurbramh.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon - Sat, 9 AM - 8 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border border-secondary/20">
                  <Award className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-medium">ISO Certified</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-secondary/20">
                  <Users className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-medium">Expert Team</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-secondary/20">
                  <Clock className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-medium">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhereToBuy;
