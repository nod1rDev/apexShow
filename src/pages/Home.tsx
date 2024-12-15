import React from 'react';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
};

export default Home;