import React, { FC, ReactElement } from 'react';
import './MediaWithText.css';

const MediaWithText: FC = (): ReactElement => {
  return (
    <div className="media_with_text__main">
      <div className="media_with_text__main__image">
        <img src="mediaWithText1.png" alt="" />
        <img src="mediaWithText2.png" alt="" />
      </div>
      <div className="media_with_text__main__content">
        <h5>Featured Products</h5>
        <h2>We love what we do</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics. <br /> <br /> Problems
          trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics.
        </p>
      </div>
    </div>
  );
};

export default MediaWithText;
