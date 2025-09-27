import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Target, Heart, Lightbulb } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about helping businesses succeed in the digital world."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners in their success."
    },
    {
      icon: Target,
      title: "Results",
      description: "We're committed to delivering measurable results that drive growth."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-text text-4xl md:text-6xl mb-6">
              About <span className="text-white">AMS ElevateX</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              We are a passionate team of digital marketing experts dedicated to helping 
              businesses thrive in the digital age with innovative solutions and proven strategies.
            </p>
            {/* Single centered image (team photo) */}
            <div className="mt-8 flex justify-center">
              <img
                src={teamPhoto}
                alt="Our Team"
                className="w-full max-w-3xl rounded-2xl shadow-2xl border-4 border-primary/60 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Journey & <span className="text-primary">Vision</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2019, AMS ElevateX began with a simple mission: to help businesses 
                  navigate the complex digital landscape and achieve unprecedented growth through 
                  innovative marketing strategies.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Over the years, we've evolved from a small startup to a trusted digital 
                  marketing partner for businesses worldwide. Our team combines creativity with 
                  data-driven insights to deliver results that matter.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Data-driven marketing strategies",
                    "Transparent reporting and analytics",
                    "Dedicated account management",
                    "Continuous optimization and growth"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Achievements</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-gradient flat-panels section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-text text-3xl md:text-4xl mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how we can help grow your business with our proven digital marketing strategies.
            </p>
            <Link to="/contact">
              <button className="btn-gradient">
                Get In Touch
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;