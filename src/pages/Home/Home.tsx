import React, { FC, ReactElement } from 'react';
import './Home.css';
import { Categories, Hero, ProductListing } from '../../components';

const Home: FC = (): ReactElement => {
  return (
    <div className="home_main">
      <Hero />
      <Categories />
      <ProductListing />
    </div>
  );
};

export default Home;
