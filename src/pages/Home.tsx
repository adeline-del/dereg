import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Shield, Users, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Nurturing the Future of Agriculture",
    subtitle: "Leading the way in organic agrochemical solutions for sustainable farming practices."
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Sustainable Farming Solutions",
    subtitle: "Innovative organic products that protect both crops and the environment."
  },
  {
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Expert Agricultural Support",
    subtitle: "Professional guidance and solutions for optimal farming results."
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 750);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 750);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with Slider */}
      <section className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-750 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transform transition-transform duration-[1500ms]"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className={`text-white transition-all duration-500 transform ${
                isAnimating ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'
              }`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  Explore Our Products
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 scale-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 translate-y-10 animate-[fadeUp_1s_ease-out_forwards]">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We set the standard in organic agricultural solutions through innovation, 
              sustainability, and unwavering dedication to quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Eco-Friendly Solutions",
                description: "100% organic products that protect both crops and environment",
                delay: "100"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Quality Assured",
                description: "Rigorous testing and certification for all our products",
                delay: "300"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Support",
                description: "Dedicated team of agricultural experts at your service",
                delay: "500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0 translate-y-10"
                style={{
                  animation: `fadeUp 1s ease-out forwards ${feature.delay}ms`
                }}
              >
                <div className="text-center">
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <div className="text-green-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Products</h2>
            <p className="text-xl text-gray-600">Innovative solutions for modern agriculture</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Asaasehene Organic Fertilizer",
                image: "https://images.unsplash.com/photo-1592978132926-646f6ba65d39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Premium organic fertilizer for enhanced crop yield"
              },
              {
                name: "Weedex Organic Weedicide",
                image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Effective weed control without harmful chemicals"
              },
              {
                name: "PestOff Organic Pesticide",
                image: "https://images.unsplash.com/photo-1595880350477-e5f100d7a59d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Natural pest control solution for healthy crops"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    to="/products" 
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Agricultural Practice?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of farmers who trust Deregans for their agricultural needs
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Contact Us Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;