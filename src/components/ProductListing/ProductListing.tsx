import React, { FC, ReactElement } from 'react';
import './ProductListing.css';

interface Product {
  imageUrl: string;
  productName: string;
  productPrice: string;
  productSellingPrice: string;
}

const data: Product[] = [
  {
    imageUrl: 'productlisting1.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting2.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting3.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting4.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting5.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting3.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting6.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting7.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting8.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
  {
    imageUrl: 'productlisting1.png',
    productName: 'Pale Green Top',
    productPrice: '$16.48',
    productSellingPrice: '$6.48',
  },
];

const ProductComponent: FC<Product> = (props): ReactElement => {
  return (
    <div>
      <div className="product_listing__product__img">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="product_listing__product__content">
        <h5>{props.productName}</h5>
        <div>
          <h6>{props.productPrice}</h6>
          <h6>{props.productSellingPrice}</h6>
        </div>
      </div>
    </div>
  );
};

const ProductListing: FC = (): ReactElement => {
  return (
    <div className="product_listing_main">
      <div className="product_listing_main_content">
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between </p>
      </div>
      <div className="product_listing_main_product">
        {data.map((item: Product, index) => {
          return (
            <ProductComponent
              imageUrl={item.imageUrl}
              productName={item.productName}
              productPrice={item.productPrice}
              productSellingPrice={item.productSellingPrice}
              key={`${index}+${item.productName}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
