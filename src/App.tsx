import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import About from "./pages/About";
import WhereToBuy from "./pages/WhereToBuy";
import Endorsements from "./pages/Endorsements";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Partners from "./pages/Partners";
import SelfAssessment from "./pages/SelfAssessment";
import NotFound from "./pages/NotFound";
import StickyOrderButton from "./components/StickyOrderButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <StickyOrderButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<WhereToBuy />} />
          <Route path="/endorsements" element={<Endorsements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
