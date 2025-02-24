import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green-700 text-white text-sm py-2 px-4 flex justify-between items-center z-50">
      {/* Left Side - Contact */}
      <p className="hidden md:flex items-center space-x-4">
      <a href="tel:+1234567890" className="flex items-center space-x-4">
  <Phone size={18} className="text-gray-400" /> 
  <span className="text-gray-300"> Reach us on: +233 456 256 7890 </span>
  </a>
</p>
      {/* Right Side - Social Icons & Mail */}
      <div className="flex space-x-4">
        <Link to="#" className="hover:text-gray-300">
          <Facebook size={18} />
        </Link>
        <Link to="#" className="hover:text-gray-300">
          <Twitter size={18} />
        </Link>
        <Link to="#" className="hover:text-gray-300">
          <Instagram size={18} />
        </Link>
        <Link to="mailto:info@yourdomain.com" className="hover:text-gray-300">
          <Mail size={18} />
        </Link>
      </div>
    </div>
  );
};


export default TopBar;
