import { Title } from 'components/title/Title';
import React, { useRef, useState } from 'react';
import { BuyerInfo } from 'components/pages/ordering/components/buyerData/BuyerInfo';
import { BuyerAddress } from 'components/pages/ordering/components/buyerData/ByuerAddress';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { OrderInfo } from 'components/pages/ordering/components/orderInfo/OrderInfo';
import { OrderPayment } from 'components/pages/ordering/components/orderPayment/OrderPayment';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { FormikProps } from 'formik/dist/types';
import { Clothes, FullOrder } from 'components/store/clothes/types';
import { createOrder } from 'components/store/clothes/actionCreators/getClothes';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
interface FormAddress {
  country: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
}

export const Ordering = () => {
  const [buyerData, setBuyerData] = useState({});
  const [buyerAddress, setBuyerAddress] = useState({});
  const refData = useRef<FormikProps<FormData>>(null);
  const refAddress = useRef<FormikProps<FormAddress>>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const dispatch = useAppDispatch();
  const dataTotal = useAppSelector((state) => state.total.total);
  const dataBasket = useAppSelector((state) => state.basket.basket);
  const order = {
    Data: {},
    Address: {},
    Items: [],
    Total: '',
    PaymentMethod: '',
  };
  const handleSubmitData = (entity: FormData) => {
    setBuyerData(entity);
  };
  const handleSubmitAddress = (entity: FormAddress) => {
    setBuyerAddress(entity);
  };
  console.log(buyerData);
  console.log(buyerAddress);

  const confirmChanges = () => {
    refAddress?.current?.handleSubmit();
    refData?.current?.handleSubmit();
    if (Object.keys(buyerData).length !== 0 && Object.keys(buyerAddress).length !== 0) {
      order.Data = buyerData;
      order.Address = buyerAddress;
      order.Items = dataBasket;
      order.Total = dataTotal;
      order.PaymentMethod = paymentMethod;
      dispatch(createOrder(order));
    }
  };
  return (
    <div className={style.container}>
      <Title>Оформление заказа</Title>
      <div className={style.columns}>
        <div className={style.column}>
          <BuyerInfo handleSubmitData={handleSubmitData} ref={refData} />
          <BuyerAddress handleSubmitAddress={handleSubmitAddress} ref={refAddress} />
        </div>
        <div className={style.column}>
          <OrderInfo dataTotal={dataTotal} dataBasket={dataBasket} />
          <OrderPayment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
          <button className={style.btn} onClick={confirmChanges}>
            Отправить заказ
          </button>
        </div>
      </div>
    </div>
  );
};
