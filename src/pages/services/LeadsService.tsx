import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, CheckCircle, Target, TrendingUp, MessageCircle, Phone, Star, Zap, Filter, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/leading management.jpg";

const LeadsService = () => {
  const solutions = [
    "Multi-channel lead capture (forms, chat, landing pages)",
    "CRM integration and pipeline setup",
    "Lead scoring and qualification",
    "Automations: email/SMS follow-ups",
    "Appointment booking and calendar sync",
    "Dashboard reporting and attribution",
  ];

  const unique = [
    "Done-for-you pipeline: from ad click to booked call",
    "Pre-built industry funnels customized to your brand",
    "Real-time lead alerts on WhatsApp, email, and CRM",
    "Weekly optimization sprints focused on conversions",
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
                Leads Generation & <span className="text-white">Management</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Capture, qualify, and route leads to booked calls with smart automations 
                that turn prospects into paying customers through proven conversion systems.
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
            <div className="service-hero-wrap leads-effect">
              <div className="service-hero-frame">
                <img src={heroImg} alt="Leads Generation Service" className="w-full h-auto" />
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

        {/* Overview */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Convert Traffic Into <span className="text-primary">Qualified Opportunities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From landing pages and lead magnets to CRM setup and automated follow-ups,
                we provide an end-to-end system that consistently turns visitors into customers.
              </p>

              <div className="space-y-3">
                {solutions.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What AMS ElevateX Uniquely Provides</h3>
              <div className="space-y-6">
                {unique.map((text, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      {i === 0 ? <Filter className="h-6 w-6 text-primary" /> : i === 1 ? <Users className="h-6 w-6 text-primary" /> : i === 2 ? <PhoneCall className="h-6 w-6 text-primary" /> : <Mail className="h-6 w-6 text-primary" />}
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Leads & CRM FAQ</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Which CRM do you set up?", a: "We work with HubSpot, Pipedrive, Zoho, and custom stacks. We'll recommend the best fit for your workflow and budget." },
                { q: "Do you build landing pages and forms?", a: "Yes. We create high-converting landing pages and embed forms with tracking for attribution." },
                { q: "Can you automate follow-ups?", a: "We set up email/SMS workflows, lead scoring, and notifications so hot leads are contacted fast." },
                { q: "How do you measure lead quality?", a: "We score leads based on source, behavior, and qualification fields, then report SQLs and bookings." }
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

export default LeadsService;
