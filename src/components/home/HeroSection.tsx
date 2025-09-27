import { Star, Zap, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/1.webp";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+15551234567";
  };

  return (
    <section className="hero-gradient flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 relative z-10">
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="hero-title text-4xl md:text-6xl mb-4">
            <span className="text-white/90">›</span> Innovating Your
            <br />
            Digital World With Us
          </h1>
          <p className="hero-subtitle mb-6">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum
            Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
          </p>
        </div>

        {/* CTA Button with Icons (left and right of button) */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <Star className="h-6 w-6 text-primary" />
          <Button size="lg" className="hero-cta text-sm md:text-base">
            Get Started →
          </Button>
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
      {/* Floating Contact Actions (persistent on home) */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={handleWhatsApp}
          aria-label="Chat on WhatsApp"
          className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleCall}
          aria-label="Call us"
          className="h-12 w-12 rounded-full bg-primary hover:opacity-90 text-white shadow-lg flex items-center justify-center"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;