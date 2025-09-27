import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Share2, CheckCircle, ArrowRight, Users, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import socialImg from "@/assets/social.jpeg";
import { Link } from "react-router-dom";

const SocialMediaService = () => {
  const platforms = [
    "Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube", "TikTok"
  ];

  const services = [
    "Social Media Strategy Development",
    "Content Creation & Curation",
    "Community Management",
    "Social Media Advertising",
    "Influencer Partnerships",
    "Analytics & Reporting",
    "Brand Reputation Management",
    "Social Commerce Setup"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Build Brand Awareness",
      description: "Increase your brand visibility and reach new audiences across social platforms."
    },
    {
      icon: MessageCircle,
      title: "Engage Your Community",
      description: "Foster meaningful connections with your audience through strategic engagement."
    },
    {
      icon: TrendingUp,
      title: "Drive Website Traffic",
      description: "Convert social media followers into website visitors and paying customers."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$199/month",
      platforms: "2 Platforms",
      features: [
        "Content Calendar Planning",
        "5 Posts per week",
        "Basic Community Management",
        "Monthly Performance Report"
      ]
    },
    {
      name: "Professional",
      price: "$399/month", 
      platforms: "4 Platforms",
      features: [
        "Everything in Starter",
        "10 Posts per week",
        "Story & Reel Content",
        "Advanced Community Management",
        "Paid Ad Management ($500 ad spend included)",
        "Bi-weekly Performance Reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799/month",
      platforms: "All Platforms",
      features: [
        "Everything in Professional",
        "Daily Content Creation",
        "Video Content Production",
        "Influencer Outreach",
        "Advanced Analytics Dashboard",
        "Dedicated Account Manager",
        "Weekly Strategy Calls"
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
              <Share2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              Social Media <span className="text-white">Marketing</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Build your brand, engage your audience, and drive growth across all major 
              social media platforms with our comprehensive social media marketing services.
            </p>
            {/* Framed hero media */}
            <div className="hero-media-wrap mt-8">
              <div className="hero-media-frame">
                <img src={socialImg} alt="Social media marketing" className="w-full h-auto" />
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
                  Grow Your Brand on <span className="text-primary">Every Platform</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our social media experts create engaging content, manage your online community, 
                  and run targeted advertising campaigns to help you build a strong social presence 
                  that converts followers into customers.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Platforms We Manage:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {platforms.map((platform, index) => (
                      <div key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center font-medium">
                        {platform}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Social Media Marketing?</h3>
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

        {/* Full Services List */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Social Media <span className="text-primary">Solutions</span>
              </h2>
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

        {/* Pricing */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Social Media <span className="text-primary">Packages</span>
              </h2>
              <p className="text-lg text-gray-600">
                Choose the perfect social media package for your business.
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
                    <div className="text-gray-600">{pkg.platforms}</div>
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
              Ready to Amplify Your Social Presence?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's create a social media strategy that builds your brand and drives real business results.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-lg">
                Start Your Social Journey
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

export default SocialMediaService;