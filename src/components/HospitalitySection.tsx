
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Personalized Service',
    description: 'Our dedicated staff provides personalized attention to ensure every guest feels special and welcomed.'
  },
  {
    title: 'Concierge Services',
    description: 'Expert local knowledge and assistance with reservations, transportation, and activity planning.'
  },
  {
    title: 'Dining Excellence',
    description: 'Exceptional in-room dining and restaurant services featuring local and international cuisine.'
  },
  {
    title: 'Business Facilities',
    description: 'Complete business center with meeting rooms, high-speed internet, and professional support services.'
  },
  {
    title: 'Wellness & Recreation',
    description: 'Fitness center, spa services, and recreational facilities to help you relax and rejuvenate.'
  },
  {
    title: 'Guest Relations',
    description: 'Dedicated guest relations team available 24/7 to address any concerns and enhance your experience.'
  }
];

const HospitalitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-600">Hospitality</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At The Grand Palace, hospitality isn't just a service—it's our passion. We go above and beyond to create memorable experiences for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience True Hospitality</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              "We believe that exceptional hospitality creates lasting memories. From the moment you arrive until your departure, 
              our team is committed to providing warm, attentive service that exceeds your expectations. Your comfort and satisfaction 
              are our highest priorities, and we take pride in making every stay at The Grand Palace truly special."
            </p>
            <div className="mt-6 text-amber-600 font-semibold">
              - Management Team, The Grand Palace
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection;
