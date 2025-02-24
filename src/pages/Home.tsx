import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Shield, Users, ArrowLeft, ArrowRight as ArrowRightIcon, Award, Target, Heart, Book, FileText, Video, Download, MapPin, Phone, Mail, Clock, MessageSquare, Recycle, Droplets, Wind, Sprout } from 'lucide-react';
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
    <div className="pt-0">
      {/* Hero Section with Floating Slider */}
      <section id="home" className="relative h-screen overflow-hidden bg-gray-900 z-20">
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
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
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
      <div className="py-20 bg-white">
  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      { icon: <Award className="h-8 w-8" />, title: "Excellence", description: "We strive for excellence in every product and service." },
      { icon: <Users className="h-8 w-8" />, title: "Integrity", description: "We operate with honesty and uphold strong ethics." },
      { icon: <Target className="h-8 w-8" />, title: "Innovation", description: "We continuously innovate to improve agriculture." },
    ].map((value, index) => (
      <div key={index} className="group perspective">
        <div className="relative w-full h-48 transition-transform transform-style-3d group-hover:rotate-y-180">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg backface-hidden">
            <div className="text-green-600">{value.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-green-600 text-white rounded-lg shadow-lg rotate-y-180 backface-hidden">
            <p className="px-6 text-center">{value.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  <style>
    {`
      .perspective { perspective: 1000px; }
      .transform-style-3d { transform-style: preserve-3d; }
      .backface-hidden { backface-visibility: hidden; }
      .rotate-y-180 { transform: rotateY(180deg); }
    `}
  </style>
</div>


{/* </section> */}



      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Deregan Limited</h1>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima labore soluta voluptate adipisci dolores corrupti ipsam cum veniam iure suscipit ab natus autem, eum nam non quae ipsum voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum exercitationem incidunt numquam? Eos et numquam asperiores magni repellendus id dolorum pariatur adipisci commodi, culpa voluptates impedit, vel error in a.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Pioneering sustainable agriculture through innovative organic solutions since 2010. 
              We're committed to transforming farming practices while protecting our environment.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be Africa's leading provider of organic agricultural solutions, 
                fostering sustainable farming practices that benefit both people and planet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To develop and deliver innovative organic agricultural products that enhance 
                crop yields while maintaining ecological balance and promoting sustainable farming.
              </p>
            </div>
          </div>




          {/* features Section */}
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




      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Hub</h2>
            <p className="text-xl text-gray-600">
              Access our comprehensive collection of resources to enhance your understanding 
              of organic farming practices and sustainable agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Articles",
                description: "In-depth articles on organic farming practices"
              },
              {
                icon: <Book className="h-8 w-8" />,
                title: "Guides",
                description: "Step-by-step guides and tutorials"
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "Videos",
                description: "Visual demonstrations and training content"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <div className="text-green-600">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Latest Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Best Practices for Organic Farming",
                type: "article",
                description: "Learn about the latest techniques and methodologies in organic farming for maximum yield.",
                image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                date: "March 15, 2024",
                readTime: "10 min read"
              },
              {
                title: "Organic Pest Control Guide",
                type: "guide",
                description: "Comprehensive guide on managing pests using organic methods.",
                image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                date: "March 10, 2024",
                downloadUrl: "#"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={resource.image}
                      alt={resource.title}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-green-100 rounded-full">
                        <div className="text-green-600">
                          {resource.type === 'article' ? <FileText className="h-6 w-6" /> : <Book className="h-6 w-6" />}
                        </div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{resource.date}</span>
                      {resource.readTime && (
                        <span className="ml-2 text-sm text-gray-500">• {resource.readTime}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    {resource.downloadUrl ? (
                      <button className="inline-flex items-center text-green-600 hover:text-green-700">
                        <Download className="h-5 w-5 mr-2" />
                        Download Guide
                      </button>
                    ) : (
                      <button className="inline-flex items-center text-green-600 hover:text-green-700">
                        Read More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Sustainability</h2>
            <p className="text-xl text-gray-600">
              At Deregans, we believe in creating a sustainable future through 
              responsible agricultural practices and environmental stewardship.
            </p>
          </div>

          {/* Key Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          {/* Environmental Impact */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">123 Farming Street<br />Accra, Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+233 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@Deregans.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Chat with Us Via Whatsapp</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold">Live Chat Support</h3>
                      <p className="text-gray-600">
                        We are available to assist you with any inquiries. Thank you!
                      </p>
                      <button className="mt-2 text-green-600 hover:text-green-700 font-medium">
                        WHATSAPP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Agricultural Practice?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of farmers who trust Der Organic for their agricultural needs
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100"
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