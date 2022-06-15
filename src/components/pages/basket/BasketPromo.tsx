import React from 'react';
import style from './styles/basketPromo.module.scss';

export const BasketPromo = () => {
  return (
    <div className={style.promo}>
      <input className={style.enterPromo} placeholder="Введите купон" />
      <button className={style.usePromo}>Применить </button>
      <button className={style.updateBasket}>Обновить корзину</button>
    </div>
  );
};
