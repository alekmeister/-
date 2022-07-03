import React, { useEffect } from 'react';
import Main from 'components/pages/main/Main';
import { Shop } from 'components/pages/shop/Shop';
import { Contacts } from 'components/pages/contacts/Contacts';
import './app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Error } from 'components/pages/error';
import { CardItem } from 'components/pages/cardItem/CardItem';
import { Basket } from 'components/pages/basket/components/main/Basket';
import { Ordering } from 'components/pages/ordering/components/main/Ordering';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="store" element={<Shop />} />
          <Route path="*" element={<Error />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="store/:clotheId" element={<CardItem />} />
          <Route path="basket" element={<Basket />} />
          <Route path="ordering" element={<Ordering />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
