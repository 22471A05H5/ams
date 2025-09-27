import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, CheckCircle, ArrowRight, Smartphone, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import webImg from "@/assets/web.webp";
import { Link } from "react-router-dom";

const WebDesignService = () => {
  const services = [
    "Custom Website Design",
    "Responsive Mobile Design", 
    "E-commerce Development",
    "WordPress Development",
    "Performance Optimization",
    "SEO-Friendly Structure",
    "Content Management Systems",
    "Ongoing Maintenance & Support"
  ];

  const benefits = [
    {
      icon: Monitor,
      title: "Professional Design",
      description: "Create a stunning first impression with modern, professional website designs that reflect your brand."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "Ensure your website looks perfect and functions flawlessly on all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimize loading speeds and user experience to keep visitors engaged and improve search rankings."
    }
  ];

  const packages = [
    {
      name: "Basic Website",
      price: "$1,999",
      type: "One-time",
      features: [
        "5-Page Custom Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Forms",
        "Social Media Integration",
        "3 Months Support"
      ]
    },
    {
      name: "Business Website",
      price: "$3,999",
      type: "One-time",
      features: [
        "10-Page Custom Website",
        "Advanced Responsive Design",
        "Content Management System",
        "SEO Optimization",
        "E-commerce Ready (up to 50 products)",
        "Analytics Setup",
        "6 Months Support",
        "Training Sessions"
      ],
      popular: true
    },
    {
      name: "E-commerce Store",
      price: "$6,999",
      type: "One-time",
      features: [
        "Unlimited Pages",
        "Full E-commerce Functionality",
        "Payment Gateway Integration",
        "Inventory Management",
        "Advanced SEO Setup",
        "Performance Optimization",
        "12 Months Support",
        "Staff Training",
        "Marketing Tools Integration"
      ]
    }
  ];

  const technologies = [
    "HTML5 & CSS3", "JavaScript", "React", "WordPress", "Shopify", "WooCommerce"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              Web Design & <span className="text-yellow-300">Development</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Create stunning, responsive websites that convert visitors into customers. 
              Our expert designers and developers build modern, fast, and SEO-friendly websites.
            </p>
            {/* Framed hero media */}
            <div className="hero-media-wrap mt-8">
              <div className="hero-media-frame">
                <img src={webImg} alt="Web design and development" className="w-full h-auto" />
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
                  Build Websites That <span className="text-primary">Convert & Perform</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our web design and development services combine beautiful aesthetics with 
                  powerful functionality. We create websites that not only look amazing but 
                  also deliver exceptional user experiences and drive business results.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {technologies.map((tech, index) => (
                      <div key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center font-medium text-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {services.slice(0, 4).map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Our Web Design Services?</h3>
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

        {/* Features */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Web <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to establish a powerful online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Design <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-gray-600">
                From concept to launch, we follow a proven process to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We understand your goals, target audience, and project requirements."
                },
                {
                  step: "02",
                  title: "Design & Prototyping", 
                  description: "We create wireframes and visual designs for your approval."
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "We build your website with clean code and test thoroughly."
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description: "We launch your site and provide ongoing maintenance support."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Website <span className="text-primary">Packages</span>
              </h2>
              <p className="text-lg text-gray-600">
                Professional website solutions for every business size and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg relative border-2 ${
                    pkg.popular ? 'border-primary' : 'border-gray-100'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                    <div className="text-gray-600 text-sm">{pkg.type}</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
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

            <div className="text-center mt-12 p-6 bg-white rounded-xl border-2 border-gray-100">
              <p className="text-gray-600">
                <strong>Custom Solutions Available:</strong> Need something more specific? 
                We offer custom web development solutions tailored to your unique requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-gradient section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-text text-3xl md:text-4xl mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's create a website that represents your brand beautifully and drives business growth.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-lg">
                Start Your Project
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

export default WebDesignService;