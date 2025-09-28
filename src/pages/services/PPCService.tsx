import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MousePointer, CheckCircle, ArrowRight, Target, DollarSign, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ppcImg from "@/assets/ppc.jpg";
import { Link } from "react-router-dom";

const PPCService = () => {
  const platforms = [
    "Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "YouTube Ads", "Microsoft Ads"
  ];

  const services = [
    "PPC Strategy Development", 
    "Keyword Research & Selection",
    "Ad Copy Creation & Testing",
    "Landing Page Optimization",
    "Bid Management & Optimization",
    "Conversion Tracking Setup",
    "A/B Testing & Analytics",
    "Monthly Performance Reports"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Immediate Results",
      description: "Start driving targeted traffic to your website from day one with properly optimized campaigns."
    },
    {
      icon: DollarSign,
      title: "Maximum ROI",
      description: "Get more value from your ad spend with our proven optimization strategies and techniques."
    },
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive analytics and performance tracking."
    }
  ];

  const packages = [
    {
      name: "Starter PPC",
      price: "$399/month",
      adSpend: "Up to $2,000/month",
      features: [
        "1-2 Advertising Platforms",
        "Campaign Setup & Optimization",
        "Keyword Research",
        "Ad Copy Creation",
        "Monthly Performance Report",
        "Basic Conversion Tracking"
      ]
    },
    {
      name: "Professional PPC",
      price: "$699/month",
      adSpend: "Up to $5,000/month", 
      features: [
        "3-4 Advertising Platforms",
        "Advanced Campaign Optimization",
        "Landing Page Optimization",
        "A/B Testing & Analytics",
        "Bi-weekly Performance Reports",
        "Advanced Conversion Tracking",
        "Remarketing Campaigns"
      ],
      popular: true
    },
    {
      name: "Enterprise PPC",
      price: "$1,299/month",
      adSpend: "$10,000+/month",
      features: [
        "All Major Platforms",
        "Dedicated PPC Specialist",
        "Advanced Analytics Setup",
        "Custom Landing Pages",
        "Weekly Performance Reports",
        "Advanced Attribution Modeling",
        "Competitor Analysis",
        "24/7 Campaign Monitoring"
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
              <MousePointer className="h-10 w-10 text-white" />
            </div>
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              PPC <span className="text-white">Advertising</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns 
              across Google, Facebook, and other major advertising platforms.
            </p>
            {/* Framed hero media */}
            <div className="hero-media-wrap mt-8">
              <div className="hero-media-frame">
                <img src={ppcImg} alt="PPC advertising" className="w-full h-auto" />
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
                  Maximize Your Ad Spend & <span className="text-primary">Drive Conversions</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our PPC experts create and manage high-performing advertising campaigns that 
                  deliver qualified leads and measurable results. We optimize every aspect of 
                  your campaigns to ensure maximum return on investment.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Advertising Platforms:</h3>
                  <div className="grid grid-cols-2 gap-3">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Our PPC Services?</h3>
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

        {/* What We Do */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our PPC <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-gray-600">
                From strategy to execution, we handle every aspect of your PPC campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Research & Strategy",
                  description: "We analyze your market, competitors, and target audience to develop a winning strategy."
                },
                {
                  step: "02", 
                  title: "Campaign Setup",
                  description: "We create optimized campaigns with targeted keywords, compelling ad copy, and proper tracking."
                },
                {
                  step: "03",
                  title: "Launch & Monitor",
                  description: "We launch your campaigns and continuously monitor performance for optimization opportunities."
                },
                {
                  step: "04",
                  title: "Optimize & Scale",
                  description: "We refine campaigns based on data insights and scale successful strategies for maximum ROI."
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">PPC & Ads FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "What platforms do you manage?", a: "Google Ads, Meta (Facebook/Instagram), LinkedIn, YouTube, and Microsoft Ads depending on fit." },
                { q: "How do you optimize campaigns?", a: "We improve targeting, bids, negatives, creatives, and landing pages—guided by conversion tracking." },
                { q: "Do you set up tracking?", a: "Yes. We implement conversion tracking, pixels, server events, and dashboards for ROAS/CAC visibility." },
                { q: "What results timeline should we expect?", a: "Initial learnings in 2–3 weeks, compounding efficiency by 6–10 weeks given enough spend and data." }
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

export default PPCService;