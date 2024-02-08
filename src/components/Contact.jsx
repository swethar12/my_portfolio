// Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_fob0sph';
    const templateId='template_sc8gsk9';
    const publicKey='Bq3G_vHLr6hUBCX0F';

    const templateParams = {
      from_name:formData.name,
      from_email:formData.email,
      to_name: 'swetha',
      message:formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully:', response);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });

}

  return (
    <div>
      <h1 className="font-bold text-3xl mb-8 text-center py-6 mt-20">CONTACT</h1>
    <div className="container mx-auto p-8 max-w-md bg-white shadow-[0_35px_55px_-15px_#fecaca] rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-red-800">Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-200 focus:outline-none focus:shadow-outline-green">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
