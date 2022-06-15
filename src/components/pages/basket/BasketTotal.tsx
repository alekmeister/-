import React from 'react';
import style from './styles/basketTotal.module.scss';

export const BasketTotal: React.FC = () => {
  return (
    <div className={style.inner}>
      <div className={style.total}> Итого: 129$</div>
      <button className={style.checkout}>Оформить заказ</button>
    </div>
  );
};
