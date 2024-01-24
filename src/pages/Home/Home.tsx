import React, { FC, ReactElement, useEffect } from 'react';
import './Home.css';
import {
  Categories,
  Features,
  Hero,
  MediaWithText,
  ProductListing,
} from '../../components';
import {
  IProductsState,
  addProducts,
} from '../../store/features/ProductsSlice';
import { useAppDispatch } from '../../store/store';

const products: IProductsState = {
  subHeading: 'Featured Products',
  mainHeading: 'BESTSELLER PRODUCTS',
  description: 'Best products liked by our customers',
  isLoadMore: false,
  products: [
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
  ],
  isLoading: false,
  isError: false,
};

const Home: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addProducts(products));
  }, []);

  return (
    <div className="home_main">
      <Hero />
      <Categories isLeftAligned={false} />
      <ProductListing {...products} />
      <MediaWithText />
      <Features />
    </div>
  );
};

export default Home;
