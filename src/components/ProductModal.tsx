import React, { useEffect } from 'react';
import { X, Check, Sprout } from 'lucide-react';

interface ProductModalProps {
  product: {
    name: string;
    description: string;
    price: number;
    size: string;
    benefits: string[];
    application: string;
    image: string;
  };
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" aria-hidden="true" />

        <div 
          className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
            title="Close modal"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full">
                ₵{product.price.toLocaleString()}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600">{product.description}</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sprout className="h-5 w-5 text-orange-600" />
                  <h4 className="font-semibold text-gray-900">Product Details</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium text-gray-900">{product.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Application</p>
                    <p className="font-medium text-gray-900">{product.application}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Purchase product"
                >
                  Purchase Now
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  aria-label="Cancel purchase"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;