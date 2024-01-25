import React, { FC, ReactElement, useEffect } from 'react';
import './ProductListing.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  IProduct,
  IProductsState,
  addProducts,
} from '../../store/features/ProductsSlice';

const ProductComponent: FC<IProduct> = (props): ReactElement => {
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

const ProductListing: FC<IProductsState> = (): ReactElement => {
  const products: IProductsState = useAppSelector((state) => state.products);

  return (
    <div className="product_listing_main">
      <div className="product_listing_main_content">
        <h4>{products.subHeading}</h4>
        <h3>{products.mainHeading}</h3>
        <p>{products.description}</p>
      </div>
      <div className="product_listing_main_product">
        {products.products.map((item: IProduct, index) => {
          return (
            <ProductComponent
              id={item.id}
              imageUrl={item.imageUrl}
              productName={item.productName}
              productPrice={item.productPrice}
              productSellingPrice={item.productSellingPrice}
              key={`${index}+${item.productName}`}
            />
          );
        })}
      </div>
      {products.isLoadMore && <button>LOAD MORE PRODUCTS</button>}
    </div>
  );
};

export default ProductListing;
