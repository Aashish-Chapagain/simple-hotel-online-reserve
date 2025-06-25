
import React from 'react';
import { Button } from '@/components/ui/button';
import BookingWidget from './BookingWidget';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            The Grand<span className="text-amber-600"> Palace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience luxury and comfort in the heart of the city. Where exceptional hospitality meets modern elegance.
          </p>
          <a href="#rooms">

          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
            Explore Our Rooms
          </Button>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <BookingWidget />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
