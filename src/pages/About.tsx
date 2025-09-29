import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, Target, Heart, Lightbulb, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";
import heroImg from "@/assets/1.webp";

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
    { number: "100+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "95%", label: "Client Retention Rate" }
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
                About <span className="text-white">AMS ElevateX</span>
              </h1>
              <p className="hero-subtitle mb-6">
                Leading Digital Marketing Agency in India. Building meaningful partnerships & crafting impactful experiences for clients since 2025. We specialize in helping startups and SMEs scale through data-driven marketing strategies.
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

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Mission & Vision</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>Our Mission:</strong> To work closely with client teams by understanding their current business and marketing challenges. AMS ElevateX develops efficient and creative marketing strategies aligned with current trends to help businesses dominate competitive market spaces through strategic marketing efforts.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>Our Vision:</strong> To become India's most trusted digital growth partner for startups and SMEs, using advanced analytics to understand audiences, creating innovative campaigns that stand out, and leveraging the latest marketing technology to connect businesses with their ideal customers.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are experts in using data, creativity, and technology to help startups thrive by finding their audience and standing out from the competition. Our goal is to build meaningful partnerships that drive sustainable growth and create impactful digital experiences.
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
                      <span className="text-lg text-gray-700">{item}</span>
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Growth Journey Timeline */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Growth <span className="text-primary">Journey Timeline</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Key milestones in our evolution as a leading digital marketing agency</p>
            </div>

            <div className="space-y-8">
              {[
                { date: "January 2025", title: "Foundation & Vision", desc: "Launched AMS ElevateX with a mission to revolutionize digital marketing for startups and SMEs, establishing our core team and service framework." },
                { date: "June 2025", title: "Service Portfolio Expansion", desc: "Launched comprehensive service offerings including social media management, lead generation, performance marketing, branding, and web development." },
                { date: "September 2025", title: "Technology & Analytics Integration", desc: "Implemented advanced analytics dashboard and automation tools, enabling real-time campaign optimization and transparent client reporting." },
                { date: "December 2025", title: "Team Growth & Specialization", desc: "Expanded to a team of 15+ specialists across different verticals, establishing dedicated pods for social media, ads, SEO, and creative design." }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-semibold text-primary mb-1">{milestone.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Impact</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Measurable results that showcase our commitment to client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg neon-card counter-card">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 counter-number">
                    {achievement.number}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
};

export default About;