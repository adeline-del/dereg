import React, { useState, useMemo } from 'react';
import { Filter, ArrowRight } from 'lucide-react';
import ProductModal from '../components/ProductModal';

type Product = {
  id: number;
  name: string;
  type: string;
  size: string;
  price: number;
  description: string;
  image: string;
  benefits: string[];
  application: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Asaasehene Organic Fertilizer",
    type: "Fertilizer",
    size: "5kg",
    price: 299.99,
    description: "Premium organic fertilizer for enhanced crop yield",
    image: "https://images.unsplash.com/photo-1592978132926-646f6ba65d39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: ["Improves soil structure", "Enhances nutrient retention", "Promotes root development"],
    application: "Apply 2-3 times during growing season"
  },
  {
    id: 2,
    name: "Asaasehene Organic Fertilizer",
    type: "Fertilizer",
    size: "10kg",
    price: 549.99,
    description: "Premium organic fertilizer for enhanced crop yield",
    image: "https://images.unsplash.com/photo-1592978132926-646f6ba65d39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: ["Improves soil structure", "Enhances nutrient retention", "Promotes root development"],
    application: "Apply 2-3 times during growing season"
  },
  {
    id: 3,
    name: "Weedex Organic Weedicide",
    type: "Weedicide",
    size: "1L",
    price: 179.99,
    description: "Effective weed control without harmful chemicals",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: ["Fast-acting formula", "No residual effects", "Safe for crops"],
    application: "Spray directly on weeds"
  },
  {
    id: 4,
    name: "Weedex Organic Weedicide",
    type: "Weedicide",
    size: "5L",
    price: 799.99,
    description: "Effective weed control without harmful chemicals",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: ["Fast-acting formula", "No residual effects", "Safe for crops"],
    application: "Spray directly on weeds"
  },
  {
    id: 5,
    name: "PestOff Organic Pesticide",
    type: "Pesticide",
    size: "500ml",
    price: 119.99,
    description: "Natural pest control solution for healthy crops",
    image: "https://images.unsplash.com/photo-1595880350477-e5f100d7a59d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: ["Broad spectrum control", "No harmful residues", "Safe for beneficial insects"],
    application: "Apply weekly during pest season"
  },
  {
    id: 6,
    name: "PestOff Organic Pesticide",
    type: "Pesticide",
    size: "2L",
    price: 429.99,
    description: "Natural pest control solution for healthy crops",
    image: "https://images.unsplash.com/photo-1595880350477-e5f100d7a59d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: ["Broad spectrum control", "No harmful residues", "Safe for beneficial insects"],
    application: "Apply weekly during pest season"
  }
];

const Products = () => {
  const [filters, setFilters] = useState({
    type: '',
    size: '',
    priceRange: ''
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const types = [...new Set(products.map(product => product.type))];
  const sizes = [...new Set(products.map(product => product.size))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const typeMatch = !filters.type || product.type === filters.type;
      const sizeMatch = !filters.size || product.size === filters.size;
      const priceMatch = !filters.priceRange || (
        filters.priceRange === 'under300' ? product.price < 300 :
        filters.priceRange === '300to600' ? (product.price >= 300 && product.price <= 600) :
        product.price > 600
      );
      return typeMatch && sizeMatch && priceMatch;
    });
  }, [filters]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl">
            Discover our range of organic agricultural solutions designed to enhance 
            your farming practices while protecting the environment.
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-green-600 mr-2" />
              <h2 className="text-lg font-semibold">Filter Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={filters.type}
                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                className="border rounded-md p-2"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={filters.size}
                onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))}
                className="border rounded-md p-2"
              >
                <option value="">All Sizes</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                className="border rounded-md p-2"
              >
                <option value="">All Prices</option>
                <option value="under300">Under ₵300</option>
                <option value="300to600">₵300 - ₵600</option>
                <option value="over600">Over ₵600</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-2">{product.description}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      ₵{product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Type: </span>
                    <span className="text-sm text-gray-900">{product.type}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm font-medium text-gray-500">Size: </span>
                    <span className="text-sm text-gray-900">{product.size}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;