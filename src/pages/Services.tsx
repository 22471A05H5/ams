import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, Share2, MousePointer, Globe, PenTool, ArrowRight, CheckCircle } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Services = () => {
  const services = [
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic with our proven SEO strategies.",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
      features: [
        "Keyword Research & Analysis",
        "On-Page Optimization", 
        "Technical SEO Audits",
        "Link Building Strategies"
      ],
      startingPrice: "$299/month"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major platforms.",
      icon: Share2,
      color: "bg-green-100 text-green-600",
      features: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Social Advertising Campaigns"
      ],
      startingPrice: "$199/month"
    },
    {
      id: "ppc",
      title: "PPC Advertising",
      description: "Drive targeted traffic and maximize ROI with expertly managed campaigns.",
      icon: MousePointer,
      color: "bg-purple-100 text-purple-600",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "Campaign Optimization",
        "Conversion Tracking"
      ],
      startingPrice: "$399/month"
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      icon: Globe,
      color: "bg-orange-100 text-orange-600",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "Performance Optimization",
        "Mobile-First Approach"
      ],
      startingPrice: "$1,999 one-time"
    },
    {
      id: "content-marketing",
      title: "Content Marketing", 
      description: "Tell your brand story with compelling content that engages and converts.",
      icon: PenTool,
      color: "bg-pink-100 text-pink-600",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Video Content Creation",
        "Email Marketing Campaigns"
      ],
      startingPrice: "$249/month"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              Our <span className="text-white">Services</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Comprehensive digital marketing solutions designed to help your business 
              grow and succeed in today's competitive landscape.
            </p>
            <div className="mt-8 flex justify-center">
              <img
                src={teamPhoto}
                alt="Our team working on services"
                className="w-full max-w-3xl rounded-2xl shadow-2xl border-4 border-primary/60 object-cover"
              />
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
                  <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Starting at</div>
                        <div className="text-lg font-bold text-primary">{service.startingPrice}</div>
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

        {/* CTA Section */}
        <section className="hero-gradient flat-panels section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-text text-3xl md:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today for a free consultation and discover how we can help grow your business.
            </p>
            <Link to="/contact">
              <button className="btn-gradient">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;