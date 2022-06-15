import React from 'react';
import Main from 'components/pages/main/Main';
import { Shop } from 'components/pages/shop/Shop';
import { CardItem } from 'components/pages/cardItem/CardItem';
import { Contacts } from 'components/pages/contacts/Contacts';
import { Basket } from 'components/pages/basket/Basket';
import './app.scss';
import { Ordering } from 'components/pages/ordering/ordering';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.container}>
      <Ordering />
    </div>
  );
};

export default App;
