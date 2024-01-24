import React, { FC, ReactElement, useEffect } from 'react';
import { ProductListing } from '../../components';
import './Products.css';
import {
  IProductsState,
  addProducts,
  fetchTodos,
} from '../../store/features/ProductsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { LoadIcon } from '../../icons';

const products: IProductsState = {
  subHeading: '',
  mainHeading: '',
  description: '',
  isLoadMore: false,
  products: [],
  isLoading: true,
  isError: false,
};

const Products: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addProducts(products));
    dispatch(fetchTodos());
  }, []);

  const productsData = useAppSelector((state) => state.products);
  return (
    <div className="products__main">
      {productsData.isLoading && (
        <div className="spinner">
          <LoadIcon
            className="margin: auto; background: rgb(241, 242, 243); display: block; shape-rendering: auto;"
            width="150px"
            height="150px"
          />
        </div>
      )}
      <ProductListing {...productsData} />
    </div>
  );
};

export default Products;
