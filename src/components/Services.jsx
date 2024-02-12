/* eslint-disable no-unused-vars */
import React from 'react';
import assets from '../assets';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    imageUrl: assets.laptop,
    title: 'Laptop Repairs & Upgrades',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    imageUrl: assets.computer,
    title: 'Desktop Repairs & Upgrades',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
  {
    imageUrl: assets.tv,
    title: 'TV Repairs',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="flex justify-center align-middle text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">Our Services</h2>
        </div>
        <div className="container mx-auto flex flex-wrap justify-center">
            {servicesData.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </section>
  );
};

export default Services;
