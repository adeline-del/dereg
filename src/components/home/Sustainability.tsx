import React from 'react';
import { Droplet, Users, Sprout, Wind } from 'lucide-react';
import { FaLeaf } from 'react-icons/fa';



const Sustainability: React.FC = () => {
  return (
<section id="sustainability" className="relative py-20 bg-orange-50">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white z-0"></div>
  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-bl-full opacity-30 z-0"></div>
  <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-100 rounded-tr-full opacity-30 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Commitment to Sustainable Agriculture
          </h2>         
           <div className="inline-block h-1 w-20 bg-orange-600 mb-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            At Deragan's Limited, sustainability is at the heart of everything we do. We are committed to eco-friendly 
            farming practices that protect the environment while ensuring you get higher yields and healthier crops.
          </p>
        </div>

        {/* Sustainability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaLeaf className="h-8 w-8" />,
              title: "Promote Sustainable Farming",
              description: "Helping farmers adopt organic fertilizers and safe weed control solutions that protect both crops and the environment."
            },
            {
              icon: <Droplet className="h-8 w-8" />,
              title: "Protect Soil & Water",
              description: "Reducing chemical runoff and preserving soil fertility for future generations through organic solutions."
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Empower Farmers",
              description: "Providing training, resources, and innovative products for more productive, sustainable farming practices."
            }
          ].map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-orange-600"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Environmental Impact */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black border-l-4 border-orange-600 pl-4 mb-10">Our Environmental Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "50,000+",
                label: "Hectares of Land Preserved",
                icon: <Sprout className="h-6 w-6" />
              },
              {
                metric: "1M+",
                label: "Trees Planted",
                icon: <FaLeaf className="h-6 w-6" />
              },
              {
                metric: "30%",
                label: "Carbon Footprint Reduction",
                icon: <Wind className="h-6 w-6" />
              },
              {
                metric: "40M+",
                label: "Liters of Water Saved",
                icon: <Droplet className="h-6 w-6" />
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-orange-700 mb-2">{stat.metric}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sustainability;
