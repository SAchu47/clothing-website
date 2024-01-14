import React, { FC, ReactElement } from 'react';
import './Home.css';
import {
  Categories,
  Features,
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
      <Features />
    </div>
  );
};

export default Home;
