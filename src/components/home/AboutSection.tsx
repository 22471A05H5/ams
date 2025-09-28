import { CheckCircle, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutSection = () => {
  const features = [
    "Expert Team of Digital Marketers",
    "Proven Track Record of Success", 
    "Customized Marketing Strategies",
    "24/7 Customer Support"
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Award, number: "100+", label: "Projects Completed" },
    { icon: Target, number: "3+", label: "Years Experience" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey,{" "}
              <span className="text-primary">Vision, And Values</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of digital marketing experts dedicated to helping 
              businesses thrive in the digital age. With years of experience and a proven 
              track record, we deliver results that matter.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <Link to="/about">
              <Button className="btn-gradient border-0">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <img 
              src={teamPhoto} 
              alt="Our Professional Team" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;