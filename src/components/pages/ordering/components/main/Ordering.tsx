import { Title } from 'components/title/Title';
import React, { useRef, useState } from 'react';
import { BuyerInfo } from 'components/pages/ordering/components/buyerData/BuyerInfo';
import { BuyerAddress } from 'components/pages/ordering/components/buyerData/ByuerAddress';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { OrderInfo } from 'components/pages/ordering/components/orderInfo/OrderInfo';
import { OrderPayment } from 'components/pages/ordering/components/orderPayment/OrderPayment';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { FormikProps } from 'formik/dist/types';
import { createOrder, removeFromBasketServer } from 'components/store/clothes/actionCreators/getClothes';
import { useNavigate } from 'react-router-dom';
import { Clothes } from 'components/store/clothes/types';
import { removeFromBasket } from 'components/store/clothes/slice';
import { PAYMENTS_TYPE } from 'types/payments';

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
interface newOrder {
  Data: FormData;
  Address: FormAddress;
  Items: Clothes[];
  Total: number;
  PaymentMethod: string;
}

export const Ordering = () => {
  const [buyerData, setBuyerData] = useState({ name: '', phone: '', email: '', message: '' });
  const [buyerAddress, setBuyerAddress] = useState({ country: '', street: '', apartment: '', city: '', house: '' });
  const refData = useRef<FormikProps<FormData>>(null);
  const refAddress = useRef<FormikProps<FormAddress>>(null);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENTS_TYPE.CARD);
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const dataTotal = useAppSelector((state) => state.total.total);
  const dataBasket = useAppSelector((state) => state.basket.basket);
  const remove = (el: Clothes) => {
    dispatch(removeFromBasketServer(el.id));
    dispatch(removeFromBasket(el));
  };
  const order: newOrder = {
    Data: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    Address: { country: '', street: '', apartment: '', city: '', house: '' },
    Items: [],
    Total: 0,
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
    if (Object.keys(buyerData.name).length !== 0 && Object.keys(buyerAddress.country).length !== 0) {
      order.Data = buyerData;
      order.Address = buyerAddress;
      order.Items = dataBasket;
      order.Total = dataTotal;
      order.PaymentMethod = paymentMethod;
      try {
        dispatch(createOrder(order));
        dataBasket.map((el) => remove(el));
        history('/success');
      } catch (err) {
        history('*');
      }
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
