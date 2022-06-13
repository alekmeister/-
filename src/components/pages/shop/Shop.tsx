import React, { FC } from 'react';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Clothres } from 'components/clothres/Clothres';
import style from './shop.module.scss';

const Shop: FC = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.title}>Магазин </div>
        <div className={style.categories}>
          <button className={style.categories_btn}>Все</button>
          <button className={style.categories_btn}>Пальто</button>
          <button className={style.categories_btn}>Свитшоты</button>
          <button className={style.categories_btn}>Кардиганы</button>
          <button className={style.categories_btn}>Толстовки</button>
        </div>
        <div className={style.displayed}>9 из 12 товаров</div>
        <Clothres />
        <div className={style.pages}>
          <button className={style.pages_btn}>1</button>
          <button className={style.pages_btn}>2</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Shop };
