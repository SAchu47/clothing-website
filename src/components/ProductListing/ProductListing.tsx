import React, { FC, ReactElement } from 'react';
import './ProductListing.css';

interface Product {
  id?: number;
  imageUrl: string;
  productName: string;
  productPrice: string;
  productSellingPrice: string;
}

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
  const data: Product[] = [
    {
      id: 1,
      imageUrl: 'productlisting1.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 2,
      imageUrl: 'productlisting2.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 3,
      imageUrl: 'productlisting3.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 4,
      imageUrl: 'productlisting4.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 5,
      imageUrl: 'productlisting5.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 6,
      imageUrl: 'productlisting3.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 7,
      imageUrl: 'productlisting6.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 8,
      imageUrl: 'productlisting7.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 9,
      imageUrl: 'productlisting8.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
    {
      id: 10,
      imageUrl: 'productlisting1.png',
      productName: 'Pale Green Top',
      productPrice: '$16.48',
      productSellingPrice: '$6.48',
    },
  ];

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
      <button>LOAD MORE PRODUCTS</button>
    </div>
  );
};

export default ProductListing;
