import React, { FC, ReactElement } from 'react';
import './App.css';
import { Home, Products } from './pages';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';

const App: FC = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
