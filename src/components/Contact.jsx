import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", isError: false }); // To show success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_puan58c"; // Replace with your EmailJS service ID
    const templateID = "template_q757rha"; // Replace with your EmailJS template ID
    const userID = "5sNlOUr_VSce1ICnf"; // Replace with your EmailJS user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ message: "Email sent successfully!", isError: false });
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus({ message: "Failed to send email. Please try again later.", isError: true });
        }
      );
  };

  return (
    <section id="contact" className="p-6 sm:p-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-sans text-center">Contact</h2>
      {status.message && (
        <p
          className={`text-center mt-4 ${
            status.isError ? "text-red-500" : "text-green-500"
          }`}
        >
          {status.message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="w-full sm:w-auto bg-cyan-500 text-black py-2 px-4 rounded-md">
          Send
        </button>
      </form>
      
    </section>
  );
};

export default Contact;
