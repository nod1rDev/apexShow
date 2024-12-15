import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '../layout/Link';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Communication?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our AI solutions and voice recording services can help 
            you reach your goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 
                     rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;