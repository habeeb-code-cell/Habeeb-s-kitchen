import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Location } from '../types';

interface LocationsSectionProps {
  locations: Location[];
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const groupedLocations = locations.reduce((acc, location) => {
    if (!acc[location.city]) {
      acc[location.city] = [];
    }
    acc[location.city].push(location);
    return acc;
  }, {} as Record<string, Location[]>);

  const handleGetDirections = (location: Location) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600">
            Find Habeeb Kitchen near you across major Nigerian cities
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(groupedLocations).map(city => (
            <button
              key={city}
              onClick={() => setSelectedLocation(null)}
              className="px-6 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors font-medium"
            >
              {city} ({groupedLocations[city].length})
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(location => (
            <div 
              key={location.id} 
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Location Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
                <h3 className="text-lg font-bold mb-1">{location.name}</h3>
                <div className="flex items-center text-green-100">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{location.city}</span>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-4 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">Address</p>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium">Hours</p>
                    <p className="text-gray-600 text-sm">{location.hours}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <button
                    onClick={() => handleGetDirections(location)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Directions</span>
                  </button>
                  
                  <a
                    href={`tel:${location.phone}`}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Areas */}
        <div className="mt-16 bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Delivery Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(groupedLocations).map(([city, cityLocations]) => (
              <div key={city} className="text-center">
                <h4 className="text-lg font-semibold text-green-700 mb-3">{city}</h4>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="space-y-2">
                    {cityLocations.map(location => (
                      <div key={location.id} className="text-sm">
                        <p className="font-medium text-gray-800">{location.name.split(' ').pop()}</p>
                        <p className="text-gray-600">30-45 min delivery</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-green-700 mb-4">
              Don't see your area? We're expanding across Nigeria!
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request New Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;