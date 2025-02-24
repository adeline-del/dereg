import React from 'react';
import { Leaf, Recycle, Droplets, Sun, Wind, Sprout } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Commitment to Sustainability</h1>
            <p className="text-xl max-w-3xl mx-auto">
              At Der Organic, we believe in creating a sustainable future through 
              responsible agricultural practices and environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Organic Farming",
                description: "Promoting chemical-free agriculture for healthier soil and crops"
              },
              {
                icon: <Recycle className="h-8 w-8" />,
                title: "Zero Waste",
                description: "Implementing closed-loop systems in our production processes"
              },
              {
                icon: <Droplets className="h-8 w-8" />,
                title: "Water Conservation",
                description: "Developing water-efficient farming solutions"
              }
            ].map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <div className="text-green-600">{initiative.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-gray-600">
              Making a measurable difference in environmental conservation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "50,000+",
                label: "Hectares of Land Preserved",
                icon: <Sprout className="h-6 w-6" />
              },
              {
                metric: "1M+",
                label: "Trees Planted",
                icon: <Leaf className="h-6 w-6" />
              },
              {
                metric: "30%",
                label: "Carbon Footprint Reduction",
                icon: <Wind className="h-6 w-6" />
              },
              {
                metric: "40M+",
                label: "Liters of Water Saved",
                icon: <Droplets className="h-6 w-6" />
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <div className="text-green-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Organic Transformation in Ghana",
                description: "How we helped 1000+ farmers transition to organic farming",
                image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Water Conservation Project",
                description: "Implementing drip irrigation systems for efficient water use",
                image: "https://images.unsplash.com/photo-1591634666540-c9a4b7f4b9a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                  <button className="mt-4 text-green-600 hover:text-green-700 font-medium">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">
              Recognized for our commitment to sustainable practices
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Organic Certified",
                icon: <Leaf className="h-12 w-12" />
              },
              {
                name: "ISO 14001",
                icon: <Sun className="h-12 w-12" />
              },
              {
                name: "Carbon Neutral",
                icon: <Wind className="h-12 w-12" />
              },
              {
                name: "Fair Trade",
                icon: <Sprout className="h-12 w-12" />
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <div className="text-green-600">{cert.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;