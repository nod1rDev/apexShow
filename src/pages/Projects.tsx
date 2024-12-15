import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../components/layout/Link';

const Projects = () => {
  const projects = [
    {
      title: "Uzbek Audio Annotation",
      description: "Join our Uzbek language audio annotation project for AI training.",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Voice Recording",
      link: "/projects/audio-annotation/uzbek"
    },
    {
      title: "Kazakh Audio Annotation",
      description: "Contribute to our Kazakh language audio annotation project.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Voice Recording",
      link: "/projects/audio-annotation/kazakh"
    },
    {
      title: "AI Social Media Manager",
      description: "Automated content distribution system for multiple social media platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "AI Automation",
      link: "/projects"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Our Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-medium text-blue-500">
                  {project.category}
                </span>
                <h2 className="text-xl font-semibold mt-2 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Link 
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;