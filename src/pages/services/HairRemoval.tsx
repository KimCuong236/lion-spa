import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight } from 'lucide-react';

export const HairRemoval = () => {
  const treatments = [
    {
      name: "Laser Hair Removal",
      description: "Permanent hair reduction using advanced laser technology",
      duration: "30-60 mins",
      price: "from $199",
      benefits: [
        "Long-lasting results",
        "Suitable for all skin types",
        "Minimal discomfort",
        "FDA-approved technology"
      ]
    },
    {
      name: "IPL Hair Removal",
      description: "Intense Pulsed Light treatment for hair reduction",
      duration: "20-45 mins",
      price: "from $149",
      benefits: [
        "Gentle treatment",
        "Quick sessions",
        "Effective for light skin",
        "Gradual reduction"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hair Removal Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience smooth, hair-free skin with our advanced hair removal treatments.
          Choose from various options tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {treatments.map((treatment, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">{treatment.name}</h2>
            <p className="text-gray-600 mb-6">{treatment.description}</p>
            
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-pink-600 mr-2" />
              <span className="text-gray-700">{treatment.duration}</span>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Benefits:</h3>
              <ul className="space-y-2">
                {treatment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-pink-600">{treatment.price}</span>
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
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">How many sessions will I need?</h3>
            <p className="text-gray-600">Most clients need 6-8 sessions for optimal results, spaced 4-6 weeks apart.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is the treatment painful?</h3>
            <p className="text-gray-600">Most clients describe the sensation as mild discomfort. We use cooling technology to minimize any discomfort.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How long do results last?</h3>
            <p className="text-gray-600">Results can be permanent with maintenance sessions once or twice a year.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is it safe for all skin types?</h3>
            <p className="text-gray-600">Yes, our advanced technology is safe for all skin types. We'll assess your skin during consultation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};