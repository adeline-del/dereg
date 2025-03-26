import { Award, Leaf, Shrub, Sprout, Shield, Users } from "lucide-react";

const About = () => {
  return (
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
                  At Deregan's Limited, we are passionate about providing organic, eco-friendly agrochemical solutions that improve crop yields, preserve soil health, and support long-term sustainability.
                </p>
              </div>
              <div className="h-full">
                <img 
                  src="https://res.cloudinary.com/djfnmztu9/image/upload/v1742485422/tomatoes-1561565_1280_k7o7tf.jpg" 
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
          <h2 className="text-3xl font-bold text-black mb-6">Why Choose Deregan’s Limited?</h2>
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
  );
};

export default About;
