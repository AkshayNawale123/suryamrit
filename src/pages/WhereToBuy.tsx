import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Truck, Shield, Clock, MapPin, Phone, Loader2, Mail, MessageCircle, Users, Award, ShoppingCart, Sun, ArrowRight, Heart, Sparkles, Leaf, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useCartStore } from '@/stores/cartStore';
import { CartItem } from '@/lib/shopify';
import { toast as sonnerToast } from 'sonner';

// 30-Day Promise Images
import goldenStandardImage from '@/assets/golden-standard-promise.jpg';
import honestAbsorptionImage from '@/assets/honest-absorption-promise.jpg';
import sunlightInsideImage from '@/assets/sunlight-inside-promise.jpg';

const WhereToBuy = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [addingTrial, setAddingTrial] = useState(false);
  const { toast } = useToast();
  const addItem = useCartStore(state => state.addItem);

  // Find trial variant (lowest price variant, typically ₹99)
  const getTrialVariant = (product: ShopifyProduct) => {
    const variants = product.node.variants.edges;
    if (variants.length === 0) return null;
    
    // Sort by price and get the cheapest (trial pack)
    const sortedVariants = [...variants].sort((a, b) => 
      parseFloat(a.node.price.amount) - parseFloat(b.node.price.amount)
    );
    return sortedVariants[0]?.node;
  };

  const handleTrialPackClick = () => {
    if (products.length === 0) return;
    
    const product = products[0];
    const trialVariant = getTrialVariant(product);
    
    if (!trialVariant || !trialVariant.availableForSale) {
      sonnerToast.error("Trial Pack unavailable", {
        description: "Sorry, the trial pack is currently out of stock.",
        position: "top-center",
      });
      return;
    }

    setAddingTrial(true);
    
    const cartItem: CartItem = {
      product,
      variantId: trialVariant.id,
      variantTitle: trialVariant.title,
      price: trialVariant.price,
      quantity: 1,
      selectedOptions: trialVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    setAddingTrial(false);
    
    sonnerToast.success("Trial Pack added! 🎉", {
      description: `₹${parseFloat(trialVariant.price.amount).toFixed(0)} Trial Pack added to your cart.`,
      position: "top-center",
    });
  };
  
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
      
      {/* Hero + Products Section - Above the Fold */}
      <section className="py-6 md:py-10 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              {/* Left: Marketing Copy */}
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  Available Nationwide • Free Delivery on ₹500+
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Get SuryAmrit™
                  <span className="block text-primary-glow">Delivered Today</span>
                </h1>
                <p className="text-lg text-white/90 mb-6 max-w-lg mx-auto lg:mx-0">
                  Order now and start your journey to better health with pure, natural Vitamin D3.
                </p>
                
                {/* Compact Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                    <Truck className="h-4 w-4" />
                    <span>1-3 Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                    <Shield className="h-4 w-4" />
                    <span>100% Authentic</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                    <Award className="h-4 w-4" />
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right: Featured Product with Trial Pack Badge */}
              <div className="flex justify-center">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12 px-8 bg-white/10 rounded-2xl backdrop-blur-sm min-h-[320px]">
                    <Loader2 className="h-10 w-10 animate-spin text-white mb-4" />
                    <span className="text-white/80">Loading products...</span>
                  </div>
                ) : products.length > 0 ? (
                  <div className="w-full max-w-sm relative">
                    {/* Citizen Trial Badge - Premium Gold/White Design */}
                    <button 
                      onClick={handleTrialPackClick}
                      disabled={addingTrial}
                      className="absolute -top-3 -right-3 z-10 hover:scale-105 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-2xl"
                      aria-label="Add Citizen Trial Pack to cart"
                    >
                      <div className="relative">
                        {/* Premium glow - Gold tones */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-amber-400 rounded-2xl blur-md opacity-60"></div>
                        <div className="relative bg-white text-foreground px-4 py-3 rounded-2xl shadow-lg border-2 border-primary/30 flex flex-col items-center min-w-[120px]">
                          <div className="text-[10px] text-muted-foreground line-through">MRP ₹399</div>
                          <div className="text-2xl font-bold text-primary flex items-center gap-1">
                            {addingTrial ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                              <>₹99 <ShoppingCart className="h-4 w-4" /></>
                            )}
                          </div>
                          <div className="text-xs font-medium text-secondary">Citizen Trial</div>
                          <div className="text-[9px] text-muted-foreground">Save ₹300</div>
                        </div>
                      </div>
                    </button>
                    
                    {/* Ribbon Badge - Refined styling */}
                    <div className="absolute -left-2 top-6 z-10">
                      <div className="bg-secondary text-white px-4 py-1.5 text-sm font-bold shadow-lg" 
                           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%)' }}>
                        ✦ LIMITED ACCESS
                      </div>
                    </div>
                    
                    <ProductCard product={products[0]} />
                  </div>
                ) : (
                  <div className="text-center py-12 px-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl mb-4">📦</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Coming Soon</h3>
                    <p className="text-white/80 text-sm">
                      Products are being added. Check back soon!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Trust Bar */}
      <section className="py-4 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Truck className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-foreground">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-foreground">Authentic Product</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-foreground">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-foreground">500+ Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Subsidy Explained Section */}
      <section className="py-10 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/30 shadow-golden overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 via-amber-100/50 to-primary/10 px-6 py-4 border-b border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sun className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                    Our Mission Subsidy
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6 md:p-8 space-y-6">
                {/* The Question */}
                <div className="text-center">
                  <p className="text-lg md:text-xl font-serif italic text-foreground">
                    "Why Does Premium Cost So Little?"
                  </p>
                </div>
                
                {/* The Story */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    SuryAmrit is crafted with <span className="text-foreground font-semibold">pure A2 Ghee</span> and 
                    authentic Ayurvedic formulation — ingredients that cost us <span className="text-primary font-bold">₹350+ per unit</span>.
                  </p>
                  <p>
                    But India's Vitamin D crisis affects <span className="text-foreground font-semibold">80% of our population</span>. 
                    We believe <span className="text-secondary font-semibold">health shouldn't be a luxury</span>.
                  </p>
                  <p className="font-medium text-foreground">
                    So we absorb most of the cost ourselves.
                  </p>
                </div>
                
                {/* Price Breakdown Visualization */}
                <div className="bg-muted/50 rounded-xl p-5 border border-primary/10">
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm md:text-base">
                    <div className="flex flex-col items-center px-4 py-2 bg-card rounded-lg border border-border">
                      <span className="text-muted-foreground text-xs">MRP</span>
                      <span className="text-lg font-bold text-foreground">₹399</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary hidden md:block" />
                    <span className="text-primary md:hidden">→</span>
                    <div className="flex flex-col items-center px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/30">
                      <span className="text-secondary text-xs font-medium">Our Subsidy</span>
                      <span className="text-lg font-bold text-secondary">-₹300</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary hidden md:block" />
                    <span className="text-primary md:hidden">→</span>
                    <div className="flex flex-col items-center px-4 py-2 bg-primary/10 rounded-lg border-2 border-primary/40">
                      <span className="text-primary text-xs font-medium">You Pay</span>
                      <span className="text-2xl font-bold text-primary">₹99</span>
                    </div>
                  </div>
                </div>
                
                {/* The Commitment */}
                <div className="text-center pt-2 border-t border-border">
                  <p className="text-foreground font-medium mb-2">
                    This is <span className="text-primary font-bold">not a discount</span>. It's our commitment to making premium health accessible.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm">
                    <Heart className="h-4 w-4 text-secondary" />
                    <span className="text-secondary font-semibold">Direct-to-Consumer Pilot Program</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 30-Day Promises Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-3 w-3 mr-1" />
                Risk-Free Experience
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">
                Our 30-Day Promises
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We stand behind every golden sphere. Experience the difference risk-free.
              </p>
            </div>

            {/* Promise Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Promise 1: The Golden Standard */}
              <Card className="border-2 border-primary/20 shadow-golden overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                  <img 
                    src={goldenStandardImage} 
                    alt="Glowing golden spherical pill against dark background with sun and ghee iconography"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Sun className="h-4 w-4 text-white" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      Logic & Education
                    </Badge>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    "30 Days to Fall in Love with the Habit"
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most Vitamin D is dry and forgotten. SuryAmrit is designed to be absorbed. We promise that our <span className="text-primary font-semibold">Golden Ghee Matrix</span> will be the easiest, tastiest, and most digestible D3 you have ever taken. If you don't love the 'Honest Chew' experience by Day 30, we will refund you—no questions asked.
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-sm text-secondary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">The Golden Standard Guarantee</span>
                  </div>
                </CardContent>
              </Card>

              {/* Promise 2: The Honest Absorption */}
              <Card className="border-2 border-secondary/20 shadow-sage overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-amber-50">
                  <img 
                    src={honestAbsorptionImage} 
                    alt="Split comparison of crumbling dry tablet versus pristine golden spherical pill"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <Badge variant="outline" className="border-secondary/30 text-secondary text-xs">
                      Science & Absorption
                    </Badge>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    "The 'No-Burp' 30-Day Guarantee"
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Vitamin D belongs in fat, not chalk. We promise our <span className="text-secondary font-semibold">Ghee-encapsulated D3</span> provides a smooth, gut-friendly experience without the acidity or burps caused by dry tablets. Experience the difference of Bio-Mimetic Absorption risk-free for 30 days.
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-sm text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Honest Absorption Promise</span>
                  </div>
                </CardContent>
              </Card>

              {/* Promise 3: The Sunlight Inside */}
              <Card className="border-2 border-amber-300/40 shadow-warm overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50">
                  <img 
                    src={sunlightInsideImage} 
                    alt="Golden spherical pill bathed in sunlight with organic woven fabric texture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-white" />
                    </div>
                    <Badge variant="outline" className="border-amber-400/40 text-amber-700 text-xs">
                      Lifestyle & Ayurveda
                    </Badge>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    "Your Daily Ray of Sun, Guaranteed"
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pollution blocks the sun; we put it back in. We promise SuryAmrit fits seamlessly into your life—<span className="text-amber-700 font-semibold">no water needed, just one chew after a meal</span>. If you don't feel the ease of adding this Master Key to your daily routine within 30 days, it's on us.
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-sm text-amber-700">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Sunlight Inside Promise</span>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">
                  All promises backed by our <span className="text-primary font-bold">100% Money-Back Guarantee</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products Section - Only show if more than 1 product */}
      {!loading && products.length > 1 && (
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  More Products
                </h2>
                <p className="text-muted-foreground">
                  Explore our complete range of health supplements
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.slice(1).map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
