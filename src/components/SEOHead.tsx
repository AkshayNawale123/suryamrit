import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords, canonical }) => {
  const location = useLocation();

  // Page-specific SEO data
  const pageData: { [key: string]: { title: string; description: string; keywords: string } } = {
    '/': {
      title: 'SuryAmrit™ - Natural Vitamin D3 Supplement | Combat India\'s D3 Deficiency Crisis',
      description: 'SuryAmrit™ offers plant-based Vitamin D3 in ghee base. Combat India\'s 80% D3 deficiency with our lichen-derived, vegetarian supplement. Order now!',
      keywords: 'vitamin d3, supplement, india, deficiency, plant based, lichen, ghee, natural, vegetarian, immunity, bone health'
    },
    '/product': {
      title: 'SuryAmrit™ Product - 600 IU Lichen-Based Vitamin D3 with Ghee Base',
      description: 'Discover SuryAmrit™ - India\'s first lichen-based Vitamin D3 supplement in traditional ghee base. 600 IU daily dose for optimal health.',
      keywords: 'suryamrit, vitamin d3 product, lichen based, ghee base, 600 iu, daily dose, soft chewable, indian supplement'
    },
    '/about': {
      title: 'About SuryAmrit™ - Our Mission to Combat Vitamin D Deficiency in India',
      description: 'Learn about SuryAmrit™\'s mission to solve India\'s Vitamin D crisis with natural, plant-based solutions. Discover our story and values.',
      keywords: 'about suryamrit, company mission, vitamin d deficiency india, natural health, plant based supplements, ayurbramh'
    },
    '/where-to-buy': {
      title: 'Where to Buy SuryAmrit™ - Available on Amazon, Flipkart & Leading Platforms',
      description: 'Buy SuryAmrit™ on Amazon, Flipkart, 1mg, PharmEasy & more. Fast delivery across 500+ Indian cities. Authentic products guaranteed.',
      keywords: 'buy suryamrit, amazon, flipkart, 1mg, pharmeasy, online purchase, delivery india, authentic vitamin d3'
    },
    '/endorsements': {
      title: 'SuryAmrit™ Endorsements - Doctor Recommendations & Customer Reviews',
      description: 'See what healthcare professionals and customers say about SuryAmrit™. Expert endorsements, success stories, and real results.',
      keywords: 'suryamrit reviews, doctor recommendations, customer testimonials, healthcare professional endorsements, success stories'
    },
    '/blog': {
      title: 'Vitamin D Health Blog - Expert Articles & Wellness Tips | SuryAmrit™',
      description: 'Read expert articles on Vitamin D health, nutrition tips, and wellness advice. Evidence-based content for optimal health.',
      keywords: 'vitamin d blog, health articles, nutrition tips, wellness advice, vitamin d deficiency, immunity, bone health'
    },
    '/contact': {
      title: 'Contact SuryAmrit™ - Get Expert Health Advice & Customer Support',
      description: 'Contact SuryAmrit™ for personalized health advice, product information, and customer support. Our experts are here to help.',
      keywords: 'contact suryamrit, customer support, health advice, product information, expert consultation'
    }
  };

  const currentPage = pageData[location.pathname] || pageData['/'];
  
  const pageTitle = title || currentPage.title;
  const pageDescription = description || currentPage.description;
  const pageKeywords = keywords || currentPage.keywords;
  const pageCanonical = canonical || `https://suryamrit.com${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = pageTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', pageKeywords);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageCanonical);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', pageTitle);
    updateOGTag('og:description', pageDescription);
    updateOGTag('og:url', pageCanonical);
    updateOGTag('og:type', 'website');
    updateOGTag('og:site_name', 'SuryAmrit™');

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', pageTitle);
    updateTwitterTag('twitter:description', pageDescription);

  }, [pageTitle, pageDescription, pageKeywords, pageCanonical, location.pathname]);

  return null;
};

export default SEOHead;