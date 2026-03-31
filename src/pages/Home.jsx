import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TrainingZones from '../sections/TrainingZones';
import Transformations from '../sections/Transformations';
import Pricing from '../sections/Pricing';
import Trainers from '../sections/Trainers';
import Reviews from '../sections/Reviews';
import Join from '../sections/Join';
import BMICalculator from '../sections/BMICalculator';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <TrainingZones />
      <Transformations />
      <Pricing />
      <Trainers />
      <Reviews />
      <Join />
      <BMICalculator />
      <Contact />
    </MainLayout>
  );
};

export default Home;
