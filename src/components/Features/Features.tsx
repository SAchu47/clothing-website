import React, { FC, ReactElement } from 'react';
import './Features.css';
import { ArrowGrowthIcon, BookReaderIcon, CarbonBookIcon } from '../../icons';

const Features: FC = (): ReactElement => {
  return (
    <div className="features__main">
      <div className="features__main__content">
        <h4>Features</h4>
        <h3>THE BEST SERVICES</h3>
        <p>Problems trying to resolve the conflict between </p>
      </div>
      <div className="features__main__feature">
        <div className="main__feature_item">
          <BookReaderIcon fill="#23A6F0" width={72} height={72} />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile now!</p>
        </div>
        <div className="main__feature_item">
          <CarbonBookIcon fill="#23A6F0" width={72} height={72} />
          <h3>Concrete</h3>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="main__feature_item">
          <ArrowGrowthIcon fill="#23A6F0" width={72} height={72} />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
