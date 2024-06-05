import React from 'react';
import { FaVideo } from "react-icons/fa";
import meetmingleB1 from '../assets/images/meetmingle - bento 1.png';
import { MdConnectWithoutContact } from "react-icons/md";

const About = () => {
  return (
    <section id='about' className='min-h-screen flex justify-center items-center py-8'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-8'>
        <div className="mx-auto text-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">

            <div className="col-span-1 lg:col-span-3 lg:row-span-3 bg-[#7c0404] rounded-lg shadow-xl flex justify-center items-center p-4 sm:p-8">
              <div className='flex flex-col gap-4'>
                <img src={meetmingleB1} alt="bento 1" className='max-w-full h-auto' />
                <h1 className='text-white font-bold text-xl sm:text-2xl lg:text-4xl'>CONNECT WITH YOUR PEER WITH JUST ONE GO!</h1>
                <p className='text-white text-left text-xs sm:text-sm lg:text-base'>
                Welcome to a platform where simplicity meets connection. Seamlessly initiate one-on-one video calls or collaborative sessions with ease. With privacy at the forefront, intuitive controls ensure secure interactions. Grant camera and mic permissions, then dive into meaningful conversations or productive collaborations effortlessly. Experience connectivity and privacy-first communication all in one place.
                </p>
              </div>
            </div>

            <div className="col-span-1 bg-[#800404] rounded-lg shadow-xl flex justify-center items-center min-h-[100px] sm:min-h-[200px]">
              <FaVideo className='text-white sm:size-40 lg:size-24' />
            </div>

            <div className="col-span-1 lg:col-span-2 bg-[#3c0404] rounded-lg shadow-xl flex justify-center items-center p-4 sm:p-8 min-h-[100px] sm:min-h-[200px]">
              <div className='flex flex-col gap-2 sm:gap-4'>
                <h1 className='text-white font-bold text-xl sm:text-2xl lg:text-4xl'>EFFICIENCY</h1>
                <p className='text-white text-left text-xs sm:text-sm lg:text-base'>Seamless Connection Made Simple, Enter your name, copy the code, share it with your friend, and start your call instantly. That's how effortless connections are made here.</p>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 bg-[#3e0101] rounded-lg shadow-xl flex justify-center items-center p-4 sm:p-8 min-h-[100px] sm:min-h-[200px]">
              <div className='flex flex-col gap-2 sm:gap-4'>
                <h1 className='text-white font-bold text-xl sm:text-2xl lg:text-4xl'>CONNECTIVITY</h1>
                <p className='text-white text-left text-xs sm:text-sm lg:text-base'> Break barriers effortlessly. Whether across the street or around the globe, our platform ensures connections, fostering meaningful interactions with just a few clicks.</p>
              </div>
            </div>

            <div className="col-span-1 bg-[#800404] rounded-lg shadow-xl flex justify-center items-center min-h-[100px] sm:min-h-[200px]">
              <MdConnectWithoutContact className='text-white sm:size-40 lg:size-32' />
            </div>

            <div className="col-span-1 lg:col-span-3 bg-[#900404] rounded-lg shadow-xl flex justify-center items-center p-4 sm:p-8 min-h-[100px] sm:min-h-[200px]">
              <div className='flex flex-col gap-2 sm:gap-4'>
                <h1 className='text-white font-bold text-xl sm:text-2xl lg:text-4xl'>PRIVACY</h1>
                <p className='text-white text-left text-xs sm:text-sm lg:text-base'>Prioritizing your privacy, we ensure secure connections with built-in controls. Before initiating, grant camera and mic permissions for peace of mind. Mute, unmute, toggle cam all at your fingertips, empowering you to control your digital space.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
