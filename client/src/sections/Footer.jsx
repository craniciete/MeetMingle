import React from 'react';

const Footer = () => {
  return (
    <footer id='contact'>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex flex-col justify-center items-center py-10 text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">CONTACT US</h2>
            <p className="mt-4 text-lg sm:text-xl/relaxed">
              Let’s discuss how we can help you!
            </p>

            <form className="mt-10 flex justify-center w-full max-w-lg">
              <div className="relative w-full">
                <input
                  className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder="meetmingle@gmail.com"
                />
                <button
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>

          <hr className="my-6 border-[#FFE0E0]" />

          <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left text-white py-4">
            <h1 className="text-sm">© Copyright 2024 | MEETMINGLE</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
