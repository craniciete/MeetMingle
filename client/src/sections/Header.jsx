import React from 'react';

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='h-auto flex justify-center items-center'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-[#f1f1f1] p-4 sm:p-6 lg:p-8 rounded-lg">
          <div className="px-2 sm:px-4 lg:px-5">
            <nav>
              <ul className="flex flex-wrap items-center gap-4 sm:gap-8 lg:gap-16 text-xs sm:text-sm lg:text-base">
                <li>
                  <button
                    className="hover:underline underline-offset-8 decoration-2 cursor-pointer bg-transparent border-none text-red-500"
                    onClick={() => handleScroll('home')}
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <buttonw
                    className="hover:underline underline-offset-8 decoration-2 cursor-pointer bg-transparent border-none text-red-500"
                    onClick={() => handleScroll('about')}
                  >
                    ABOUT
                  </buttonw>
                </li>
                <li>
                  <button
                    className="hover:underline underline-offset-8 decoration-2 cursor-pointer bg-transparent border-none text-red-500"
                    onClick={() => handleScroll('meet')}
                  >
                    MEET
                  </button>
                </li>
                <li>
                  <button
                    className="hover:underline underline-offset-8 decoration-2 cursor-pointer bg-transparent border-none text-red-500"
                    onClick={() => handleScroll('contact')}
                  >
                    CONTACT
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
