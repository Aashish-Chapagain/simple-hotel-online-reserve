
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bed, Hotel } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['Air Conditioning', 'LED TV', 'Free Wi-Fi', 'Room Service'],
    description: 'Comfortable and cozy room perfect for budget travelers.'
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['Air Conditioning', 'Smart TV', 'Mini Bar', 'Free Wi-Fi', 'Room Service', 'City View'],
    description: 'Spacious room with modern amenities and beautiful city views.'
  },
  {
    id: 3,
    name: 'Premium Suite',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['Air Conditioning', 'Smart TV', 'Mini Bar', 'Free Wi-Fi', 'Room Service', 'Balcony', 'Jacuzzi'],
    description: 'Luxurious suite with premium amenities and stunning views.'
  }
];

const RoomsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-600">Rooms</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering comfort and luxury at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-600 text-white px-3 py-1">
                    ₹{room.price}/night
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                  <Bed className="h-5 w-5 text-amber-600" />
                  {room.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600">{room.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="text-2xl font-bold text-amber-600">
                    ₹{room.price}
                    <span className="text-sm text-gray-500 font-normal">/night</span>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
