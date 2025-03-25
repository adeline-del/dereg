import { useState, useMemo } from 'react';
import { ArrowRight, Search, Package2, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import ImageSlider from '../components/ImageSlider';
import BackToTop from '../components/BackToTop';

type Product = {
  id: number;
  name: string;
  type: string;
  size: string;
  price: number;
  description: string;
  image: string;
  // images: string[];
  benefits: string[];
  application: string;
};

const products: Product[] = [
  {
    "id": 1,
    "name": "Asaase Hene Organic Fertilizer for Tuber",
    "type": "Fertilizer",
    "size": "30 kg",
    "price": 299.99,
    "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485347/Picture.JPG_jtekeu.png",
    "benefits": [
      "It yields organic foodstuffs and crops fast and naturally",
      "Increases quantity and quality of crop yields",
      "Improves soil quality naturally and fast",
      "No harmful effect on farmers, crops and the soil"
    ],
    "application": "Apply 2-3 times during the growing season"
  },
  

 
  {
    "id": 2,
    "name": "Asaasehene Organic Fertilizer for Vegetables",
    "type": "Fertilizer",
    "size": "30 kg",
    "price": 549.99,
    "description": "Premium organic fertilizer for enhanced crop yield",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1740671180/Picture19_-1_dk3d7w.jpg",
    "benefits": [
        "Improves soil structure",
        "Enhances nutrient retention",
        "Promotes root development"
    ],
    "application": "Apply 2-3 times during the growing season"
},
{
  "id": 3,
  "name": "Asaase Hene Organic Fertilizer for Fruits",
  "type": "Fertilizer",
  "size": "25 Liters",
  "price": 299.99,
  "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485381/Picture10_hrbapt.png",
  "benefits": [
    "It yields organic foodstuffs and crops fast and naturally",
    "Increases quantity and quality of crop yields",
    "Improves soil quality naturally and fast",
    "No harmful effect on farmers, crops and the soil"
  ],
  "application": "Apply 2-3 times during the growing season"
}, 
{
    "id": 4,
    "name": "Weedex Organic Weedicide",
    "type": "Weedicide",
    "size": "25 Liters",
    "price": 179.99,
    "description": "Effective weed control without harmful chemicals",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742851800/Weedwipe-1_os10a3.png",
    "benefits": [
      "Fast-acting formula", 
      "No residual effects", 
      "Safe for crops"
    ],
    "application": "Spray directly on weeds"
  },
 {
  "id": 5,
  "name": "Asaase Hene Organic Fertilizer for Fruits",
  "type": "Fertilizer",
  "size": "30 kg",
  "price": 299.99,
  "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485370/Picture-7.1_nqx3fg.png",
  "benefits": [
    "It yields organic foodstuffs and crops fast and naturally",
    "Increases quantity and quality of crop yields",
    "Improves soil quality naturally and fast",
    "No harmful effect on farmers, crops and the soil"
  ],
  "application": "Apply 2-3 times during the growing season"
},{
  "id": 6,
  "name": "Asaasehene Organic Fertilizer for Vegetables",
  "type": "Fertilizer",
  "size": "5 Liters",
  "price": 549.99,
  "description": "Premium organic fertilizer for enhanced crop yield",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485375/Picture8_z1h4z6.jpg",
  "benefits": [
      "Improves soil structure",
      "Enhances nutrient retention",
      "Promotes root development"
  ],
  "application": "Apply 2-3 times during the growing season"
},



  {
    "id": 7,
    "name": "Asaase Hene Organic Fertilizer for Tuber",
    "type": "Fertilizer",
    "size": "1 Liters",
    "price": 299.99,
    "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482532/Picture-5_rljr27.png",
    "benefits": [
      "It yields organic foodstuffs and crops fast and naturally",
      "Increases quantity and quality of crop yields",
      "Improves soil quality naturally and fast",
      "No harmful effect on farmers, crops and the soil"
    ],
    "application": "Apply 2-3 times during the growing season"
  },
  {
  "id": 8,
  "name": "Asaasehene Organic Fertilizer for Vegetables",
  "type": "Fertilizer",
  "size": "25 Liters",
  "price": 549.99,
  "description": "Premium organic fertilizer for enhanced crop yield",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485366/Picture6_bahgje.jpg",
  "benefits": [
      "Improves soil structure",
      "Enhances nutrient retention",
      "Promotes root development"
  ],
  "application": "Apply 2-3 times during the growing season"
},
{
  "id": 9,
  "name": "Asaase Hene Organic Fertilizer for Fruits",
  "type": "Fertilizer",
  "size": "5 Liters",
  "price": 299.99,
  "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485376/Picture9.1_mlybvy.png",
  "benefits": [
    "It yields organic foodstuffs and crops fast and naturally",
    "Increases quantity and quality of crop yields",
    "Improves soil quality naturally and fast",
    "No harmful effect on farmers, crops and the soil"
  ],
  "application": "Apply 2-3 times during the growing season"
},
  {
  "id": 10,
  "name": "PestOff Organic Pesticide",
  "type": "Pesticide",
  "size": "1L",
  "price": 429.99,
  "description": "Natural pest control solution for healthy crops.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485410/Picture20_prajo8.png",
  "benefits": [
    "Broad spectrum control",
    "No harmful residues",
    "Safe for beneficial insects"
  ],
  "application": "Apply weekly during pest season. Detailed usage instructions coming soon."
}, 
{
"id": 11,
"name": "Asaase Hene Organic Fertilizer for Cereal",
"type": "Fertilizer",
"size": "30 kg",
"price": 299.99,
"description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
"image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1740671180/Picture14_djxeqf.jpg",
"benefits": [
  "It yields organic foodstuffs and crops fast and naturally",
  "Increases quantity and quality of crop yields",
  "Improves soil quality naturally and fast",
  "No harmful effect on farmers, crops and the soil"
],
"application": "Apply 2-3 times during the growing season"
},
   
   {
  "id": 12,
  "name": "Asaase Hene Organic Fertilizer for Tuber",
  "type": "Fertilizer",
  "size": "1 Liters",
  "price": 299.99,
  "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485386/Picture12_lkyxez.png",
  "benefits": [
    "It yields organic foodstuffs and crops fast and naturally",
    "Increases quantity and quality of crop yields",
    "Improves soil quality naturally and fast",
    "No harmful effect on farmers, crops and the soil"
  ],
  "application": "Apply 2-3 times during the growing season"
},
{
  "id": 13,
  "name": "PestOff Organic Pesticide",
  "type": "Pesticide",
  "size": "5 Liters",
  "price": 119.99,
  "description": "Natural pest control solution for healthy crops.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485400/Picture17_krtebj.png",
  "benefits": [
    "Broad spectrum control",
    "No harmful residues",
    "Safe for beneficial insects"
  ],
  application: "Apply weekly during pest season. Detailed usage instructions coming soon."
},

{
    "id": 14,
    "name": "Asaase Hene Organic Fertilizer for Tuber",
    "type": "Fertilizer",
    "size": "5 kg",
    "price": 299.99,
    "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485363/Picture-4_j61xaz.png",
    "benefits": [
      "It yields organic foodstuffs and crops fast and naturally",
      "Increases quantity and quality of crop yields",
      "Improves soil quality naturally and fast",
      "No harmful effect on farmers, crops and the soil"
    ],
    "application": "Apply 2-3 times during the growing season"
  },
{
"id": 15,
"name": "Asaase Hene Organic Fertilizer for Cereal",
"type": "Fertilizer",
"size": "5 Liters",
"price": 299.99,
"description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
"image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485386/Picture13.1_yqocyi.png",
"benefits": [
  "It yields organic foodstuffs and crops fast and naturally",
  "Increases quantity and quality of crop yields",
  "Improves soil quality naturally and fast",
  "No harmful effect on farmers, crops and the soil"
],
"application": "Apply 2-3 times during the growing season"
},

{
"id": 16,
"name": "Asaase Hene Organic Fertilizer for Cereal",
"type": "Fertilizer",
"size": "25 Liters",
"price": 299.99,
"description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
"image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485394/Picture16_a4wfqz.jpg",
"benefits": [
  "It yields organic foodstuffs and crops fast and naturally",
  "Increases quantity and quality of crop yields",
  "Improves soil quality naturally and fast",
  "No harmful effect on farmers, crops and the soil"
],
"application": "Apply 2-3 times during the growing season"
},
{
  "id": 17,
  "name": "Asaasehene Organic Fertilizer for Vegetables",
  "type": "Fertilizer",
  "size": "5 kg",
  "price": 549.99,
  "description": "Premium organic fertilizer for enhanced crop yield",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485382/Picture12_gfgwvj.jpg",
  "benefits": [
      "Improves soil structure",
      "Enhances nutrient retention",
      "Promotes root development"
  ],
  "application": "Apply 2-3 times during the growing season"
},
{
"id": 18,
"name": "Asaase Hene Organic Fertilizer for Cereal",
"type": "Fertilizer",
"size": "5 kg",
"price": 299.99,
"description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
"image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485394/Picture15_vx6yvk.png",
"benefits": [
  "It yields organic foodstuffs and crops fast and naturally",
  "Increases quantity and quality of crop yields",
  "Improves soil quality naturally and fast",
  "No harmful effect on farmers, crops and the soil"
],
"application": "Apply 2-3 times during the growing season"
}, 
 {
  "id": 19,
  "name": "Asaasehene Organic Fertilizer for Vegetables",
  "type": "Fertilizer",
  "size": "1 Liter",
  "price": 549.99,
  "description": "Premium organic fertilizer for enhanced crop yield",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485369/Picture-6_pajt0i.png",
  "benefits": [
      "Improves soil structure",
      "Enhances nutrient retention",
      "Promotes root development"
  ],
  "application": "Apply 2-3 times during the growing season"
},
 {
    id: 20,
    name: "WeedWipe Organic Weedicide",
    type: "Weedicide",
    size: "5 Liters",
    price: 399.99,
    description: "Say goodbye to stubborn weeds with WeedWipe, an effective, organic weedicide for farms in Ghana. Safe, eco-friendly, and powerful.",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742851800/Weedwipe-2_ny6tur.png",
    benefits: [
      "Eliminates weeds without harming crops",
      "Made from natural, plant-based ingredients",
      "Preserves soil health and promotes sustainable farming"
    ],
    application: "Apply early in the morning or late afternoon for best results. Dilute as per recommended ratio."
  },
  {
"id": 21,
"name": "Asaase Hene Organic Fertilizer for Cereal",
"type": "Fertilizer",
"size": "1 Liters",
"price": 299.99,
"description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
"image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485395/Picture16_ohkxoo.png",
"benefits": [
  "It yields organic foodstuffs and crops fast and naturally",
  "Increases quantity and quality of crop yields",
  "Improves soil quality naturally and fast",
  "No harmful effect on farmers, crops and the soil"
],
"application": "Apply 2-3 times during the growing season"
},

 
  {
  "id": 22,
  "name": "Asaase Hene Organic Fertilizer for Fruits",
  "type": "Fertilizer",
  "size": "5 kg",
  "price": 299.99,
  "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
  "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485383/Picture11_xctzwr.png",
  "benefits": [
    "It yields organic foodstuffs and crops fast and naturally",
    "Increases quantity and quality of crop yields",
    "Improves soil quality naturally and fast",
    "No harmful effect on farmers, crops and the soil"
  ],
  "application": "Apply 2-3 times during the growing season"
},
  {
    id: 23,
    name: "Weedex Organic Weedicide",
    type: "Weedicide",
    size: "5 kg",
    price: 799.99,
    description: "Effective weed control without harmful chemicals",
    image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742851801/Weedwipe-4_kfug3h.png",
    benefits: ["Fast-acting formula", "No residual effects", "Safe for crops"],
    application: "Spray directly on weeds"
  },
{
  id: 24,
  name: "PestOff Organic Pesticide",
  type: "Pesticide",
  size: "25 Liters",
  price: 429.99,
  description: "Natural pest control solution for healthy crops.",
  image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485400/Picture18_lolqcv.png",
  benefits: [
    "Broad spectrum control",
    "No harmful residues",
    "Safe for beneficial insects"
  ],
  application: "Apply weekly during pest season. Detailed usage instructions coming soon."
},
  {
    "id": 25,
    "name": "Asaase Hene Organic Fertilizer for Tuber",
    "type": "Fertilizer",
    "size": "25 Liters",
    "price": 299.99,
    "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742482531/Picture-3_aa9z18.png",
    "benefits": [
      "It yields organic foodstuffs and crops fast and naturally",
      "Increases quantity and quality of crop yields",
      "Improves soil quality naturally and fast",
      "No harmful effect on farmers, crops and the soil"
    ],
    "application": "Apply 2-3 times during the growing season"
  },
{
  id: 26,
  name: "PestOff Organic Pesticide",
  type: "Pesticide",
  size: "5 kg",
  price: 429.99,
  description: "Natural pest control solution for healthy crops.",
  image: "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485406/Picture19_xbu6ol.png",
  benefits: [
    "Broad spectrum control",
    "No harmful residues",
    "Safe for beneficial insects"
  ],
  application: "Apply weekly during pest season. Detailed usage instructions coming soon."
},
{
    "id": 27,
    "name": "Asaase Hene Organic Fertilizer for Tuber",
    "type": "Fertilizer",
    "size": "5 Liters",
    "price": 299.99,
    "description": "Improve soil fertility and increase crop yield with Asaase Hene Fertilizer. 100% organic and eco-friendly.",
    "image": "https://res.cloudinary.com/djfnmztu9/image/upload/v1742485353/Picture-2.1_clgbno.png",
    "benefits": [
      "It yields organic foodstuffs and crops fast and naturally",
      "Increases quantity and quality of crop yields",
      "Improves soil quality naturally and fast",
      "No harmful effect on farmers, crops and the soil"
    ],
    "application": "Apply 2-3 times during the growing season"
  },
];

const ITEMS_PER_PAGE = 9;

const Products = () => {
  const [filters, setFilters] = useState({
    type: '',
    size: '',
    priceRange: '',
    search: ''
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      const searchMatch = !filters.search || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase());
      return typeMatch && sizeMatch && priceMatch && searchMatch;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-orange-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl opacity-90">
              Discover our range of organic agricultural solutions designed to enhance 
              your farming practices while protecting the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={(e) => {
                      setFilters(prev => ({ ...prev, search: e.target.value }));
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    aria-label="Search products"
                  />
                </div>
              </div>
              
              <select
                value={filters.type}
                onChange={(e) => {
                  setFilters(prev => ({ ...prev, type: e.target.value }));
                  setCurrentPage(1);
                }}
                className="border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                aria-label="Filter by type"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={filters.size}
                onChange={(e) => {
                  setFilters(prev => ({ ...prev, size: e.target.value }));
                  setCurrentPage(1);
                }}
                className="border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                aria-label="Filter by size"
              >
                <option value="">All Sizes</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => {
                  setFilters(prev => ({ ...prev, priceRange: e.target.value }));
                  setCurrentPage(1);
                }}
                className="border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                aria-label="Filter by price range"
              >
                <option value="">All Prices</option>
                <option value="under300">Under ₵300</option>
                <option value="300to600">₵300 - ₵600</option>
                <option value="over600">Over ₵600</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <ImageSlider 
                  images={[product.image]} 
                  productName={product.name}
                />
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ₵{product.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      <Package2 className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{product.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{product.type}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center"
                    aria-label={`View details for ${product.name}`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    currentPage === page
                      ? 'bg-orange-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Products;