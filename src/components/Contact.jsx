// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Visit Our Store</h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 Main Street, Cityville, State, 12345
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Phone: (123) 456-7890 <br />
              Email: info@example.com
            </p>
          </div>
          {/* Add a contact form or additional contact details as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
