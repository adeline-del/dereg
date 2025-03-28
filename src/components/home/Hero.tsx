import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";


const slides = [
  {
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482531/lettuce_a7qkro.jpg",
    title: "Nurturing the Future of Agriculture",
    subtitle: "Leading the way in organic agrochemical solutions for sustainable farming practices."
  },
  {
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482635/watering_h2hwer.jpg",
    title: "Sustainable Farming Solutions",
    subtitle: "Innovative organic products that protect both crops and the environment."
  },
  {
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482579/rice-field_mrtsxa.jpg",
    title: "Expert Agricultural Support",
    subtitle: "Professional guidance and solutions for optimal farming results."
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle next slide
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 750);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 750);
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // <div className="pt-0">
       <div className="relative pb-16 md:pb-24"> 

      {/* Hero Section with Floating Slider */}
      <section id="home" className="relative h-screen overflow-hidden bg-black z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-750 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transform transition-transform duration-[1500ms]"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: isAnimating ? "scale(1.1)" : "scale(1)"
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div
                className={`text-white transition-all duration-500 transform ${isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                  }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">{slide.subtitle}</p>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-125" : "bg-white/50 scale-100"
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
        {/* <div className="absolute bottom-[-96px] left-0 w-full z-20 pointer-events-none">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,176C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div> */}




<div className="absolute bottom-[-50px] md:bottom-[-96px] left-0 w-full z-[30] pointer-events-none">
  <svg
    className="w-full min-h-[60px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      stroke="white"
      strokeWidth="1"
      fill="white"
      d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,176C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
</div>




        {/* SVG Simplified Curve placed at the bottom */}
        {/* <div className="absolute bottom-[-96px] left-0 w-full z-20 pointer-events-none">
  <svg
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="white"
      fillOpacity="1"
      d="M0,150 C100,50 500,200 1440,50 L1440,320 L0,320 Z"
    ></path>
  </svg>
</div>
 */}

      </section>
    </div>
  );
};

export default HeroSection;
