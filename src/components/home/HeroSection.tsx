import { Star, Zap, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/1.webp";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/916281855705", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+916281855705";
  };

  return (
    <section className="hero-gradient flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 md:pt-24 pb-4 md:pb-20 relative z-10">
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
          <Link to="/contact">
            <Button size="lg" className="hero-cta text-sm md:text-base">
              Let's Elevate Together →
            </Button>
          </Link>
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
  );
};

export default HeroSection;