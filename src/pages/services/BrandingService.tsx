import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Palette, CheckCircle, Lightbulb, Target, MessageCircle, Phone, Star, Zap, Sparkles, PenTool, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/branddesign.jpg";

const BrandingService = () => {

const capabilities = [
  "Brand strategy and positioning",
  "Logo identity and brand guidelines",
  "Creative content and campaign concepts",
  "Social media creatives and templates",
  "Pitch decks and presentation design",
  "Ads, banners, posters, and collateral",
];

  const unique = [
    "Story-first branding: every asset supports a clear narrative",
    "Systematized design kits for speed across platforms",
    "Performance-friendly creatives tested for CTR and CVR",
    "Tight feedback loops with rapid iterations",
  ];
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-gradient flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-24 pb-20 relative z-10">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="hero-title text-4xl md:text-6xl mb-4">
                Branding & <span className="text-white">Creative Designs</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Build a distinct brand and ship scroll-stopping creatives that convert 
                across all platforms and touchpoints with compelling visual storytelling.
              </p>
            </div>

            {/* CTA Button with Icons (left and right of button) */}
            <div className="mb-12 flex items-center justify-center gap-4">
              <Star className="h-6 w-6 text-primary" />
              <a href="/contact">
                <Button size="lg" className="hero-cta text-sm md:text-base">
                  Let's Elevate Together →
                </Button>
              </a>
              <Zap className="h-7 w-7 text-primary" />
            </div>

            {/* Framed media matching the design */}
            <div className="service-hero-wrap branding-effect">
              <div className="service-hero-frame">
                <img src={heroImg} alt="Branding Service" className="w-full h-auto" />
              </div>
              <div className="hero-media-shadow" />
            </div>
          </div>
        </section>

        {/* Experts Ready To Answer */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="expert-cta rounded-2xl p-8 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Experts Ready To Answer</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We understand you may have questions. Our team of specialists is ready to provide clear and informative answers to all your inquiries.
              </p>
              <Link to="/contact">
                <Button className="btn-gradient border-0 px-8 py-6 rounded-full font-semibold">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Turn Vision Into <span className="text-primary">Visual Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From strategic positioning to daily creative output, we design brand systems that
                look great and perform, so your campaigns stay consistent and effective.
              </p>

              <div className="space-y-3">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl neon-card">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What AMS ElevateX Uniquely Provides</h3>
              <div className="space-y-6">
                {unique.map((text, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      {i === 0 ? <Sparkles className="h-6 w-6 text-primary" /> : i === 1 ? <PenTool className="h-6 w-6 text-primary" /> : i === 2 ? <Image className="h-6 w-6 text-primary" /> : <Sparkles className="h-6 w-6 text-primary" />}
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Branding & Creative FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "What brand assets do you deliver?", a: "Logo, color palette, typography, brand guidelines, social templates, and campaign assets as needed." },
                { q: "Can you refresh an existing brand?", a: "Yes—we run a brand audit and provide a modernization plan while preserving equity where it matters." },
                { q: "Do you work with our in-house team?", a: "Absolutely. We create design kits and processes to help in-house teams ship faster and consistently." },
                { q: "How do you ensure creatives perform?", a: "We use story-first messaging and test hooks, formats, and offers to improve CTR and conversions." }
              ].map((item, i) => (
                <details key={i} className="bg-gray-50 rounded-xl p-5 neon-card">
                  <summary className="font-semibold text-gray-900 cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandingService;
