// WhyChooseUs.jsx
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Expert Technicians</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our team consists of skilled and experienced technicians who are experts in PC and TV repairs. Trust us for
              quality service.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Quick Turnaround</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We understand the importance of a fast turnaround. Our efficient repair process ensures that your devices are
              back in your hands quickly.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Customer Satisfaction</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Customer satisfaction is our priority. We strive to provide excellent service and ensure our customers are
              happy with the results.
            </p>
          </div>
          {/* Add more "Why Choose Us" points as needed */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
