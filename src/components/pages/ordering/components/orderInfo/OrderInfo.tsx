import React from 'react';
import style from 'components/pages/ordering/components/orderInfo/orderInfo.module.scss';
import { BasketTotal } from 'components/pages/basket/components/total/BasketTotal';
import { Clothes } from 'components/store/clothes/types';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  dataBasket: Clothes[];
  dataTotal: number;
}

export const OrderInfo: React.FC<Props> = ({ dataBasket, dataTotal }) => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Ваш заказ </div>
      <div className={style.subtitleAll}>
        <div className={style.subtitle}>Товар</div>
        <div className={style.subtitle}>Всего</div>
      </div>

      {dataBasket.map((el) => (
        <div className={style.items} key={uuidv4()}>
          <div className={style.item}>{el.name}</div>
          <div className={style.price}>{el.price * el.amount}</div>
        </div>
      ))}

      <BasketTotal total={dataTotal} />
    </div>
  );
};
