import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, MessageCircle, Star, Zap, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { WEB3FORMS_CONFIG } from '@/config/web3forms';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = [
    "Social Media Content Creation & Handling",
    "Leads Generation & Management", 
    "Performance Marketing (Meta Ads, Google Ads & SEO)",
    "Branding & Creative Designs",
    "Web Development",
    "General Inquiry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Show loading state
      toast({
        title: "Sending message...",
        description: "Please wait while we send your message.",
      });

      // Web3Forms configuration
      const { ACCESS_KEY, API_URL } = WEB3FORMS_CONFIG;
      
      // Check if access key is configured
      if (!ACCESS_KEY || ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        throw new Error('Web3Forms access key not configured. Please check src/config/web3forms.ts');
      }

      // Skip connectivity test - proceed directly to form submission

      // Prepare form data for Web3Forms (minimal configuration)
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || 'Not provided');
      formDataToSend.append("service", formData.service || 'Not specified');
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", `New Contact from ${formData.name} - AMS ElevateX`);
      formDataToSend.append("redirect", "false");

      // Send to Web3Forms (simplified)
      let response;
      let result;
      
      try {
        response = await fetch(API_URL, {
          method: "POST",
          body: formDataToSend
        });
        
        console.log('Response Status:', response.status); // Debug logging
        console.log('Response OK:', response.ok); // Debug logging
        
        result = await response.json();
        console.log('Web3Forms Response:', result); // Debug logging
        
      } catch (fetchError) {
        console.error('Fetch Error:', fetchError);
        throw new Error('Unable to connect to the server. Please check your internet connection.');
      }

      // Check for success - multiple conditions to ensure reliability
      const isSuccess = result.success === true || 
                       result.success === "true" || 
                       response.status === 200 || 
                       response.ok;

      if (isSuccess) {
        // Show success message
        toast({
          title: "Thank you for your message! 🎉",
          description: "We've received your inquiry and will get back to you within 24 hours.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        
        console.log('✅ Form submitted successfully!');
      } else {
        console.error('Web3Forms Error Response:', result);
        throw new Error(result.message || "Failed to send message");
      }

    } catch (error) {
      console.error('Web3Forms Error:', error);
      
      // More detailed error message
      let errorMessage = "There was an error sending your message. Please try again or contact us directly.";
      let errorTitle = "Failed to send message";
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorTitle = "Request timeout";
          errorMessage = "The request took too long. Please check your internet connection and try again.";
        } else if (error.message.includes('access_key')) {
          errorTitle = "Configuration error";
          errorMessage = "Invalid access key. Please check the setup.";
        } else if (error.message.includes('network') || error.message.includes('fetch') || error.message.includes('Failed to fetch') || error.message.includes('connect to the server')) {
          errorTitle = "Connection error";
          errorMessage = "Unable to connect to the server. Please check your internet connection and try again.";
        } else if (error.message.includes('HTTP error')) {
          errorTitle = "Server error";
          errorMessage = `Server responded with error: ${error.message}`;
        } else if (error.message) {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive"
      });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services. Can we discuss?");
    window.open(`https://wa.me/916281855705?text=${message}`, "_blank");
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
                Contact <span className="text-white">Us</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Ready to grow your business? Let's discuss how we can help you achieve 
                your digital marketing goals and transform your online presence.
              </p>
            </div>


            {/* Framed media matching the design */}
            <div className="hero-media-wrap">
              <div className="hero-media-frame">
                <div className="w-full h-auto bg-white p-4 md:p-6 flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                          placeholder="info@amselevatex.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                          placeholder="+91 9999999999"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Service Interest</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us about your project and goals..."
                        required
                      />
                    </div>
                    
                    {/* Honeypot field for spam detection - hidden from users */}
                    <input
                      type="text"
                      name="botcheck"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <Button type="submit" className="w-full btn-gradient border-0" size="sm">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
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
                    <span className="text-gray-700">Flat No 131, Third floor, Priya Rani Residency, Plot No. 68, of Survey No. 403, Film Nagar, Shakipet, Hyderabad, Telangana</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <span className="text-gray-700">+91 6281855705</span>
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
