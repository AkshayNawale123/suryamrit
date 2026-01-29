import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  Sun,
  Heart,
  Shield,
  Mail,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Successfully Subscribed! 🎉",
      description: "You'll receive our latest health tips and articles in your inbox.",
    });

    setEmail("");
    setIsSubscribing(false);
  };

  const categories = ["All", "Vitamin D", "Nutrition", "Children Health", "Women Health", "Immunity", "Lifestyle"];

  const featuredArticles = [
    {
      id: 1,
      title: "The Silent Epidemic: Understanding Vitamin D Deficiency in India",
      excerpt:
        "Explore why over 80% of Indians are vitamin D deficient despite living in a sunny country, and what you can do about it.",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      category: "Vitamin D",
      readTime: "8 min read",
      image: "☀️",
      featured: true,
      tags: ["Deficiency", "India", "Health Crisis"],
    },
    {
      id: 2,
      title: "Plant-Based vs Animal-Derived Vitamin D3: What's the Difference?",
      excerpt:
        "A comprehensive comparison of lichen-derived D3 versus traditional animal sources, and why it matters for your health.",
      author: "Nutrition Team",
      date: "2024-01-10",
      category: "Nutrition",
      readTime: "6 min read",
      image: "🌱",
      featured: true,
      tags: ["Plant-based", "Comparison", "Science"],
    },
    {
      id: 3,
      title: "Building Strong Bones in Children: The Role of Vitamin D",
      excerpt:
        "Essential information for parents about ensuring optimal bone development in growing children through proper nutrition.",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-05",
      category: "Children Health",
      readTime: "7 min read",
      image: "👶",
      featured: true,
      tags: ["Children", "Bone Health", "Development"],
    },
  ];

  const recentArticles = [
    {
      id: 4,
      title: "Vitamin D and Immunity: Your First Line of Defense",
      excerpt: "How adequate vitamin D levels can boost your immune system and protect against infections.",
      author: "Health Team",
      date: "2024-01-03",
      category: "Immunity",
      readTime: "5 min read",
      image: "🛡️",
      featured: false,
      tags: ["Immunity", "Defense", "Health"],
    },
    {
      id: 5,
      title: "The Indian Diet and Vitamin D: Bridging Nutritional Gaps",
      excerpt: "Understanding how traditional Indian diets can be enhanced to support better vitamin D status.",
      author: "Nutritionist Team",
      date: "2024-01-01",
      category: "Nutrition",
      readTime: "6 min read",
      image: "🍛",
      featured: false,
      tags: ["Diet", "Indian Food", "Nutrition"],
    },
    {
      id: 6,
      title: "Pregnancy and Vitamin D: What Every Mother Should Know",
      excerpt: "Essential information about vitamin D requirements during pregnancy and breastfeeding.",
      author: "Dr. Meera Patel",
      date: "2023-12-28",
      category: "Women Health",
      readTime: "8 min read",
      image: "🤱",
      tags: ["Pregnancy", "Women", "Health"],
    },
    {
      id: 7,
      title: "Seasonal Affective Disorder and the Sunshine Vitamin",
      excerpt: "How vitamin D deficiency contributes to seasonal depression and mood disorders.",
      author: "Mental Health Team",
      date: "2023-12-25",
      category: "Lifestyle",
      readTime: "7 min read",
      image: "🌞",
      tags: ["Mental Health", "Mood", "Wellness"],
    },
    {
      id: 8,
      title: "Vitamin D Absorption: Getting the Most from Your Supplement",
      excerpt: "Tips and tricks to maximize vitamin D absorption and bioavailability for optimal health benefits.",
      author: "Science Team",
      date: "2023-12-20",
      category: "Nutrition",
      readTime: "5 min read",
      image: "💊",
      tags: ["Absorption", "Supplements", "Tips"],
    },
    {
      id: 9,
      title: "The Connection Between Vitamin D and Heart Health",
      excerpt: "Recent research on how vitamin D status affects cardiovascular health and disease prevention.",
      author: "Cardiology Team",
      date: "2023-12-15",
      category: "Heart Health",
      readTime: "9 min read",
      image: "❤️",
      tags: ["Heart", "Cardiovascular", "Prevention"],
    },
  ];

  const allArticles = [...featuredArticles, ...recentArticles];

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const healthTips = [
    {
      icon: "☀️",
      title: "Get Morning Sun",
      tip: "15-20 minutes of morning sunlight can help boost natural vitamin D production.",
    },
    {
      icon: "🥛",
      title: "Pair with Healthy Fats",
      tip: "Take vitamin D with meals containing healthy fats for better absorption.",
    },
    {
      icon: "🏃‍♂️",
      title: "Stay Active",
      tip: "Regular exercise helps your body utilize vitamin D more effectively.",
    },
    {
      icon: "🥗",
      title: "Eat Vitamin D Rich Foods",
      tip: "Include fatty fish, fortified foods, and mushrooms in your diet.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-muted-foreground border-white/30">Knowledge Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Guide to
              <span className="block text-primary-glow">Vitamin D & Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
              Discover evidence-based articles, expert insights, and practical tips to optimize your health and
              well-being naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "All" && !searchTerm && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Articles</h2>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {featuredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300 group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="text-4xl mb-4 text-center">{article.image}</div>
                      <div className="space-y-2">
                        <Badge className="bg-primary/10 text-primary border-primary/20">{article.category}</Badge>
                        <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{article.excerpt}</p>

                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Articles List */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
                </h2>

                <div className="space-y-8">
                  {filteredArticles.map((article) => (
                    <Card
                      key={article.id}
                      className="border-primary/20 shadow-soft hover:shadow-golden transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-6 flex items-center justify-center bg-gradient-subtle">
                          <div className="text-6xl">{article.image}</div>
                        </div>
                        <div className="md:w-3/4 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge className="bg-primary/10 text-primary border-primary/20">{article.category}</Badge>
                            {article.featured && (
                              <Badge className="bg-secondary/10 text-secondary border-secondary/20">Featured</Badge>
                            )}
                          </div>

                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-muted-foreground mb-4">{article.excerpt}</p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {article.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(article.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="group-hover:text-primary">
                              Read Article <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <Card className="text-center p-12 border-primary/20">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Articles Found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or browse different categories.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Health Tips */}
                <Card className="border-primary/20 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-primary" />
                      Daily Health Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {healthTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-2xl">{tip.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{tip.title}</h4>
                          <p className="text-xs text-muted-foreground">{tip.tip}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-gradient-primary text-white border-0 shadow-golden">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Get the latest health tips and articles delivered to your inbox.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                        disabled={isSubscribing}
                      />
                      <Button type="submit" variant="secondary" size="sm" className="w-full" disabled={isSubscribing}>
                        {isSubscribing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <Heart className="mr-2 h-4 w-4" />
                            Subscribe Now
                          </>
                        )}
                      </Button>
                    </form>
                    <p className="text-white/70 text-xs mt-3">No spam. Unsubscribe anytime.</p>
                  </CardContent>
                </Card>

                {/* Popular Categories */}
                <Card className="border-primary/20 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-secondary" />
                      Popular Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <Button
                          key={category}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-left"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Health Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Armed with knowledge, take the next step towards optimal health with SuryAmrit™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-golden">
                <Link to="/product">Discover SuryAmrit™</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/buy#contact">Ask Our Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
