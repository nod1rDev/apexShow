import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Clock, Users, CheckCircle, DollarSign, Headphones, Wifi } from 'lucide-react';
import { Link } from '../../components/layout/Link';

interface ProjectDetails {
  [key: string]: {
    title: string;
    language: string;
    timeline: string;
    requirements: {
      proficiency: string;
      equipment: string[];
      internet: string;
    };
    payment: {
      standard: number;
      adjusted: number;
    };
  };
}

const projectDetails: ProjectDetails = {
  'uzbek': {
    title: 'Uzbek Audio Annotation Project',
    language: 'Uzbek',
    timeline: '2 months',
    requirements: {
      proficiency: 'Native or near-native proficiency in Uzbek',
      equipment: [
        'Windows 10 or macOS computer',
        'Noise-canceling headphones'
      ],
      internet: '5 Mbps stable connection'
    },
    payment: {
      standard: 12,
      adjusted: 8
    }
  },
  'kazakh': {
    title: 'Kazakh Audio Annotation Project',
    language: 'Kazakh',
    timeline: '2 months',
    requirements: {
      proficiency: 'Native or near-native proficiency in Kazakh',
      equipment: [
        'Windows 10 or macOS computer',
        'Noise-canceling headphones'
      ],
      internet: '5 Mbps stable connection'
    },
    payment: {
      standard: 12,
      adjusted: 8
    }
  }
};

const AudioAnnotationProject = () => {
  const { language } = useParams();
  const project = projectDetails[language || 'uzbek'];

  return (
    <div className="pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Timeline</h3>
              <p className="text-gray-600">{project.timeline}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Daily Goal</h3>
              <p className="text-gray-600">1 hour of annotated audio</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold mb-2">Quality Standard</h3>
              <p className="text-gray-600">High accuracy required</p>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Project Requirements</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Language Proficiency</h3>
                <p className="text-gray-600 mb-6">{project.requirements.proficiency}</p>
                
                <h3 className="text-xl font-semibold mb-4">Required Equipment</h3>
                <ul className="space-y-2">
                  {project.requirements.equipment.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <Headphones className="w-5 h-5 text-blue-500 mr-2" />
                      {item}
                    </li>
                  ))}
                  <li className="flex items-center text-gray-600">
                    <Wifi className="w-5 h-5 text-blue-500 mr-2" />
                    {project.requirements.internet}
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">
                      Standard Rate: ${project.payment.standard}/hour
                    </span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-gray-600">
                      Adjusted Rate: ${project.payment.adjusted}/hour
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Payments are processed weekly via UzCard, Humo, USDT, Binance, 
                    WeChat, Alipay, or Payoneer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link 
            href="/contact" 
            className="btn-primary inline-flex items-center"
          >
            Apply for This Project
          </Link>
        </section>
      </motion.div>
    </div>
  );
};

export default AudioAnnotationProject;