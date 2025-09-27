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
        <section className="hero-gradient section-padding">
          <div className="max-w-4xl mx-auto text-center">
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

        {/* Pricing */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your <span className="text-primary">SEO Package</span>
              </h2>
              <p className="text-lg text-gray-600">
                Select the perfect plan for your business needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg relative ${
                    pkg.popular ? 'border-2 border-primary' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button className={`w-full ${pkg.popular ? 'btn-gradient border-0' : ''}`}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-gradient flat-panels section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-text text-3xl md:text-4xl mb-6">
              Ready to Boost Your Rankings?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Get a free SEO audit and discover how we can improve your search visibility.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-lg">
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SEOService;