import React, { FC, ReactElement } from 'react';
import { Categories } from '../../components';

import './CategoryProducts.css';

const CategoryProducts: FC = (): ReactElement => {
  return (
    <div className="featured_products__main">
      <Categories isLeftAligned={false} />
      <Categories isLeftAligned={true} />
    </div>
  );
};

export default CategoryProducts;
