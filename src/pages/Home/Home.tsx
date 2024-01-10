import React, { FC, ReactElement } from 'react';
import './Home.css';
import { Hero } from '../../components';

const Home: FC = (): ReactElement => {
  return (
    <div className="home_main">
      <Hero />
    </div>
  );
};

export default Home;
