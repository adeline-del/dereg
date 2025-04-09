import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-orange-600 text-white">
  {/* Curved Top Section Positioned Above Footer */}
  <div className="absolute top-[-1px] left-0 w-full overflow-hidden z-10 transform translate-y-[-98%]">
    <svg
      className="w-full h-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        stroke="#ea580c"
        strokeWidth="1"
        fill="#ea580c"
        d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,176C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>

  {/* Footer Content*/}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-6">
      {/* Company Info */}
      <div>
        <h3 className="text-lg font-bold mb-4">Deregans Limited</h3>
        <p className="text-sm text-white/90">
          Committed to sustainable agriculture through innovative organic solutions.
        </p>
      </div>
      
      {/* Quick Links */}
      <div>
        <h4 className="text-base font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/about" className="text-white/90 hover:text-white">About Us</Link></li>
          <li><Link to="/products" className="text-white/90 hover:text-white">Products</Link></li>
          {/* <li><Link to="/resources" className="text-white/90 hover:text-white">Resources</Link></li> */}
          <li><Link to="/sustainability" className="text-white/90 hover:text-white">Sustainability</Link></li>
        </ul>
      </div>
      
      {/* Contact Info */}
      <div className="mt-6">
        <h4 className="text-base font-semibold mb-4">Contact Info</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+233202647141" className="text-white/90 hover:text-white">+233 20 264 7141</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:adelineackun@gmail.com" className="text-white/90 hover:text-white">info@deregansorganic.com</a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">
              Accra, Ghana
            </a>
          </li>
        </ul>
      </div>
      
      {/* Follow Us */}
      <div className="mt-6">
        <h4 className="text-base font-semibold mb-4">Follow Us</h4>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/login" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
    
    {/* Copyright Section */}
    <div className="mt-10 pt-4 border-t border-white/20 text-center">
      <p className="text-xs text-white/90">
        © {new Date().getFullYear()} Deregans Limited. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
