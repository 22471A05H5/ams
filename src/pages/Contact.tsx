import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, MessageCircle, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/1.webp";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services. Can we discuss?");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient contact-hero flex items-center justify-center relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-24 pb-20 relative z-10">
            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="hero-title text-4xl md:text-6xl mb-4">
                AMS ElevateX — <span className="text-white">Digital Growth Partner</span>
              </h1>
              <p className="hero-subtitle mb-6">
                We help businesses scale with Social Media, Lead Systems, Performance Marketing, Branding,
                and Web Development — turning traffic into revenue with reliable, data-driven execution.
              </p>
            </div>

            {/* CTA Button with Icons (left and right of button) */}
            <div className="mb-12 flex items-center justify-center gap-4">
              <Star className="h-6 w-6 text-primary" />
              <a href="/contact">
                <Button size="lg" className="hero-cta text-sm md:text-base">
                  Let's Elevate Together →
                </Button>
              </a>
              <Zap className="h-7 w-7 text-primary" />
            </div>

            {/* Framed media matching the design */}
            <div className="hero-media-wrap">
              <div className="hero-media-frame">
                <img src={heroImg} alt="Homepage showcase" className="w-full h-auto" />
              </div>
              <div className="hero-media-shadow" />
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready to start your digital transformation? Contact us today.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-4" />
                    <span className="text-gray-700">123 Business Street, City, Country</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <span className="text-gray-700">info@amselevatex.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <p className="text-gray-600 mb-6">Get in touch with us for your digital marketing needs.</p>
                <Button 
                  onClick={handleWhatsApp}
                  className="btn-gradient border-0 w-full"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
