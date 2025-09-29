import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, CheckCircle, TrendingUp, BarChart3, MessageCircle, Phone, Star, Zap, BarChart2, MousePointer, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/performance marketing.jpg";

const PerformanceMarketingService = () => {
  const pillars = [
    "Meta Ads (Facebook/Instagram) — full-funnel setup",
    "Google Ads — Search, Performance Max, YouTube",
    "SEO — technical, on-page, and content SEO",
    "Conversion tracking & analytics",
    "CRO & landing page optimization",
    "Weekly optimization sprints",
  ];

  const unique = [
    "Unified performance framework: SEO + Ads working together",
    "Revenue-focused reporting (ROAS, CAC, LTV) instead of vanity metrics",
    "Rapid testing playbooks for creatives, audiences, and offers",
    "Battle-tested funnels with pixel and server-side tracking",
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
                Performance Marketing <span className="text-white">(Meta Ads, Google Ads & SEO)</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Unified paid + organic system that scales profitably with data-driven strategies 
                and continuous optimization across all channels for maximum ROI.
              </p>
            </div>

            {/* CTA Button with Icons (left and right of button) */}
            <div className="mb-12 flex items-center justify-center gap-4">
              <Star className="h-6 w-6 text-primary" />
              <Link to="/contact">
                <Button size="lg" className="hero-cta text-sm md:text-base">
                  Let's Elevate Together →
                </Button>
              </Link>
              <Zap className="h-7 w-7 text-primary" />
            </div>

            {/* Framed media matching the design */}
            <div className="service-hero-wrap performance-effect">
              <div className="service-hero-frame">
                <img src={heroImg} alt="Performance Marketing Service" className="w-full h-auto" />
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
                We understand you may have questions. Our team of specialists is ready to provide clear and
                informative answers to all your inquiries.
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
                Scale Smart with <span className="text-primary">Paid + Organic</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine high-intent SEO traffic with precision-targeted ads across Meta and Google
                to create compounding growth. Clear tracking ensures every dollar is accountable.
              </p>

              <div className="space-y-3">
                {pillars.map((item, i) => (
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
                      {i === 0 ? <BarChart2 className="h-6 w-6 text-primary" /> : i === 1 ? <Target className="h-6 w-6 text-primary" /> : i === 2 ? <MousePointer className="h-6 w-6 text-primary" /> : <Search className="h-6 w-6 text-primary" />}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Performance Marketing FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "What channels do you manage?", a: "Meta (Facebook/Instagram), Google (Search, PMax, YouTube), and supporting SEO to capture high-intent demand." },
                { q: "How do you track performance?", a: "We implement pixel + server-side tracking, define conversions, and report on ROAS, CAC, LTV, and SQLs." },
                { q: "Do you create ad creatives and landing pages?", a: "Yes. We produce creatives, run rapid A/B tests, and optimize landing pages for higher conversion rates." },
                { q: "When can we expect results?", a: "Quick learnings in 2–4 weeks, meaningful scale by 6–12 weeks depending on budget and baseline." }
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

export default PerformanceMarketingService;
