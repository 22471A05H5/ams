import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logoShot from "@/assets/Screenshot_2025-09-26_125625-removebg-preview.png";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleSocialLink = (platform: string) => {
    const urls = {
      facebook: "https://facebook.com/yourcompany",
      twitter: "https://twitter.com/yourcompany", 
      instagram: "https://instagram.com/yourcompany",
      linkedin: "https://linkedin.com/company/yourcompany"
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-lg p-2 shadow-sm">
                <img src={logoShot} alt="AMS ElevateX" className="h-8 w-auto" />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Innovating your digital world with cutting-edge marketing solutions and creative strategies.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialLink("facebook")}
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialLink("twitter")}
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialLink("instagram")}
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleSocialLink("linkedin")}
                className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/seo" className="text-gray-400 hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/ppc" className="text-gray-400 hover:text-primary transition-colors">
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-gray-400 hover:text-primary transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/content-marketing" className="text-gray-400 hover:text-primary transition-colors">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>123 Business Street, City, Country</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>info@amselevatex.com</span>
              </div>
              <button
                onClick={handleWhatsApp}
                className="flex items-center text-gray-400 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-3 text-primary" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-0 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AMS ElevateX. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;