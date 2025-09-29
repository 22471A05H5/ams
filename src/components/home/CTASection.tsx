import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/916281855705", "_blank");
  };

  return (
    <section className="hero-gradient flat-panels tight-panels pt-12 pb-0 mb-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="hero-text text-3xl md:text-4xl mb-6">
          Ready To Grow Your Business?{" "}
          <span className="text-white">Let's Get Started!</span>
        </h2>
        
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your digital presence today with our proven marketing strategies. 
          Join hundreds of successful businesses who trust us with their growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full max-w-lg mx-auto sm:max-w-none">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-lg w-full sm:w-auto"
            >
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleWhatsApp}
            className="bg-white text-gray-800 border-white hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg w-full sm:w-auto"
          >
            <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>+91 6281855705</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
          <div>
            <span>Free consultation • No commitment required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;