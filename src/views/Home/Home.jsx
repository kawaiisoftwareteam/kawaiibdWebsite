'use client';

import React from 'react';
import Hero from '../../Components/Hero/Hero';
import SpiderSisterConcerns from '../../Components/SpiderSisterConcerns/SpiderSisterConcerns';
import HomeAboutUs from '../../Components/HomeAboutUs/HomeAboutUs';
import ServicesShowcase from '../../Components/ServicesShowcase/ServicesShowcase';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Hero />
      <SpiderSisterConcerns />
      <HomeAboutUs />
      <ServicesShowcase showSeeMore />
      <WhyChooseUs showDifferent={false} />
    </div>

  );
};




export default Home;
