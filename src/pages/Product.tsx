import Header from "@/components/Header";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import Hero from "@/components/Hero";
import VitaminPathway from "@/components/VitaminPathway";
import BenefitsSection from "@/components/BenefitsSection";
import ProductFeatures from "@/components/ProductFeatures";
import DosageSection from "@/components/DosageSection";
import Footer from "@/components/Footer";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreadcrumbNavigation />
      <Hero />
      <VitaminPathway />
      <BenefitsSection />
      <ProductFeatures />
      <DosageSection />
      <Footer />
    </div>
  );
};

export default Product;
