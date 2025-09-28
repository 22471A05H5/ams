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
        <section className="hero-gradient flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-24 pb-20 relative z-10">
            <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <PenTool className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              Content <span className="text-white">Marketing</span>
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

        

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Content Marketing FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "What content do you produce?", a: "Blogs, social content, emails, video scripts, infographics, and whitepapers based on your strategy." },
                { q: "Do you handle the entire content process?", a: "Yes. Strategy, calendar, creation, editing, publishing, and performance analysis." },
                { q: "How do you measure content success?", a: "We track impressions, engagement, time on page, organic rankings, and conversion actions." },
                { q: "Can you optimize existing content?", a: "We audit and refresh existing pages to improve topical depth, internal linking, and conversions." }
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

export default ContentMarketingService;