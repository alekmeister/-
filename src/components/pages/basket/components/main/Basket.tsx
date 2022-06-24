import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import React from 'react';
import { BasketTitle } from 'components/pages/basket/components/title/BasketTitle';
import { BasketItem } from 'components/pages/basket/components/items/BasketItems';
import { BasketPromo } from 'components/pages/basket/components/promo/BasketPromo';
import { BasketTotal } from 'components/pages/basket/components/total/BasketTotal';
import { Title } from 'components/title/Title';
import style from 'components/pages/basket/components/main/basket.module.scss';

const asda = [3, 2, 3, 4, 5, 6, 7];

const Basket: React.FC = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Title>Корзина</Title>
        <div className={style.inner}>
          <BasketTitle />
          <BasketItem />
          <BasketItem />
          <BasketPromo />
          <div className={style.total}>
            <BasketTotal />
            <button className={style.checkout}>Оформить заказ</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Basket };
