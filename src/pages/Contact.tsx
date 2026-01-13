import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle, Clock, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consultationType: "general"
  });

  const whatsappNumbers = {
    support: "918800123456", // Business WhatsApp number for support
    consultation: "918800123457" // Business WhatsApp number for consultation  
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      consultationType: "general"
    });
  };

  const openWhatsApp = (type: 'support' | 'consultation') => {
    const number = whatsappNumbers[type];
    const message = type === 'support' 
      ? "Hi! I need support with SuryAmrit™ D3 supplement."
      : "Hi! I'd like to schedule a consultation about SuryAmrit™ D3 supplement.";
    
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about SuryAmrit™? Our experts are here to help with personalized guidance and support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={15}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                      Consultation Type
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="dosage">Dosage Guidance</option>
                      <option value="health">Health Consultation</option>
                      <option value="order">Order Support</option>
                      <option value="nutrition">Nutrition Advice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-golden transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & WhatsApp */}
            <div className="space-y-8">
              {/* WhatsApp Support Cards */}
              <div className="grid gap-6">
                <Card className="shadow-elegant border-primary/20 hover:shadow-golden transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">WhatsApp Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Get instant support for your queries about SuryAmrit™
                    </p>
                    <Button 
                      onClick={() => openWhatsApp('support')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat for Support
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant border-primary/20 hover:shadow-golden transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Expert Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      Book a consultation with our health experts
                    </p>
                    <Button 
                      onClick={() => openWhatsApp('consultation')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-muted-foreground">1800-123-4567</p>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-muted-foreground">info@ayurbramh.com</p>
                      <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Service Area</h3>
                      <p className="text-muted-foreground">Available PAN India</p>
                      <p className="text-sm text-muted-foreground">Free delivery nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Mon - Sat: 9 AM - 8 PM</p>
                      <p className="text-sm text-muted-foreground">WhatsApp support 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="shadow-elegant bg-gradient-subtle">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold">ISO Certified</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold">Expert Team</p>
                    </div>
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold">24/7 Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;