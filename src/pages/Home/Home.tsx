import React, { FC, ReactElement } from 'react';
import './Home.css';
import {
  Categories,
  Hero,
  MediaWithText,
  ProductListing,
} from '../../components';

const Home: FC = (): ReactElement => {
  return (
    <div className="home_main">
      <Hero />
      <Categories />
      <ProductListing />
      <MediaWithText />
    </div>
  );
};

export default Home;
