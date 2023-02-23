import React from 'react';
import Midpage from './Midpage';
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './Swiper';

const Homepage = () => {
  return (
    <div>
          <Navbar/>
          <Slider/>
          <Midpage/>
          <Footer/>
    </div>
  )
}

export default Homepage;
