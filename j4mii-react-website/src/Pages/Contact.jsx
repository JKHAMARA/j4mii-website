import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
                CONTACT
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed max-w-xl text-center mx-auto">
                Have questions, suggestions, or need support? We'd love to 
                hear from you! Reach out to us via email, phone, or social 
                media, and our team will respond promptly. Whether you're 
                a member, partner, or just curious about our work, don't 
                hesitate to connect. Let's build something great together!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">Address</h3>
                <p className="text-gray-800">Anwarr inn ose</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-2">Phone</h3>
                <p className="text-gray-800">+232 00 00 00 00</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-2">E-mail</h3>
                <p className="text-gray-800">J4mii@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-black mb-8">
              CONTACT FORM
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent placeholder-gray-600 text-black focus:outline-none focus:border-black focus:ring-0 text-lg"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent placeholder-gray-600 text-black focus:outline-none focus:border-black focus:ring-0 text-lg"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your E-mail"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent placeholder-gray-600 text-black focus:outline-none focus:border-black focus:ring-0 text-lg"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent placeholder-gray-600 text-black focus:outline-none focus:border-black focus:ring-0 text-lg resize-none"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="bg-[#3d5afe] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>SEND MESSAGE</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
