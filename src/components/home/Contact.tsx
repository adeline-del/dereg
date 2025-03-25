import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {

  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
  
    fetch("https://formspree.io/f/mqaplayq", {
      method: "POST",
      body: formData,
    })
    .then((response) => {
      if (!response.ok) {
        console.error('Error:', response.statusText);
      } else {
        console.log("Response:", response);
        alert("Thank you for your submission! We will get back to you soon.");
        form.reset();
      }
    })
    .catch((error) => {
      console.error("Network error or other issue:", error);
      alert("An error occurred while sending the form. Please try again later.");
    });
  };
  
  

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-6">Let’s Work Together</h1>
          <div className="inline-block h-1 w-20 bg-orange-600 mb-6"></div>
          <p className="text-gray-600 mt-2">
            Have questions? Need advice on organic farming? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Have Questions? We’re Here to Help!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address (Optional)"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
              />

              <div className="space-y-2">
                <label className="font-semibold text-gray-700">Product of Interest:</label>
                <div className="flex flex-wrap gap-2">
                  {["Asaase Hene Fertilizer", "WeedWipe Weedicide", "PestOff Pesticide", "General Inquiry"].map((product) => (
                    <label key={product} className="flex items-center space-x-2">
                      <input type="checkbox" name="products" value={product} className="form-checkbox text-orange-600" />
                      <span>{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message/Inquiry Details *"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-600"
                required
              ></textarea>

              <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700">
                Send Enquiry
              </button>

              <p className="text-sm text-gray-500 mt-2">
                Thank you for reaching out! Our team will respond within 24-48 hours.
              </p>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-600 w-6 h-6" />
                  <p className="text-gray-700">+233 123 456 789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-600 w-6 h-6" />
                  <p className="text-gray-700">info@deregans.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-600 w-6 h-6" />
                  <p className="text-gray-700">123 Farming Street, Accra, Ghana</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/233123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
              >
                <MessageSquare className="mr-2" /> Chat on WhatsApp
              </a>
              <a
                href="https://goo.gl/maps/samplemap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
              >
                <MapPin className="mr-2" /> View on Google Maps
              </a>
            </div>

            {/* Find a Distributor CTA */}
            <div className="bg-orange-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-orange-700">Looking for a Distributor?</h3>
              <p className="text-sm text-gray-600">We have distributors across Ghana. Contact us to find one near you.</p>
              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                Find a Distributor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
