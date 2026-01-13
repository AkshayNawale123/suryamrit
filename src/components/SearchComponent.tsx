import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'SuryAmrit™ Product Information',
      description: 'Learn about our lichen-based Vitamin D3 supplement with ghee base',
      url: '/product',
      category: 'Product'
    },
    {
      id: '2',
      title: 'About Our Company',
      description: 'Discover our mission to combat Vitamin D deficiency in India',
      url: '/about',
      category: 'Company'
    },
    {
      id: '3',
      title: 'Where to Buy SuryAmrit™',
      description: 'Find SuryAmrit™ on leading e-commerce platforms with fast delivery',
      url: '/where-to-buy',
      category: 'Purchase'
    },
    {
      id: '4',
      title: 'Expert Endorsements',
      description: 'See what healthcare professionals say about SuryAmrit™',
      url: '/endorsements',
      category: 'Reviews'
    },
    {
      id: '5',
      title: 'Vitamin D Deficiency in India',
      description: 'Understanding the silent epidemic affecting 80% of Indians',
      url: '/blog',
      category: 'Health'
    },
    {
      id: '6',
      title: 'Plant-Based vs Animal-Derived D3',
      description: 'Compare lichen-derived D3 versus traditional animal sources',
      url: '/blog',
      category: 'Education'
    },
    {
      id: '7',
      title: 'Children and Vitamin D',
      description: 'Essential information about vitamin D for growing children',
      url: '/blog',
      category: 'Health'
    },
    {
      id: '8',
      title: 'Contact Our Health Experts',
      description: 'Get in touch with our team for personalized advice',
      url: '/contact',
      category: 'Support'
    },
    {
      id: '9',
      title: 'Immunity and Vitamin D',
      description: 'How vitamin D strengthens your immune system',
      url: '/blog',
      category: 'Health'
    },
    {
      id: '10',
      title: 'Dosage Guidelines',
      description: 'Clinical dosage recommendations for different age groups',
      url: '/product',
      category: 'Guidelines'
    }
  ];

  useEffect(() => {
    if (searchTerm.length > 2) {
      setIsSearching(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [searchTerm]);

  const handleResultClick = (url: string) => {
    navigate(url);
    onClose();
    setSearchTerm('');
    setResults([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-background rounded-lg shadow-golden w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products, articles, health topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-10 text-lg"
                autoFocus
              />
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {searchTerm.length <= 2 && (
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Start typing to search for products, articles, and health information...
              </p>
            </div>
          )}

          {isSearching && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Searching...</p>
            </div>
          )}

          {searchTerm.length > 2 && !isSearching && results.length === 0 && (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-muted-foreground mb-2">No results found for "{searchTerm}"</p>
              <p className="text-sm text-muted-foreground">
                Try different keywords or browse our main sections
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </p>
              {results.map((result) => (
                <Card
                  key={result.id}
                  className="hover:shadow-soft transition-all duration-200 cursor-pointer border-primary/10 hover:border-primary/30"
                  onClick={() => handleResultClick(result.url)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary">
                            {result.title}
                          </h3>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground ml-4 mt-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="p-4 border-t border-border bg-muted/50">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Press ESC to close</span>
              <span>Click any result to navigate</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;