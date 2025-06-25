
import React from 'react';
import HeroSection from '../components/HeroSection';
import RoomsSection from '../components/RoomsSection';
import FeaturesSection from '../components/FeaturesSection';
import HospitalitySection from '../components/HospitalitySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div id='rooms'>

      <RoomsSection />
      </div>
      <FeaturesSection />
      <HospitalitySection />
      <Footer />
    </div>
  );
};

export default Index;
