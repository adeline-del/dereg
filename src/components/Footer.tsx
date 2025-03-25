import { Link } from 'react-router-dom'; 
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-orange-600 text-white pt-24"> 
      {/* Curved Top Section */}
      {/* <div className="absolute top-[-50px] left-0 w-full overflow-hidden z-10">
        <svg
          className="w-full h-40" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
        >
          <path
            stroke="white"
            strokeWidth="1"
            fill="white"
            d="M0,96L60,85.3C120,75,240,53,332,69.3C480,85,600,139,720,176C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,332,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Deregans Limited</h3>
            <p className="text-white/90">
              Committed to sustainable agriculture through innovative organic solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/90 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/90 hover:text-white transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-white/90 hover:text-white transition-colors duration-200">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="text-white/90">+233 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="text-white/90">info@deregansorganic.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-white/90">Accra, Ghana</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/90">
            © {new Date().getFullYear()} Deregans Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
