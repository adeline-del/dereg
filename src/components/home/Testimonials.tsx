import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ama Osei",
    role: "Cocoa Farmer, Western Region",
    content:
      "Since switching to Deregans' organic fertilizers, my cocoa yields have increased by 30% while soil health has visibly improved. Their sustainable approach has transformed my farm.",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485336/fruit-3247447_1920_bz3klj.jpg",
  },
  {
    id: 2,
    name: "Francis Mensah",
    role: "Vegetable Farmer, Ashanti Region",
    content:
      "The organic pest control solutions from Deregans have eliminated harmful chemicals from my vegetable farm. My produce is healthier, and I've seen beneficial insects return to my fields.",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482531/farm_iu4rks.jpg",
  },
  {
    id: 3,
    name: "Kwame Addo",
    role: "Rice Farmer, Volta Region",
    content:
      "They provide top-quality organic agrochemicals and have excellent customer service. We highly recommend them.",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485417/rice-testi_gmwkxn.jpg",
  },
  {
    id: 4,
    name: "Ama Boateng",
    role: "Tomato Farmer, Eastern Region",
    content:
      "Since we switched to Deregan’s organic weed control, the weeds are better controlled, compared to other products we’ve used.",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482530/cultivation_bnucy5.jpg",
  },
  {
    id: 5,
    name: "Yaw Antwi",
    role: "Millet Farmer, Northern Region",
    content:
      "I've reduced chemical use by 40% while increasing my harvest. This is the best investment I've made for my farm!",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482530/mill_tnlxnu.jpg",
  },
  {
    id: 5,
    name: "Hammed Mumuni",
    role: "Cocoyam Farmer, Northern Region",
    content:
      "We’ve been using Deragan’s organic fertilizers for a while, and the results have been amazing. Our cocoyams are bigger and of higher quality. I have already started recommending them.",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742909465/yam-5318942_1280_pfltbd.jpg",
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-[-80px] z-[10] bg-white">
  
{/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-[5] bg-white"> */}
<div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold  text-black mt-2 mb-6">
        {/* <h1 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6"> */}

          What Farmers Say About Us
        </h1>
        <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {testimonials.map((testimonial, i) => {
            const isActive = i === index;

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 20,
                  scale: isActive ? 1 : 0.95,
                  zIndex: isActive ? 1 : 0,
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute w-full max-w-2xl mx-auto ${
                  isActive ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div className="bg-orange-200 rounded-2xl shadow-xl p-8 md:p-10">
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-orange-600 object-cover mb-6"
                    />
                    <p className="text-gray-700 text-lg md:text-xl italic mb-6 text-center leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-bold text-xl text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <div className="absolute bottom-[-3rem] left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-orange-600 w-8"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;