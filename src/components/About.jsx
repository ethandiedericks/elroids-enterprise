/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">About Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae risus nec est facilisis laoreet.
          Suspendisse potenti. Quisque nec tellus a odio commodo dictum. Proin hendrerit dolor vel velit ultricies,
          vitae accumsan metus consectetur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-300">Repair Specialist</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Jane Smith</h3>
            <p className="text-gray-600 dark:text-gray-300">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
