// Service.jsx

import React from 'react';
import assets from '../assets';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    imageUrl: assets.laptop,
    title: 'Laptop Repairs & Upgrades',
    description: "Whether your laptop is running slow, has a cracked screen, or needs a hardware upgrade, our skilled technicians are here to help. From software troubleshooting to hardware replacements, we ensure your laptop performs at its best.",
  },
  {
    imageUrl: assets.computer,
    title: 'Desktop Repairs & Upgrades',
    description: "Is your desktop computer acting up? From fixing software issues to upgrading hardware components, we offer comprehensive repair and upgrade services for desktop computers. Trust us to get your computer back up and running smoothly.",
  },
  {
    imageUrl: assets.tv,
    title: 'TV Repairs',
    description: "When your TV stops working or has display problems, it can be frustrating. Our expert technicians specialize in diagnosing and repairing a wide range of TV issues. Whether it's a cracked screen, sound problems, or connectivity issues, we've got you covered.",
  },
  {
    imageUrl: assets.sound,
    title: 'Sound Hire',
    description: "Planning an event and need professional sound equipment? Look no further! Our sound hire service provides top-quality audio equipment for any occasion, ensuring clear and crisp sound for your event. From speakers to microphones, we've got everything you need to make your event a success.",
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 dark:bg-gray-800 py-8 px-4 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
