import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const url = selectedCategory 
          ? `http://localhost:3000/api/services/category/${selectedCategory}`
          : 'http://localhost:3000/api/services';
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch services');
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [selectedCategory]);

  const categories = [
    { id: 'hair-removal', name: 'Hair Removal', path: '/services/hair-removal' },
    { id: 'filler-botox', name: 'Filler & Botox', path: '/services/filler-botox' },
    { id: 'waxing', name: 'Waxing', path: '/services/waxing' }
  ];

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
    </div>
  );

  if (error) return (
    <div className="text-center py-12">
      <p className="text-red-600">{error}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
      >
        Try Again
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Premium Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the ultimate in beauty and wellness with our carefully curated services,
          delivered by expert professionals using premium products and advanced techniques.
        </p>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {categories.map(category => (
          <Link
            key={category.id}
            to={category.path}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={`https://images.unsplash.com/photo-${
                  category.id === 'hair-removal' ? '1560750588-73207b1ef5b8' :
                  category.id === 'filler-botox' ? '1512290923902-8a9f81dc236c' :
                  '1570172619644-dfd03ed5d881'
                }?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-1 rounded-full">
                ${service.price}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 capitalize">
                  Category: {service.category.replace('-', ' ')}
                </span>
                <Link
                  to={`/services/${service.category}`}
                  className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};