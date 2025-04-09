import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home'); 

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track active section
  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    
    if (location.pathname === '/products' && section !== 'products') {
      // If we're on products page and clicking a home page section
      navigate('/', { state: { scrollTo: section } });
    } else if (location.pathname === '/') {
      // If we're on home page
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle scroll to section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const section = location.state.scrollTo;
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  // Update active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'sustainability', 'contact'];
      const navHeight = 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight && rect.bottom >= navHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Reset active section when route changes
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection(location.state?.scrollTo || 'home');
    } else if (location.pathname === '/products') {
      setActiveSection('products');
    }
  }, [location.pathname, location.state]);

  return (
    <nav className="fixed top-[35px] left-0 w-full bg-white/50 shadow-lg z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
        <Link to="/" className="flex items-center -ml-10">
        <img 
           src="https://res.cloudinary.com/djfnmztu9/image/upload/v1740753495/logo-nobg_lggtzj.png" 
            alt="Logo"
            className="h-20 w-40 object-contain" 
         />
    <span className="text-3xl font-bold text-black -ml-14">Deregan's</span>
    </Link>
        </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={() => handleLinkClick('home')}
              className={`text-lg font-medium text-black hover:text-orange-200 transition-colors ${
              activeSection === 'home' ? 'active-link' : ''
              }`}
            >
              Home
              {activeSection === 'home' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform -translate-y-0.5" />}
            </Link>
            <button
              onClick={() => handleLinkClick('about')}
              className={`relative text-lg font-medium text-black hover:text-orange-200 transition-colors`}
            >
              About Us
              {activeSection === 'about' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform -translate-y-0.5" />}
            </button>
            <Link
              to="/products"
              onClick={() => handleLinkClick('products')}
              className={`relative text-lg font-medium text-black hover:text-orange-200 transition-colors ${
                activeSection === 'products' ? 'text-orange-500' : ''
              }`}
            >
              Products
              {activeSection === 'products' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform -translate-y-0.5" />}
            </Link>
            {/* <button
              onClick={() => handleLinkClick('resources')}
              className={`relative text-lg font-medium text-black hover:text-orange-200 transition-colors`}
            >
              Resources
              {activeSection === 'resources' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform -translate-y-0.5" />}
            </button> */}
            <button
              onClick={() => handleLinkClick('sustainability')}
              className={`relative text-lg font-medium text-black hover:text-orange-200 transition-colors`}
            >
              Sustainability
              {activeSection === 'sustainability' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform -translate-y-0.5" />}
            </button>
            <button
              onClick={() => {
                handleLinkClick('contact');
              }}
              className={`bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors ${
                activeSection === 'contact' ? 'ring-2 ring-orange-400' : ''
              }`}
            >
              Contact Us
            </button>
              {/* <button
              onClick={() => handleLinkClick('contact')}
              className={`relative text-lg font-medium text-black hover:text-orange-200 transition-colors`}
            >
              Contact Us
              {activeSection === 'contact' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform -translate-y-0.5" />}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black hover:text-orange-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => {
                handleLinkClick('home');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-black hover:text-orange-600"
            >
              Home
            </Link>
            <button
              onClick={() => {
                handleLinkClick('about');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-black hover:text-orange-600"
            >
              About Us
            </button>
            <Link
              to="/products"
              onClick={() => {
                handleLinkClick('products');
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-md ${
                activeSection === 'products' ? 'bg-orange-50 text-orange-600' : 'text-black hover:text-orange-600'
              }`}
            >
              Products
            </Link>
            {/* <button
              onClick={() => {
                handleLinkClick('resources');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-black hover:text-orange-600"
            >
              Resources
            </button> */}
            <button
              onClick={() => {
                handleLinkClick('sustainability');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-black hover:text-orange-600"
            >
              Sustainability
            </button>
            <button
              onClick={() => {
                handleLinkClick('contact');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;