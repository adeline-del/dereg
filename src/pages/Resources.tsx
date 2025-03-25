// import React from 'react';
import { Book, FileText, Video, Download, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

type Resource = {
  id: number;
  title: string;
  type: 'article' | 'guide' | 'video';
  description: string;
  image: string;
  date: string;
  readTime?: string;
  downloadUrl?: string;
};

const resources: Resource[] = [
  {
    id: 1,
    title: "Best Practices for Organic Farming",
    type: "article",
    description: "Learn about the latest techniques and methodologies in organic farming for maximum yield.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2024",
    readTime: "10 min read"
  },
  {
    id: 2,
    title: "Organic Pest Control Guide",
    type: "guide",
    description: "Comprehensive guide on managing pests using organic methods.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 10, 2024",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Sustainable Fertilizer Application",
    type: "video",
    description: "Watch our expert demonstrate proper fertilizer application techniques.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2024"
  },
  {
    id: 4,
    title: "Soil Health Management",
    type: "article",
    description: "Understanding and maintaining soil health for better crop yields.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 1, 2024",
    readTime: "8 min read"
  }
];

const ResourceTypeIcon = ({ type }: { type: Resource['type'] }) => {
  switch (type) {
    case 'article':
      return <FileText className="h-6 w-6" />;
    case 'guide':
      return <Book className="h-6 w-6" />;
    case 'video':
      return <Video className="h-6 w-6" />;
    default:
      return null;
  }
};

const Resources = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Knowledge Hub</h1>
          <p className="text-xl max-w-3xl">
            Access our comprehensive collection of resources to enhance your understanding 
            of organic farming practices and sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Articles",
                description: "In-depth articles on organic farming practices"
              },
              {
                icon: <Book className="h-8 w-8" />,
                title: "Guides",
                description: "Step-by-step guides and tutorials"
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "Videos",
                description: "Visual demonstrations and training content"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                  <div className="text-orange-600">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={resource.image}
                      alt={resource.title}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <div className="text-orange-600">
                          <ResourceTypeIcon type={resource.type} />
                        </div>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{resource.date}</span>
                      {resource.readTime && (
                        <span className="ml-2 text-sm text-gray-500">• {resource.readTime}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    {resource.downloadUrl ? (
                      <button className="inline-flex items-center text-orange-600 hover:text-orange-700">
                        <Download className="h-5 w-5 mr-2" />
                        Download Guide
                      </button>
                    ) : (
                      <button className="inline-flex items-center text-orange-600 hover:text-orange-700">
                        Read More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to receive the latest resources and updates 
                in organic farming practices.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;