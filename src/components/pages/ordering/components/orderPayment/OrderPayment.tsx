import React from 'react';
import style from 'components/pages/ordering/components/orderPayment/orderPayment.module.scss';

export const OrderPayment: React.FC = () => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Способ оплаты </div>
      <div className={style.paymentMethods}>
        <label>
          <input className={style.paymentMethod} type="checkbox" name="paymentMethod" />
          Оплата наличными
        </label>
      </div>
      <button className={style.btn}>Оформить заказ</button>
    </div>
  );
};
