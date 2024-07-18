import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PopularDishes from '../components/PopularDishes';
import TableInput from '../components/TableInput';

const HomePage = () => {
  return (
    <div>
      <WelcomeSection />
      <TableInput />
      <PopularDishes />
    </div>
  );
};

export default HomePage;
