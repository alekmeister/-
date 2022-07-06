import { Title } from 'components/title/Title';
import React, { useState } from 'react';
import { BuyerInfo } from 'components/pages/ordering/components/buyerData/BuyerInfo';
import { BuyerAddress } from 'components/pages/ordering/components/buyerData/ByuerAddress';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { OrderInfo } from 'components/pages/ordering/components/orderInfo/OrderInfo';
import { OrderPayment } from 'components/pages/ordering/components/orderPayment/OrderPayment';
import { useAppSelector } from 'components/store/types';

export const Ordering = () => {
  const [buyerData, setBuyerData] = useState({});
  const [buyerAddress, setBuyerAddress] = useState({});
  const [paymentMethod, setpaymentMethod] = useState('card');

  const dataTotal = useAppSelector((state) => state.total.total);
  const dataBasket = useAppSelector((state) => state.basket.basket);
  console.log(buyerData);
  console.log(buyerAddress);
  return (
    <div className={style.container}>
      <Title>Оформление заказа</Title>
      <div className={style.columns}>
        <div className={style.column}>
          <BuyerInfo data={setBuyerData} />
          <BuyerAddress data={setBuyerAddress} />
        </div>
        <div className={style.column}>
          <OrderInfo dataTotal={dataTotal} dataBasket={dataBasket} />
          <OrderPayment paymentMethod={paymentMethod} setpaymentMethod={setpaymentMethod} />
          <button className={style.btn} type="submit">
            Отправить заказ
          </button>
        </div>
      </div>
    </div>
  );
};
