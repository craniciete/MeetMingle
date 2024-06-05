import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Meet from './sections/Meet';
import Footer from './sections/Footer';

const App = () => {
  return(
    <>
      <div className='bg-[#040404]'>
      <Header />
      <Hero />
      <About />
      <Meet />
      <Footer />
      </div>
    </>
  ) 
}

export default App;
