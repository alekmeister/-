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
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
