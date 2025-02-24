import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-[35px] left-0 w-full bg-white/50 shadow-lg z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Deregan's</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/products', label: 'Products' },
              { path: '/resources', label: 'Resources' },
              { path: '/sustainability', label: 'Sustainability' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-lg font-medium text-gray-600 hover:text-green-200 transition-colors ${
                  isActive('/') ? 'text-green-500' : ''
                }`}
              >
                {label}
                {isActive(path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform -translate-y-0.5" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors ${
                isActive('/contact') ? 'ring-2 ring-green-400' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-green-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/products', label: 'Products' },
              { path: '/resources', label: 'Resources' },
              { path: '/sustainability', label: 'Sustainability' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md ${
                  isActive(path)
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`block px-3 py-2 bg-green-600 text-white rounded-md ${
                isActive('/contact') ? 'ring-2 ring-green-400' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;