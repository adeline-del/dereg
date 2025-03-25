import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Featured from '../components/home/Featured';
import Contact from '../components/home/Contact';
// import Resources from '../components/home/Resources';
import Testimonials from '../components/home/Testimonials';
import Sustainability from '../components/home/Sustainability';
import BackToTop from '../components/BackToTop';




const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Featured />
      {/* <Resources /> */}
      <Sustainability />
      <Contact />
            {/* Back to Top Button */}
            <BackToTop />
    </>
  );
};

export default Home;
