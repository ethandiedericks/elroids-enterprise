/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">About Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-8 p-4">
          Welcome to Elroid's Enterprise, your trusted partner for affordable PC and TV repair services in Port Elizabeth. We understand the importance of your devices in your daily life, which is why we are committed to providing top-notch repair solutions at the most competitive prices in the area.
        </p>
        <div className="flex md:flex-row xsm:flex-col flex-wrap justify-center "> 
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md m-5 ">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Ethan Diedericks</h3>
            <p className="text-gray-600 dark:text-gray-300">I.T Technician</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md m-5 ">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Elroid Diedericks</h3>
            <p className="text-gray-600 dark:text-gray-300">Electronics Technician</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
