import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, CheckCircle, ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import seoImg from "@/assets/seo.webp";
import { Link } from "react-router-dom";

const SEOService = () => {
  const features = [
    "Comprehensive SEO Audit",
    "Keyword Research & Analysis",
    "On-Page Optimization",
    "Technical SEO Improvements",
    "Link Building Strategies",
    "Local SEO Optimization",
    "Content Optimization",
    "Performance Monitoring & Reporting"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Organic Traffic",
      description: "Drive more qualified visitors to your website through improved search rankings."
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Optimize your website for both search engines and user satisfaction."
    },
    {
      icon: Target,
      title: "Higher Conversion Rates",
      description: "Attract users who are actively searching for your products or services."
    }
  ];

  const packages = [
    {
      name: "Basic SEO",
      price: "$299/month",
      features: [
        "SEO Audit & Strategy",
        "Keyword Research (10 keywords)",
        "On-Page Optimization",
        "Monthly Progress Report"
      ]
    },
    {
      name: "Advanced SEO",
      price: "$599/month",
      features: [
        "Everything in Basic",
        "Technical SEO Improvements",
        "Link Building Campaign",
        "Content Optimization",
        "Local SEO (if applicable)",
        "Bi-weekly Progress Reports"
      ],
      popular: true
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      features: [
        "Everything in Advanced",
        "Dedicated SEO Specialist", 
        "Advanced Analytics Setup",
        "Competitor Analysis",
        "Custom Strategy Development",
        "Weekly Progress Reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-24 pb-20 relative z-10">
            <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              SEO <span className="text-white">Optimization</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Boost your search rankings and organic traffic with our proven SEO strategies. 
              We help businesses dominate search results and drive qualified leads.
            </p>
            {/* Framed hero media */}
            <div className="hero-media-wrap mt-8">
              <div className="hero-media-frame">
                <img src={seoImg} alt="SEO service" className="w-full h-auto" />
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

        {/* Service Overview */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Dominate Search Results & <span className="text-primary">Drive Growth</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive SEO services are designed to improve your website's visibility, 
                  drive organic traffic, and increase conversions. We use proven strategies and 
                  stay up-to-date with the latest algorithm changes.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Our SEO Services?</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-lg mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">SEO FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "How long does SEO take to show results?", a: "Typically 8–12 weeks for noticeable ranking movement, faster if technical issues are small and content is strong." },
                { q: "Do you provide content for SEO?", a: "Yes. We create SEO-optimized content and update existing pages to improve topical depth and intent match." },
                { q: "What about technical SEO?", a: "We fix crawl, indexation, speed, schema, and internal linking issues as part of our roadmap." },
                { q: "Do you do local SEO?", a: "Yes. We optimize Google Business Profile, NAP consistency, and local landing pages for location-based queries." }
              ].map((item, i) => (
                <details key={i} className="bg-gray-50 rounded-xl p-5">
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

export default SEOService;