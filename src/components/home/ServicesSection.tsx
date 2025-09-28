import { Link } from "react-router-dom";
import { Share2, Users, Target, Globe, Palette, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "social-media",
      title: "Social Media Content Creation & Handling",
      description: "Plan, create, and manage daily content that grows your audience and engagement.",
      icon: Share2,
      color: "bg-green-100 text-green-600"
    },
    {
      id: "leads",
      title: "Leads Generation & Management",
      description: "Capture, qualify, and route leads to booked calls with smart automations.",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "performance",
      title: "Performance Marketing (Meta Ads, Google Ads & SEO)",
      description: "Unified paid + organic system that scales profitably with data.",
      icon: Target,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: "branding",
      title: "Branding & Creative Designs",
      description: "Build a distinct brand and ship scroll-stopping creatives that convert.",
      icon: Palette,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: "web-design",
      title: "Web Development",
      description: "Fast, responsive websites engineered to convert and scale.",
      icon: Globe,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services <span className="text-primary">We Provide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full-funnel solutions designed for consistent growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card group cursor-pointer bg-white p-6 rounded-2xl shadow-lg neon-card"
              >
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 neon-icon`}>
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