import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
    "SEO Optimization",
    "Social Media Marketing",
    "PPC Advertising", 
    "Web Design & Development",
    "Content Marketing",
    "General Inquiry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services. Can we discuss?");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient contact-hero section-padding pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              Contact <span className="text-white">Us</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Ready to grow your business? Let's discuss how we can help you achieve 
              your digital marketing goals.
            </p>
            {/* Framed form to match homepage media frame */}
            <div className="hero-media-wrap mt-8">
              <div className="hero-media-frame">
                <div className="bg-white p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us about your project and goals..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full btn-gradient border-0" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Contact Info (form moved above) */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="w-full max-w-2xl lg:max-w-none text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div className="space-y-4 lg:text-left">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-gray-900">Visit Us</span>
                      <span className="mx-2">—</span>
                      <span>123 Business Street, suite 100, City, State 12345</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-gray-900">Call Us</span>
                      <span className="mx-2">—</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-gray-900">Email Us</span>
                      <span className="mx-2">—</span>
                      <span>info@amselevatex.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="text-gray-700">
                      <span className="font-semibold text-gray-900">Business Hours</span>
                      <span className="mx-2">—</span>
                      <span>Mon–Fri 9:00 AM – 6:00 PM, Sat 10:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 max-w-sm">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white border-0"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

              {/* Form moved to hero section */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;