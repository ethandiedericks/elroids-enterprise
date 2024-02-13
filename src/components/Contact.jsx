// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Visit our workplace</h3>
            <p className="text-gray-600 dark:text-gray-300">
              16 Johan Street, Chadè Manor, Parsons Vlei, Port Elizabeth, 6025
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ethan: 081 279 9063 <br />
              Elroid: 065 815 4146
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
