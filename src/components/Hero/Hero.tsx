import React, { FC, ReactElement } from 'react';
import './Hero.css';

const Hero: FC = (): ReactElement => {
  return (
    <div className="hero_main">
      <div className="hero_main_content">
        <h5>SUMMER 2020</h5>
        <h2>NEW COLLECTION</h2>
        <h4>
          We know how large objects will act, but things on a small scale.
        </h4>
        <button>
          <h5>SHOP NOW</h5>
        </button>
      </div>
      <div className="hero_main_image">
        <div className="circle"></div>
      </div>
      <img src="hero.png" alt="" />
    </div>
  );
};

export default Hero;
