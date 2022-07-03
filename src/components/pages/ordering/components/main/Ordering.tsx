import { Title } from 'components/title/Title';
import React from 'react';
import { BuyerInfo } from 'components/pages/ordering/components/buyerData/BuyerInfo';
import { BuyerAddress } from 'components/pages/ordering/components/buyerData/ByuerAddress';
import { BuyerComment } from 'components/pages/ordering/components/buyerData/ByuerComment';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { OrderInfo } from 'components/pages/ordering/components/orderInfo/OrderInfo';
import { OrderPayment } from 'components/pages/ordering/components/orderPayment/OrderPayment';

export const Ordering = () => {
  return (
    <div className={style.container}>
      <Title>Оформление заказа</Title>
      <div className={style.columns}>
        <div className={style.column}>
          <BuyerInfo />
          <BuyerAddress />
          <BuyerComment />
        </div>
        <div className={style.column}>
          <OrderInfo />
          <OrderPayment />
        </div>
      </div>
    </div>
  );
};
