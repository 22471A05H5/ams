import { Link } from "react-router-dom";
import { Search, Share2, MousePointer, Globe, PenTool, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic with our proven SEO strategies and techniques.",
      icon: Search,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "social-media",
      title: "Social Media Marketing", 
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      icon: Share2,
      color: "bg-green-100 text-green-600"
    },
    {
      id: "ppc",
      title: "PPC Advertising",
      description: "Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.",
      icon: MousePointer,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      icon: Globe,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: "content-marketing",
      title: "Content Marketing",
      description: "Tell your brand story with compelling content that engages and converts your audience.",
      icon: PenTool,
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Offer A Wide Range Of{" "}
            <span className="text-primary">Design Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive digital marketing solutions are designed to help your business 
            grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card group cursor-pointer"
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="btn-gradient">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;