import React, { useState, useEffect } from 'react';
import meetmingleLogo from '../assets/images/meetmingle - logo.png';
import { FaArrowUp } from "react-icons/fa";

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToMeet = () => {
    const meetSection = document.getElementById('meet');
    if (meetSection) {
      meetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex justify-center items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:items-center mb-56">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-2 py-8">
            <img 
              src={meetmingleLogo} 
              alt="MeetMingle Logo"
              width={30}
            />
            <h1 className="text-3xl font-extrabold">MeetMingle</h1>
          </div>
          <h1 className="text-5xl lg:text-7xl sm:text-6xl font-extrabold">
            Discover the Art of Authentic Connection with MeetMingle:
          </h1>
          <p className="mt-4 sm:text-xl">
          Your Exclusive Platform for Tailored One-on-One Video Calls, Where Every Moment Becomes a Lasting Memory
          </p>
          <div className="mt-10">
            <button 
              type="button" 
              className="rounded-lg bg-red-500 px-10 py-5 transition text-white font-bold" 
              onClick={handleScrollToMeet}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {showArrow && (
        <button
          type="button"
          className="fixed bottom-20 right-10 bg-red-500 p-4 rounded-full"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} color='white'/>
        </button>
      )}
    </section>
  );
}

export default Hero;
