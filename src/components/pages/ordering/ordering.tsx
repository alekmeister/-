import { Title } from 'components/title/Title';
import React from 'react';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { BuyerData } from 'components/pages/ordering/BuyerData';
import style from './style/ordering.module.scss';

export const Ordering = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Title> Оформление заказа</Title>
        <BuyerData />
      </div>
      <Footer />
    </>
  );
};
