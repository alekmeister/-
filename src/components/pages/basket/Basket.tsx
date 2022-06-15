import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import React from 'react';
import { BasketTitle } from 'components/pages/basket/BasketTitle';
import { BasketItems } from 'components/pages/basket/BasketItems';
import { BasketPromo } from 'components/pages/basket/BasketPromo';
import { BasketTotal } from 'components/pages/basket/BasketTotal';
import { Title } from 'components/title/Title';
import style from './styles/basket.module.scss';

const Basket: React.FC = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Title>Корзина</Title>
        <div className={style.inner}>
          <BasketTitle />
          <BasketItems />
          <BasketPromo />
          <BasketTotal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Basket };
