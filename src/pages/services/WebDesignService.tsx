import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, CheckCircle, Code, Smartphone, MessageCircle, Phone, Star, Zap, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/web.webp";

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
        <section className="hero-gradient flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-24 pb-20 relative z-10">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="hero-title text-4xl md:text-6xl mb-4">
                Web <span className="text-white">Development</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Fast, responsive websites engineered to convert and scale 
                with modern design, seamless user experience, and optimized performance.
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
            <div className="service-hero-wrap web-design-effect">
              <div className="service-hero-frame">
                <img src={heroImg} alt="Web Design Service" className="w-full h-auto" />
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
              
              <div className="bg-gray-50 p-8 rounded-2xl neon-card">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What AMS ElevateX Uniquely Provides</h3>
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

        

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Web Development FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Do you work with WordPress, Shopify, or custom stacks?", a: "Yes. We build with WordPress, Shopify, custom React stacks, and recommend the best fit for your goals." },
                { q: "Will my website be fast and SEO-friendly?", a: "We optimize Core Web Vitals, image sizes, caching, and use semantic HTML for improved SEO." },
                { q: "Do you provide content and images?", a: "We can collaborate on copywriting, source images, and design visuals if you need full support." },
                { q: "What about maintenance?", a: "We offer ongoing maintenance, backups, updates, and performance monitoring based on your needs." }
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

export default WebDesignService;