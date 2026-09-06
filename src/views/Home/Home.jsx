'use client';

import React from 'react';
import Hero from '../../Components/Hero/Hero';
import SpiderSisterConcerns from '../../Components/SpiderSisterConcerns/SpiderSisterConcerns';
import HomeAboutUs from '../../Components/HomeAboutUs/HomeAboutUs';
import HomeBridge from '../../Components/HomeBridge/HomeBridge';
import ServicesShowcase from '../../Components/ServicesShowcase/ServicesShowcase';
import HomeVisiting from '../../Components/HomeVisiting/HomeVisiting';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import FaqSection from '../../Components/Faq/FaqSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <SpiderSisterConcerns />
      <HomeAboutUs />
      <HomeBridge />
      <ServicesShowcase showSeeMore />
      <HomeVisiting />
      <WhyChooseUs showDifferent={false} />
      <FaqSection />
    </div>
  );
};

export default Home;

