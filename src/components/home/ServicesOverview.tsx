import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, Languages, PenTool } from 'lucide-react';
import { Link } from '../layout/Link';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Automation",
      description: "Streamline your processes with cutting-edge AI solutions"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Recording",
      description: "Professional multilingual voice recording services"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Translation",
      description: "Accurate translation and localization services"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions in AI automation, voice recording, 
            translation, and content creation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/services" className="text-blue-500 hover:text-blue-600">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;