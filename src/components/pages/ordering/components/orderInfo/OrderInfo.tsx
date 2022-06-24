import React from 'react';
import style from 'components/pages/ordering/components/orderInfo/orderInfo.module.scss';
import { BasketTotal } from 'components/pages/basket/components/total/BasketTotal';

export const OrderInfo: React.FC = () => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Ваш заказ </div>
      <div className={style.subtitleAll}>
        <div className={style.subtitle}>Товар</div>
        <div className={style.subtitle}>Всего</div>
      </div>
      <div className={style.items}>
        <div className={style.item}>Футболка USA</div>
        <div className={style.price}>129$</div>
      </div>
      <BasketTotal />
    </div>
  );
};
