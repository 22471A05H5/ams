import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PenTool, CheckCircle, ArrowRight, FileText, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import contentImg from "@/assets/content.webp";
import { Link } from "react-router-dom";

const ContentMarketingService = () => {
  const contentTypes = [
    "Blog Articles", "Social Media Content", "Email Newsletters", "Video Scripts", "Infographics", "Whitepapers"
  ];

  const services = [
    "Content Strategy Development",
    "Blog Writing & Management",
    "Social Media Content Creation",
    "Email Marketing Campaigns", 
    "Video Content Production",
    "Infographic Design",
    "Content Calendar Planning",
    "Performance Analytics & Reporting"
  ];

  const benefits = [
    {
      icon: FileText,
      title: "Quality Content",
      description: "Create engaging, valuable content that resonates with your audience and builds trust."
    },
    {
      icon: Users,
      title: "Audience Engagement",
      description: "Connect with your target audience through compelling storytelling and relevant messaging."
    },
    {
      icon: TrendingUp,
      title: "Brand Authority",
      description: "Establish your brand as an industry leader through consistent, high-quality content."
    }
  ];

  const packages = [
    {
      name: "Content Starter",
      price: "$249/month",
      features: [
        "4 Blog Posts per month",
        "8 Social Media Posts",
        "Basic Content Strategy",
        "Monthly Performance Report",
        "Email Newsletter Setup"
      ]
    },
    {
      name: "Content Pro",
      price: "$499/month",
      features: [
        "8 Blog Posts per month",
        "20 Social Media Posts",
        "Advanced Content Strategy",
        "Email Marketing Campaigns",
        "Video Content (2 per month)",
        "Bi-weekly Performance Reports",
        "Content Calendar Management"
      ],
      popular: true
    },
    {
      name: "Content Enterprise",
      price: "$999/month",
      features: [
        "16 Blog Posts per month",
        "40 Social Media Posts",
        "Comprehensive Content Strategy",
        "Advanced Email Automation",
        "Video Content (4 per month)",
        "Infographic Design (2 per month)",
        "Weekly Performance Reports",
        "Dedicated Content Manager",
        "Influencer Outreach"
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
              <PenTool className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              Content <span className="text-yellow-300">Marketing</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Tell your brand story with compelling content that engages your audience, 
              builds trust, and drives conversions across all marketing channels.
            </p>
            {/* Framed hero media */}
            <div className="hero-media-wrap mt-8">
              <div className="hero-media-frame">
                <img src={contentImg} alt="Content marketing" className="w-full h-auto" />
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
                  Create Content That <span className="text-primary">Connects & Converts</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our content marketing experts craft strategic, high-quality content that 
                  tells your brand story, engages your target audience, and drives meaningful 
                  business results across all digital channels.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Types We Create:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {contentTypes.map((type, index) => (
                      <div key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center font-medium">
                        {type}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Content Marketing Works</h3>
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

        {/* Content Strategy */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Content <span className="text-primary">Strategy</span>
              </h2>
              <p className="text-lg text-gray-600">
                We follow a data-driven approach to create content that performs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Research & Planning",
                  description: "We analyze your audience, competitors, and industry trends to develop a winning content strategy."
                },
                {
                  step: "02",
                  title: "Content Creation",
                  description: "Our expert writers and designers create high-quality, engaging content tailored to your brand."
                },
                {
                  step: "03",
                  title: "Distribution & Promotion",
                  description: "We distribute your content across the right channels to maximize reach and engagement."
                },
                {
                  step: "04",
                  title: "Analysis & Optimization",
                  description: "We track performance metrics and continuously optimize for better results."
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

        {/* Services List */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Content <span className="text-primary">Solutions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-6 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
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
                Content Marketing <span className="text-primary">Packages</span>
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive content solutions that scale with your business needs.
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
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${pkg.popular ? 'btn-gradient border-0' : ''}`}>
                    Get Started
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 p-6 bg-white rounded-xl border-2 border-gray-100">
              <p className="text-gray-600">
                <strong>Custom Content Solutions:</strong> Need specific content types or higher volume? 
                We create custom packages tailored to your unique requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-gradient flat-panels section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-text text-3xl md:text-4xl mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's create a content marketing strategy that builds your brand and drives real business results.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-lg">
                Start Your Content Journey
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

export default ContentMarketingService;