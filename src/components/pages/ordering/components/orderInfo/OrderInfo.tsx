import React from 'react';
import style from 'components/pages/ordering/components/orderInfo/orderInfo.module.scss';
import { BasketTotal } from 'components/pages/basket/components/total/BasketTotal';
import { useAppSelector } from 'components/store/types';

export const OrderInfo: React.FC = ({ dataBasket, dataTotal }) => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Ваш заказ </div>
      <div className={style.subtitleAll}>
        <div className={style.subtitle}>Товар</div>
        <div className={style.subtitle}>Всего</div>
      </div>

      {dataBasket.map((el) => (
        <div className={style.items}>
          <div className={style.item}>{el.name}</div>
          <div className={style.price}>{el.price * el.amount}</div>
        </div>
      ))}

      <BasketTotal total={dataTotal} />
    </div>
  );
};
