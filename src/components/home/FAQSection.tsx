import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive range of services including SEO optimization, social media marketing, PPC advertising, web design & development, content marketing, email marketing, and digital strategy consulting."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on the service and your current digital presence. SEO typically shows results in 3-6 months, while PPC and social media campaigns can show immediate results. We provide regular reports to track progress."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. We tailor our strategies to fit your budget and goals, ensuring maximum ROI regardless of your company size."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We use various KPIs depending on your goals: website traffic, conversion rates, lead generation, brand awareness, social engagement, and ROI. We provide detailed monthly reports with actionable insights."
    },
    {
      question: "What makes your agency different?",
      answer: "Our data-driven approach, experienced team, personalized strategies, transparent reporting, and commitment to your success sets us apart. We focus on building long-term partnerships, not just short-term gains."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to the most common questions about our digital marketing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;