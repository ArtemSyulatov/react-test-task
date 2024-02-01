import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { BasketPage } from './components/Pages/BasketPage';
import { MainPage } from './components/Pages/MainPage';
import { ProductPage } from './components/Pages/ProductPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink className={'link'} to={'/cart'}>
          Корзина
        </NavLink>
        <NavLink className={'link'} to={'/'}>
          Главная страница
        </NavLink>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/product/:id'} element={<ProductPage />} />
          <Route path={'/cart'} element={<BasketPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
