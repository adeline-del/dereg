"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Shield, Users, ArrowLeft, ArrowRight as ArrowRightIcon, Award, Target, Shrub,  MapPin, Phone, Mail, MessageSquare, Droplets, Wind, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FileText, Book, Download,BookOpen,Calendar,Clock,Zap, X,Quote, ChevronRight } from 'lucide-react';



const slides = [
  {
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1740671181/slider.-1jpg_ai3etc.jpg",
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

// interface Resource {
//   title: string;
//   type: string;
//   description: string;
//   fullDescription?: string;
//   image: string;
//   date: string;
//   readTime?: string;
// }



const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState<Resource | null>(null);


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


  const coreValues = [
    { icon: <Award className="h-6 w-6" />, title: "Excellence", description: "We strive for excellence in every product and service." },
    { icon: <Users className="h-6 w-6" />, title: "Integrity", description: "We operate with honesty and uphold strong ethics." },
    { icon: <Target className="h-6 w-6" />, title: "Innovation", description: "We continuously innovate to improve agriculture." },
  ];


  
  const resources = [
    {
      id: 1,
      title: "Best Practices for Organic Farming",
      type: "article",
      description: "Learn about the latest techniques and methodologies in organic farming for maximum yield.",
      fullContent: "Organic farming is a holistic approach to agriculture that focuses on sustainability, soil health, and ecological balance. By avoiding synthetic fertilizers and pesticides, organic farmers work with nature rather than against it.\n\nIn this comprehensive guide, we explore the most effective techniques for organic farming, including crop rotation, composting, natural pest management, and water conservation. These practices not only produce healthier crops but also contribute to long-term soil fertility and environmental health.\n\nKey practices covered:\n- Building healthy soil through composting and green manures\n- Natural pest management strategies using beneficial insects\n- Water conservation techniques for sustainable irrigation\n- Crop rotation planning for optimal soil health\n- Organic certification requirements and processes\n\nBy implementing these best practices, farmers can achieve comparable yields to conventional farming while building healthier ecosystems and producing nutrient-dense foods that command premium prices in the marketplace.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      readTime: "10 min read"
    },
    {
      id: 2,
      title: "Organic Pest Control Guide",
      type: "guide",
      description: "Comprehensive guide on managing pests using organic methods.",
      fullContent: "Effective pest management is crucial for successful organic farming. This guide provides detailed strategies for controlling common agricultural pests without resorting to synthetic chemicals.\n\nWe cover integrated pest management (IPM) approaches that combine preventive measures, biological controls, and organic treatments to maintain ecological balance while protecting crops.\n\nTopics include:\n- Identifying common crop pests and their life cycles\n- Preventive measures including crop rotation and companion planting\n- Beneficial insects and how to attract them to your farm\n- Organic treatments and their appropriate applications\n- Monitoring techniques to catch problems early\n\nWith proper implementation of these organic pest control methods, farmers can effectively manage pest populations while maintaining the integrity of their organic production systems and protecting beneficial organisms in the farm ecosystem.",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Soil Health Management",
      type: "article",
      description: "Discover how to maintain and improve your soil's health for better crop yields.",
      fullContent: "Healthy soil is the foundation of successful organic farming. This comprehensive article explores the key principles and practices of soil health management for sustainable agriculture.\n\nWe delve into the biological, chemical, and physical properties of soil and how they interact to create a living ecosystem that supports plant growth. Understanding this complex system is essential for making informed management decisions.\n\nThe article covers:\n- Soil testing and interpretation of results\n- Building organic matter through cover crops and compost\n- Managing soil pH and nutrient availability\n- Minimizing soil disturbance to protect soil structure\n- Maintaining living roots throughout the growing season\n- Maximizing biodiversity both above and below ground\n\nBy implementing these soil health principles, farmers can build resilient agricultural systems that require fewer external inputs while producing abundant, nutritious crops year after year.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Water Conservation in Farming",
      type: "article",
      description: "Essential techniques for efficient water usage in agricultural operations.",
      fullContent: "Water is a precious resource, and efficient water management is becoming increasingly critical for sustainable agriculture. This article presents practical approaches to water conservation that can be implemented on farms of any size.\n\nWe explore both traditional wisdom and modern innovations in irrigation and water management, with a focus on techniques that are accessible to farmers in diverse contexts.\n\nKey topics include:\n- Soil moisture monitoring tools and techniques\n- Efficient irrigation systems and scheduling\n- Rainwater harvesting and storage methods\n- Drought-resistant crop varieties and planting strategies\n- Landscape design for water retention and reduced runoff\n\nBy adopting these water conservation practices, farmers can reduce their water usage, lower costs, and build resilience against drought conditions while maintaining productive agricultural systems.",
      image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "February 28, 2024",
      readTime: "7 min read"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Samuel Osei",
      role: "Cocoa Farmer, Western Region",
      content: "Since switching to Derigans' organic fertilizers, my cocoa yields have increased by 30% while soil health has visibly improved. Their sustainable approach has transformed my farm.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Abena Mensah",
      role: "Vegetable Farmer, Ashanti Region",
      content: "The organic pest control solutions from Derigans have eliminated harmful chemicals from my vegetable farm. My produce is healthier, and I've seen beneficial insects return to my fields.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Kwame Addo",
      role: "Rice Farmer, Volta Region",
      content: "Derigans' commitment to sustainability goes beyond their products. Their training programs have equipped me with knowledge that will benefit my land for generations to come.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];


  return (
    <div className="pt-0">
      {/* Hero Section with Floating Slider */}
      <section id="home" className="relative h-screen overflow-hidden bg-black z-20">
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
            

                {/* Content */}
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
                  className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        
        {/* Slider Controls */}
        <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-center items-center gap-4">
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
        


  {/* SVG Wave placed at the bottom */}
  <div className="absolute bottom-[-95px] left-0 w-full z-10 pointer-events-none">
  <svg 
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320"
  >
    <path fill="white" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,176C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg>
</div>

      </section>







      {/* Values Section */}
      {/* <section className="py-20 bg-white"> */}
      <div className="mt-12">
      <div className="mt-12 relative z-20 px-6 md:px-12 lg:px-20">
      {/* <div className="mt-12 relative z-20 px-6 md:px-12 lg:px-20 overflow-hidden"> */}

  
  {/* This section will be positioned correctly above the wave effect */}
  {/* <h2 className="text-3xl font-bold text-black mb-8 text-center">
    Core Values
  </h2> */}

<motion.div 
    className="flex flex-wrap justify-center items-center gap-14 pb-16 md:pb-24 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl shadow-md p-4 w-full max-w-[200px] border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="text-orange-600">{value.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{value.title}</h3>
            <p className="text-center text-sm text-gray-700">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
        </div>




{/* About Section */}
      <section id="about" className="py-2 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-bl-full opacity-30 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-100 rounded-tr-full opacity-30 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <span className="text-sm font-semibold text-orange-600 tracking-wider uppercase">Since 2010</span>
              <h1 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6">
                About <span className="text-orange-600">Deregan's</span>
              </h1>
              <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
            </div>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mt-8 leading-relaxed">
              Pioneering sustainable agriculture through innovative organic solutions. We're committed to transforming farming practices while protecting our environment.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-center text-3xl font-bold text-black mb-6"> Who We Are</h2>
                  <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                    At Deragan's Limited, we are passionate about providing organic, eco-friendly agrochemical solutions that improve crop yields, preserve soil health, and support long-term sustainability.
                  </p>
                  {/* <p className="text-gray-600 leading-relaxed">
                    Our journey began with a simple belief: farming should work with nature, not against it. Today, we're proud to be trusted by farmers across Africa who share our vision for a sustainable future.
                  </p> */}
                </div>
                <div className="h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Sustainable farming" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
         {/* Promise & Mission */}
<div className="text-center mb-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div className="group bg-white p-8 max-w-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-orange-500 flex flex-col min-h-[150px]">
  <div className="mb-4 p-3 bg-orange-50 rounded-full inline-block w-13 mx-auto">
  <Award className="h-7 w-7 text-orange-600" />
      </div>
      <h2 className="text-xl font-bold text-black mb-4">Our Promise</h2>
      <p className="text-lg text-gray-600 leading-relaxed flex-grow">
        We are dedicated to empowering farmers with innovative, sustainable solutions that enhance their productivity and ensure the health of the land for future generations.
      </p>
      <div className="w-0 group-hover:w-full h-1 bg-orange-500 mt-4 transition-all duration-500"></div>
    </div>

    <div className="group bg-white p-8 max-w-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-orange-500 flex flex-col min-h-[150px]">

    <div className="mb-4 p-3 bg-orange-50 rounded-full inline-block w-13 mx-auto">
    <Sprout className="h-7 w-7 text-orange-600" />
      </div>
      <h2 className="text-xl font-bold text-black mb-4">Our Mission</h2>
      <p className="text-lg text-gray-600 leading-relaxed flex-grow">
        To develop and deliver innovative organic agricultural products that enhance crop yields while maintaining ecological balance and promoting sustainable farming.
      </p>
      <div className="w-0 group-hover:w-full h-1 bg-orange-500 mt-4 transition-all duration-500"></div>
    </div>
  </div>
</div>

          
          {/* Our Promise */}
          {/* <div className="mb-24 bg-orange-600 rounded-2xl shadow-xl p-10 md:p-16 text-center text-white">
            <Award className="h-16 w-16 mx-auto mb-6 text-white opacity-90" />
            <h2 className="text-3xl font-bold mb-6">
              Our Promise: Highly Recommended by Farmers
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We are dedicated to empowering farmers with innovative, sustainable solutions that enhance their productivity and ensure the health of the land for future generations.
            </p>
          </div> */}
          
         {/* What We Offer */}
{/* What We Offer */}
<div className="text-center mb-16">
  <h2 className="text-3xl font-bold text-black mb-6">What We Offer</h2>
  <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
    Our organic fertilizers, weed control, and pest management solutions are carefully formulated to:
  </p>
  <ul className="text-xl text-gray-600 max-w-3xl mx-auto list-none pl-6 mb-8">
    <li className="flex items-center mb-4">
      <Leaf className="h-6 w-6 text-orange-600 mr-4" />
      Boost crop yield and quality for farmers.
    </li>
    <li className="flex items-center mb-4">
      <Sprout className="h-6 w-6 text-orange-600 mr-4" />
      Improve soil health and promote long-term sustainability.
    </li>
    <li className="flex items-center mb-4">
      <Shrub className="h-6 w-6 text-orange-600 mr-4" />
      Control weeds without harming the crops or environment.
    </li>
  </ul>
</div>


{/* Features Section */}
<div className="text-center mb-16">
  <h2 className="text-3xl font-bold text-black mb-6">Why Choose Deragan’s Limited?</h2>
  <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[ 
      {
        icon: <Leaf className="h-12 w-12" />,
        title: "Eco-Friendly Solutions",
        description: "100% organic products that protect both crops and the environment."
      },
      {
        icon: <Shield className="h-12 w-12" />,
        title: "Quality Assured",
        description: "Rigorous testing and certification for all our products."
      },
      {
        icon: <Users className="h-12 w-12" />,
        title: "Expert Support",
        description: "Dedicated team of agricultural experts at your service."
      }
    ].map((feature, index) => (
      <div
        key={index}
        className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-orange-50 mb-6 group-hover:bg-orange-600 transition-colors duration-300">
            <div className="text-orange-600 group-hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-600 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        </div>
      </section>




    

 {/* Featured Products Section */}
 <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Featured Products</h2>
            <p className="text-xl text-gray-600">Innovative solutions for modern agriculture</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Asaasehene Organic Fertilizer",
                image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1740671180/Picture16_itlyh2.jpg",
                description: "Premium organic fertilizer for enhanced crop yield"
              },
              {
                name: "Weedex Organic Weedicide",
                image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1740671180/Picture16_itlyh2.jpg",
                description: "Effective weed control without harmful chemicals"
              },
              {
                name: "PestOff Organic Pesticide",
                image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1740671180/Picture16_itlyh2.jpg",
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
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
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




      {/* Resources Section */}
       {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block h-1 w-20 bg-orange-600 mb-6"></div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Farming Resources & Organic Agrochemical Guides
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              At Derigans Ltd, we're more than just producers of organic farming products, we are your partner in sustainable agriculture. 
              Our resources provide practical tips on soil health, crop nutrition, weed management, and pest control.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <BookOpen className="h-6 w-6" />, title: "Farming Guides" },
              { icon: <Shield className="h-6 w-6" />, title: "Pest Control" },
              { icon: <Leaf className="h-6 w-6" />, title: "Soil Health" },
              { icon: <Zap className="h-6 w-6" />, title: "Crop Nutrition" }
            ].map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-all duration-300 cursor-pointer border-b-4 border-transparent hover:border-orange-600"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-600 text-white mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
            ))}
          </div>

          {/* Featured Resources Grid */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-black border-l-4 border-orange-600 pl-4">Featured Resources</h3>
              <button className="text-orange-700 hover:text-orange-800 font-medium flex items-center group">
                View all resources
                <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 relative">
                    <img
                      className="h-full w-full object-cover"
                      src={resource.image}
                      alt={resource.title}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        resource.type === 'article' ? 'bg-orange-100 text-orange-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {resource.type === 'article' ? 'Article' : 'Guide'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{resource.date}</span>
                        {resource.readTime && (
                          <>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{resource.readTime}</span>
                          </>
                        )}
                      </div>
                      {resource.downloadUrl ? (
                        <button className="inline-flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-300">
                          <Download className="h-4 w-4 mr-2" />
                          Download Guide
                        </button>
                      ) : (
                        <button 
                          onClick={() => setSelectedResource(resource)}
                          className="inline-flex items-center justify-center px-4 py-2 border border-orange-600 text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-300"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block h-1 w-20 bg-orange-600 mb-6"></div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Our Commitment to Sustainable Agriculture
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              At Deragan's Limited, sustainability is at the heart of everything we do. We are committed to eco-friendly 
              farming practices that protect the environment while ensuring you get higher yields and healthier crops.
            </p>
          </div>

          {/* Sustainability Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Promote Sustainable Farming",
                description: "Helping farmers adopt organic fertilizers and safe weed control solutions that protect both crops and the environment."
              },
              {
                icon: <Droplets className="h-8 w-8" />,
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

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-black border-l-4 border-orange-600 pl-4 mb-10">What Farmers Say About Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative"
                >
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-orange-100" />
                  <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-600"
                    />
                    <div>
                      <h4 className="font-semibold text-black">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Let’s Work Together</h1>
          <p className="text-gray-600 mt-2">
            Have questions? Need advice on organic farming? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Have Questions? We’re Here to Help!</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="email"
                placeholder="Email Address (Optional)"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
              />
              
              <div className="space-y-2">
                <label className="font-semibold text-gray-700">Product of Interest:</label>
                <div className="flex flex-wrap gap-2">
                  {["Asaase Hene Fertilizer", "WeedWipe Weedicide", "PestOff Pesticide", "General Inquiry"].map((product) => (
                    <label key={product} className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox text-orange-600" />
                      <span>{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Message/Inquiry Details *"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
                required
              ></textarea>

              <button className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700">
                Send Enquiry
              </button>

              <p className="text-sm text-gray-500 mt-2">
                Thank you for reaching out! Our team will respond within 24-48 hours.
              </p>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-600 w-6 h-6" />
                  <p className="text-gray-700">+233 123 456 789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-600 w-6 h-6" />
                  <p className="text-gray-700">info@derigans.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-600 w-6 h-6" />
                  <p className="text-gray-700">123 Farming Street, Accra, Ghana</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/233123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
              >
                <MessageSquare className="mr-2" /> Chat on WhatsApp
              </a>
              <a
                href="https://goo.gl/maps/samplemap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
              >
                <MapPin className="mr-2" /> View on Google Maps
              </a>
            </div>

            {/* Find a Distributor CTA */}
            <div className="bg-orange-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-orange-700">Looking for a Distributor?</h3>
              <p className="text-sm text-gray-600">We have distributors across Ghana. Contact us to find one near you.</p>
              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                Find a Distributor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* CTA Section */}
      {/* <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Agricultural Practice?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of farmers who trust Der Organic for their agricultural needs
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-md hover:bg-gray-100"
          >
            Explore Our Products
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Home;