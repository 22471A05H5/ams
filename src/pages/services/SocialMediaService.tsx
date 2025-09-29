import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Share2, CheckCircle, Users, TrendingUp, Calendar, BarChart3, Star, Zap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/social.jpeg";

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

  // Unique AMS ElevateX value for social media
  const benefits = [
    {
      icon: MessageCircle,
      title: "Done-for-you content system",
      description: "We plan the calendar, write copy, design assets, and publish consistently."
    },
    {
      icon: Users,
      title: "Brand kits & templates",
      description: "Reusable design systems ensure on-brand, fast-turnaround creatives."
    },
    {
      icon: TrendingUp,
      title: "Data-led iteration",
      description: "Weekly insights drive improvements across hooks, formats, and posting times."
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
        <section className="hero-gradient flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-24 pb-20 relative z-10">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="hero-title text-4xl md:text-6xl mb-4">
                Social Media Content Creation & <span className="text-white">Handling</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Plan, create, and manage daily social content that grows your audience and engagement 
                across all major platforms with data-driven strategies and consistent brand messaging.
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
            <div className="service-hero-wrap social-media-effect">
              <div className="service-hero-frame">
                <img src={heroImg} alt="Social Media Service" className="w-full h-auto" />
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

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Social Media FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How many posts do you publish per week?",
                  a: "We recommend 4–10 posts/week depending on platforms and goals. Your content calendar is finalized monthly."
                },
                {
                  q: "Do you create reels and stories?",
                  a: "Yes. We produce static posts, reels/shorts, carousels, and story assets with copy and hooks."
                },
                {
                  q: "Who handles comments and DMs?",
                  a: "Our community management handles responses and moderation with agreed brand guidelines and SLAs."
                },
                {
                  q: "How do you measure success?",
                  a: "We track reach, engagement rate, profile visits, link clicks, and traffic/leads attributed from social."
                }
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

export default SocialMediaService;