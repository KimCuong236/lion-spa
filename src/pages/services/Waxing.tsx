import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight } from 'lucide-react';

export const Waxing = () => {
  const services = [
    {
      name: "Full Body Waxing",
      description: "Complete hair removal service using premium wax",
      duration: "60-90 mins",
      price: "from $150",
      includes: [
        "Arms and underarms",
        "Legs and bikini area",
        "Back and chest",
        "Gentle exfoliation"
      ]
    },
    {
      name: "Facial Waxing",
      description: "Precise facial hair removal with sensitive skin formula",
      duration: "15-30 mins",
      price: "from $45",
      includes: [
        "Eyebrow shaping",
        "Upper lip",
        "Chin area",
        "Soothing aftercare"
      ]
    },
    {
      name: "Brazilian Waxing",
      description: "Professional intimate waxing service",
      duration: "30-45 mins",
      price: "from $75",
      includes: [
        "Complete hair removal",
        "Gentle technique",
        "Premium wax products",
        "Aftercare advice"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Waxing Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience smooth, silky skin with our premium waxing services.
          We use high-quality wax products and expert techniques for optimal results.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-pink-600 mr-2" />
              <span className="text-gray-700">{service.duration}</span>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Includes:</h3>
              <ul className="space-y-2">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-600">{service.price}</span>
              <Link
                to="/contact"
                className="flex items-center bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Pre & Post Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Before Your Wax</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Let hair grow to at least 1/4 inch</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Gently exfoliate 2 days before</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Avoid sun exposure and tanning</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Skip intense workouts day of</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">After Your Wax</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Avoid hot showers for 24 hours</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Apply recommended aftercare products</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>No swimming or saunas for 24 hours</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span>Regular exfoliation after 48 hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};