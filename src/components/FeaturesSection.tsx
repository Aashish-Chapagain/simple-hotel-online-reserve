
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Hotel } from 'lucide-react';

const features = [
  {
    icon: Bed,
    title: 'Comfortable Rooms',
    description: 'All rooms equipped with modern amenities including AC, LED/Smart TV, and comfortable bedding for a perfect stay.'
  },
  {
    icon: Hotel,
    title: 'Prime Location',
    description: 'Located in the heart of the city with easy access to major attractions, shopping centers, and business districts.'
  },
  {
    icon: Bed,
    title: '24/7 Room Service',
    description: 'Round-the-clock room service ensuring all your needs are met at any time of the day or night.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hotel <span className="text-amber-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes The Grand Palace the perfect choice for your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-2xl bg-gradient-to-b from-white to-amber-50">
              <CardContent className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
