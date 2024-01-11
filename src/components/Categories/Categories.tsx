import React, { FC, ReactElement } from 'react';
import './Categories.css';

const Categories: FC = (): ReactElement => {
  return (
    <div className="categories_main">
      <div className="categories_main_image_first">
        <img src="category1.jpg" alt="" />
        <div>
          <h3>Top Product Of the Week</h3>
          <button className="btn-text ">EXPLORE ITEMS</button>
        </div>
      </div>
      <div className="categories_main_image_second">
        <div className="image_second_content">
          <img src="category2.jpg" alt="" />
          <div>
            <h4>Top Product Of the Week</h4>
            <button className="btn-text ">EXPLORE ITEMS</button>
          </div>
        </div>
        <div className="image_second_content">
          <img src="category3.jpg" alt="" />
          <div>
            <h4>Top Product Of the Week</h4>
            <button className="btn-text ">EXPLORE ITEMS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
