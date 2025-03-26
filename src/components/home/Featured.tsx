import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

const Featured = () => {
  const products = [
    {
      name: "Asaasehene Organic Fertilizer",
      image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485366/Picture6_bahgje.jpg",
      description: "Premium organic fertilizer for enhanced crop yield"
    },
    {
      name: "PestOff Organic Pesticide",
      image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485406/Picture19_xbu6ol.png",
      description: "Natural pest control solution for healthy crops"
    },
    {
      name: "Weedex Organic Weedicide",
      image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742851800/Weedwipe-1_os10a3.png",
      description: "Effective weed control without harmful chemicals"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Products
          </h2>
          <div className="inline-block h-1 w-20 bg-orange-600 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions for modern agriculture
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
          >
            More Products
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;