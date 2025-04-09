import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-orange-600 text-black text-sm py-2 px-4 flex justify-between items-center z-50">
      {/* Left Side - Contact */}
      <p className="hidden md:flex items-center space-x-4">
        <a href="tel:+233202647141" className="flex items-center space-x-4">
          <Phone size={18} className="text-black" /> 
          <span className="text-black"> Reach us on: +233 456 256 7890 </span>
        </a>
      </p>
      {/* Right Side - Social Icons & Mail */}
      <div className="flex space-x-4">
        <Link to="https://www.facebook.com/" className="hover:text-gray-300">
          <Facebook size={18} />
        </Link>
        <Link to="https://wa.me/233202647141" className="hover:text-gray-300">
          <MessageCircle size={18} />
        </Link>
        <Link to="https://www.instagram.com/" className="hover:text-gray-300">
          <Instagram size={18} />
        </Link>
        <Link to="mailto:adelineackun@gmail.com" className="hover:text-gray-300">
          <Mail size={18} />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
