import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../layout/Link';
import { RotatingText } from '../shared/RotatingText';
import { AnimatedText } from '../shared/AnimatedText';

const Hero = () => {
  const rotatingTexts = [
    "Innovating AI Solutions",
    "Redefining Multilingual Voice Tech",
    "Empowering the Future of AI"
  ];

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <AnimatedText
            text="ApexBart Solutions"
            className="text-5xl font-bold mb-4"
          />
          <RotatingText
            texts={rotatingTexts}
            className="text-2xl font-medium text-blue-300 mb-6"
          />
          <AnimatedText
            text="Transform your digital communication with our cutting-edge AI solutions and professional voice recording services."
            className="text-xl mb-8 text-gray-200 block"
            delay={0.2}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/services" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary inline-flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;