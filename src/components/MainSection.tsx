import React from "react";
import waxing from "../imgs/waxing.jpg";
import laser from "../imgs/laser.jpg";
import filler from "../imgs/filler.jpg";
export const MainSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Featured Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="text-center hover-lift">
              <img
                src={waxing}
                alt="Waxing"
                className="w-full h-64 object-cover rounded-lg mb-4 hover-scale"
              />
              <h3 className="text-xl font-semibold mb-2">Waxing</h3>
              <p className="text-gray-600">
                Advanced laser technology for permanent hair reduction
              </p>
            </div>
            <div className="text-center hover-lift">
              <img
                src={filler}
                alt="Filler & Botox"
                className="w-full h-64 object-cover rounded-lg mb-4 hover-scale"
              />
              <h3 className="text-xl font-semibold mb-2">Filler & Botox</h3>
              <p className="text-gray-600">
                Expert cosmetic treatments for natural-looking results
              </p>
            </div>
            <div className="text-center hover-lift">
              <img
                src={laser}
                alt="Diode laser"
                className="w-full h-64 object-cover rounded-lg mb-4 hover-scale"
              />
              <h3 className="text-xl font-semibold mb-2">Diode laser</h3>
              <p className="text-gray-600">
                Customized facials for radiant, healthy skin
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-12 animate-fade-in">
            Why Choose LuxeSpa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-children">
            <div className="p-6 bg-gray-50 rounded-lg hover-lift">
              <div className="text-pink-600 text-4xl font-bold mb-2 animate-float">
                10+
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-gray-600">
                Decade of excellence in beauty and wellness
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover-lift">
              <div className="text-pink-600 text-4xl font-bold mb-2 animate-float">
                50k+
              </div>
              <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
              <p className="text-gray-600">
                Satisfied customers who trust our services
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover-lift">
              <div className="text-pink-600 text-4xl font-bold mb-2 animate-float">
                15+
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Staff</h3>
              <p className="text-gray-600">
                Certified professionals at your service
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg hover-lift">
              <div className="text-pink-600 text-4xl font-bold mb-2 animate-float">
                20+
              </div>
              <h3 className="text-xl font-semibold mb-2">Services</h3>
              <p className="text-gray-600">
                Comprehensive beauty and wellness solutions
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="bg-gray-50 p-6 rounded-lg hover-lift">
              <p className="text-gray-600 mb-4">
                "Amazing experience! The staff was professional and the results
                exceeded my expectations."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover-lift">
              <p className="text-gray-600 mb-4">
                "Best spa in the city! Their facial treatments are absolutely
                fantastic."
              </p>
              <div className="font-semibold">Michael Chen</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover-lift">
              <p className="text-gray-600 mb-4">
                "Very satisfied with their hair removal services. Will
                definitely come back!"
              </p>
              <div className="font-semibold">Emma Davis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
