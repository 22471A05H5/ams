import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Share2, Users, Target, Globe, Palette, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";
import heroImg from "@/assets/1.webp";

const Services = () => {
  const services = [
    {
      id: "social-media",
      title: "Social Media Content Creation & Handling",
      description: "Plan, create, and manage daily social content that grows your audience and engagement.",
      icon: Share2,
      color: "bg-green-100 text-green-600",
      features: [
        "Content Calendar & Copy",
        "Posts, Reels & Stories",
        "Community Management",
        "Monthly Reporting"
      ],
      startingPrice: "$199/month"
    },
    {
      id: "leads",
      title: "Leads Generation & Management",
      description: "Capture, qualify, and route leads with automations that turn interest into booked calls.",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      features: [
        "Landing Pages & Forms",
        "CRM & Pipeline Setup",
        "Automated Follow-ups",
        "Attribution & Reporting"
      ],
      startingPrice: "$299/month"
    },
    {
      id: "performance",
      title: "Performance Marketing (Meta Ads, Google Ads & SEO)",
      description: "Full-funnel growth with paid + organic working together to scale profitably.",
      icon: Target,
      color: "bg-purple-100 text-purple-600",
      features: [
        "Meta & Google Ads",
        "SEO Foundation",
        "Conversion Tracking",
        "Landing Page CRO"
      ],
      startingPrice: "$399/month"
    },
    {
      id: "branding",
      title: "Branding & Creative Designs",
      description: "Build a distinct brand and ship high-performing creatives across channels.",
      icon: Palette,
      color: "bg-pink-100 text-pink-600",
      features: [
        "Logo & Guidelines",
        "Campaign Creatives",
        "Social Templates",
        "Presentation Design"
      ],
      startingPrice: "Custom"
    },
    {
      id: "web-design",
      title: "Web Development",
      description: "Fast, responsive websites engineered to convert and scale.",
      icon: Globe,
      color: "bg-orange-100 text-orange-600",
      features: [
        "Custom Builds",
        "E-commerce",
        "Performance Optimization",
        "SEO-friendly Structure"
      ],
      startingPrice: "$1,999 one-time"
    }
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
                Our <span className="text-white">Services</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Comprehensive digital marketing solutions designed to help your business 
                grow and succeed in today's competitive landscape. From social media management 
                to performance marketing, we deliver results that drive sustainable growth.
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
            <div className="hero-media-wrap">
              <div className="hero-media-frame">
                <img src={heroImg} alt="Homepage showcase" className="w-full h-auto" />
              </div>
              <div className="hero-media-shadow" />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                
                return (
                  <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 neon-card">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center neon-icon`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure your digital marketing success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your business, goals, and target audience" },
                { step: "02", title: "Strategy", description: "We develop a customized marketing strategy" },
                { step: "03", title: "Implementation", description: "We execute campaigns with precision and care" },
                { step: "04", title: "Optimization", description: "We continuously improve based on data insights" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;