import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';
import assets from '../../assets';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log("Navbar toggled");
  };
  

  const closeNavbar = () => {
    setIsOpen(false);
    console.log("Navbar closed");
  };
  

  useEffect(() => {
    // Close navbar when window is resized
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeNavbar();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse z-10">
          <img src={assets.logo} className="h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            &nbsp;Elroid's Enterprise (Pty) Ltd.
          </span>
        </div>
        <div className="md:hidden">
        <button onClick={toggleNavbar} className="block text-gray-900 focus:outline-none">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        </div>
        <div className={`w-full md:w-auto md:flex ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li className="z-10">
              <Link
                to="home"
                onClick={closeNavbar}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="z-10">
              <Link
                to="about"
                onClick={closeNavbar}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="z-10">
              <Link
                to="services"
                onClick={closeNavbar}
                className="nav-link"
              >
                Services
              </Link>
            </li>
            <li className="z-10">
              <Link
                to="why-choose-us"
                onClick={closeNavbar}
                className="nav-link"
              >
                Why Choose Us
              </Link>
            </li>
            <li className="z-10">
              <Link
                to="contact"
                onClick={closeNavbar}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
