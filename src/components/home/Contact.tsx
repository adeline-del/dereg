import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog"


const Contact = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  // State to control Dialog visibility
  const [dialogMessage, setDialogMessage] = useState('');
  // State for dialog message

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mqaplayq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        const text = await response.text();
        console.log("Raw Response:", text);

        try {
          const data = JSON.parse(text);
          console.log("Parsed Response:", data);

          if (!response.ok) {
            throw new Error(data.error || `HTTP error! Status: ${response.status}`);
          }

          setDialogMessage(
            "🎉 Thank you for reaching out!\n\nWe've received your inquiry and will get back to you within 24-48 hours. If it's urgent, feel free to contact us directly at +233 123 456 789 or info@deregans.com.\n\nWe appreciate your interest in our products!"
          );
          setDialogOpen(true);
          // Open the dialog on successful form submission
          form.reset();
        } catch (error) {
          console.error("JSON Parsing Error:", error);
          setDialogMessage("An error occurred while processing the response.");
          setDialogOpen(true);
          // Open dialog for error
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setDialogMessage("An error occurred while sending the form. Please try again later.");
        setDialogOpen(true);
        // Open dialog for fetch error
      });
  };

  return (
    <section id="contact" className="contact pb-12 py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-6">Let’s Work Together</h1>
          <div className="inline-block h-1 w-20 bg-orange-600 mb-6"></div>
          <p className="text-black text-2xl mt-2">
            Have questions? Need advice on organic farming? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-6">Have Questions? We’re Here to Help!</h2>
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
                <label className="font-semibold text-black">Product of Interest:</label>
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

              <p className="text-sm text-black mt-2">
                Thank you for reaching out! Our team will respond within 24-48 hours.
              </p>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-6">
            <div className=" bg-orange-100 p-6  rounded-lg shadow-md ">
              <h2 className="text-xl font-semibold text-black mb-4">Quick Contact</h2>
              <div className="space-y-4">
                {/* <!-- Phone Link --> */}
                <div className="flex items-center space-x-3">
                  <a
                    href="tel:+233123456789"
                    className="flex items-center space-x-3 text-black hover:font-bold hover:text-orange-500"
                  >
                    <Phone className="text-orange-600 w-6 h-6" />
                    <span>+233 123 456 789</span>
                  </a>
                </div>

                {/* <!-- Email Link --> */}
                <div className="flex items-center space-x-3">
                  <a
                    href="mailto:info@deregans.com"
                    className="flex items-center space-x-3 text-black hover:font-bold hover:text-orange-500"
                  >
                    <Mail className="text-orange-600 w-6 h-6" />
                    <span>info@deregans.com</span>
                  </a>
                </div>

                {/* <!-- Address Link --> */}
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.google.com/maps?q=123+Farming+Street,+Accra,+Ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-black hover:font-bold hover:text-orange-500"
                  >
                    <MapPin className="text-orange-600 w-6 h-6" />
                    <span>123 Farming Street, Accra, Ghana</span>
                  </a>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/233202647141"
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
              <p className="text-sm text-black">We have distributors across Ghana. Contact us to find one near you.</p>
              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                Find a Distributor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ShadCN Dialog for Success/Error Messages */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-black">
            {dialogMessage}
          </DialogDescription>
          <DialogFooter>
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
              onClick={() => setDialogOpen(false)}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default Contact;
