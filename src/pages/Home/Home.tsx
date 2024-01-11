import React, { FC, ReactElement } from 'react';
import './Home.css';
import { Categories, Hero } from '../../components';

const Home: FC = (): ReactElement => {
  return (
    <div className="home_main">
      <Hero />
      <Categories />
    </div>
  );
};

export default Home;
