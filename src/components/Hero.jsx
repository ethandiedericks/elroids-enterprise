import React from 'react';
import assets from '../assets';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="container flex lg:flex-row sm:flex-col h-full  justify-center align-middle items-center py-8 px-4 mx-auto text-center lg:py-16 z-10 relative">
        <div className="flex flex-wrap flex-col lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Affordable Computer and TV Repairs at your service.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 ">
            Here at Elroid's Enterprise we focus on efficiecy, affordability and longevity, bringing your tech back to life! 
          </p>
          <div className='flex justify-center'>
            <a 
            href="#contact" 
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 w-32"
            >
              Contact us
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          
        </div>
        
        <div className="lg:w-1/2">
          <img src={assets.hero} alt="Hero Image" className="hidden md:block object-contain" />
        </div>
        
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Hero;
