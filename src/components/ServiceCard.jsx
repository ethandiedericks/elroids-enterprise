// ServiceCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const ServiceCard = ({ imageUrl, title, description }) => (
  <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 serviceHover">
    <img className="rounded-t-lg p-10 w-full mx-auto" src={imageUrl} alt="" />
    <div className="p-5">
      <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

ServiceCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
