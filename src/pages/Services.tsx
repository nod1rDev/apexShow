import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Bot, Languages, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: "AI-Powered Social Media Automation",
      description: "Streamline your social media presence with our intelligent automation solutions.",
      features: [
        "Optimized posting schedules",
        "Automated content distribution",
        "Performance analytics",
        "Multi-platform management"
      ]
    },
    {
      icon: <Mic className="w-12 h-12 text-blue-500" />,
      title: "Multilingual Voice Recording",
      description: "Professional voice recording services in multiple languages for various applications.",
      features: [
        "Native speakers",
        "Multiple languages",
        "High-quality equipment",
        "Quick turnaround"
      ]
    },
    {
      icon: <Languages className="w-12 h-12 text-blue-500" />,
      title: "Translation and Localization",
      description: "Accurate translation services that maintain cultural relevance and context.",
      features: [
        "Cultural adaptation",
        "Technical translation",
        "Content localization",
        "Quality assurance"
      ]
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-500" />,
      title: "Content Creation",
      description: "Engaging content that resonates with your target audience.",
      features: [
        "Scriptwriting",
        "Blog posts",
        "Social media content",
        "Technical documentation"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;