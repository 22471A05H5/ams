import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SEOService from "./pages/services/SEOService";
import SocialMediaService from "./pages/services/SocialMediaService";
import PPCService from "./pages/services/PPCService";
import WebDesignService from "./pages/services/WebDesignService";
import ContentMarketingService from "./pages/services/ContentMarketingService";
import NotFound from "./pages/NotFound";
import FloatingContactButtons from "./components/FloatingContactButtons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global floating contact actions */}
        <FloatingContactButtons />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SEOService />} />
          <Route path="/services/social-media" element={<SocialMediaService />} />
          <Route path="/services/ppc" element={<PPCService />} />
          <Route path="/services/web-design" element={<WebDesignService />} />
          <Route path="/services/content-marketing" element={<ContentMarketingService />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
