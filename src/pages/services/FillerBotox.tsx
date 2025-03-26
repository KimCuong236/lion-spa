import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight, AlertCircle } from 'lucide-react';

export const FillerBotox = () => {
  const treatments = [
    {
      name: "Dermal Fillers",
      description: "Premium hyaluronic acid fillers for natural-looking volume and contour",
      duration: "30-45 mins",
      price: "from $599",
      areas: [
        "Lips enhancement",
        "Cheek augmentation",
        "Nasolabial folds",
        "Under-eye hollows"
      ]
    },
    {
      name: "Botox Treatment",
      description: "Precision anti-wrinkle injections for a refreshed appearance",
      duration: "15-30 mins",
      price: "from $399",
      areas: [
        "Forehead lines",
        "Crow's feet",
        "Frown lines",
        "Neck bands"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Filler & Botox Treatments</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance your natural beauty with our premium injectable treatments.
          Administered by certified medical professionals for safe, stunning results.
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
              <h3 className="font-semibold mb-3">Treatment Areas:</h3>
              <ul className="space-y-2">
                {treatment.areas.map((area, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{area}</span>
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

      <div className="bg-pink-50 rounded-xl p-8 mb-12">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-pink-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Important Information</h2>
            <p className="text-gray-700">
              All injectable treatments require a consultation first. During your consultation,
              our medical professionals will assess your needs, discuss your goals, and create
              a personalized treatment plan. Please note that results may vary, and we'll provide
              detailed aftercare instructions for optimal results.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">How long do results last?</h3>
            <p className="text-gray-600">Botox typically lasts 3-4 months, while fillers can last 6-18 months depending on the area and product used.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there any downtime?</h3>
            <p className="text-gray-600">Minimal downtime. Some patients experience mild swelling or bruising that resolves within a few days.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Are the treatments safe?</h3>
            <p className="text-gray-600">Yes, all our products are FDA-approved and treatments are performed by licensed medical professionals.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">When will I see results?</h3>
            <p className="text-gray-600">Fillers show immediate results, while Botox results develop over 5-7 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};