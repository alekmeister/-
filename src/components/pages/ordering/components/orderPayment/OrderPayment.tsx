import React from 'react';
import style from 'components/pages/ordering/components/orderPayment/orderPayment.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { PAYMENTS_TYPE } from 'types/payments';

const paymentMethodAll = [
  {
    name: PAYMENTS_TYPE.CARD,
    placeholder: 'Карта банка',
  },
  {
    name: PAYMENTS_TYPE.CASH,
    placeholder: 'Наличные',
  },
  {
    name: PAYMENTS_TYPE.CRYPTO,
    placeholder: 'Криптовалюта',
  },
];

interface Props {
  setPaymentMethod: (arg: PAYMENTS_TYPE) => void;
  paymentMethod: PAYMENTS_TYPE;
}

export const OrderPayment: React.FC<Props> = ({ setPaymentMethod, paymentMethod }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.name as PAYMENTS_TYPE);
  };

  return (
    <div className={style.inner}>
      <div className={style.title}> Способ оплаты </div>
      <div className={style.paymentMethods}>
        {paymentMethodAll.map((el) => (
          <label key={uuidv4()}>
            <input className={style.paymentMethod} type="checkbox" name={el.name} checked={el.name === paymentMethod} onChange={(e) => handleOnChange(e)} />
            {el.placeholder}
          </label>
        ))}
      </div>
    </div>
  );
};
//
