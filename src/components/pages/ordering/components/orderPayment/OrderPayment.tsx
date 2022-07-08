import React from 'react';
import style from 'components/pages/ordering/components/orderPayment/orderPayment.module.scss';
import { v4 as uuidv4 } from 'uuid';

const paymentMethodAll = [
  {
    name: 'card',
    placeholder: 'Карта банка',
  },
  {
    name: 'cash',
    placeholder: 'Наличные',
  },
  {
    name: 'cryptocurrency',
    placeholder: 'Криптовалюта',
  },
];

interface Props {
  setPaymentMethod: (arg: string) => void;
  paymentMethod: string;
}

export const OrderPayment: React.FC<Props> = ({ setPaymentMethod, paymentMethod }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.name);
  };

  return (
    <div className={style.inner}>
      <div className={style.title}> Способ оплаты </div>
      <div className={style.paymentMethods}>
        {paymentMethodAll.map((el) => (
          <label>
            <input className={style.paymentMethod} type="checkbox" name={el.name} checked={el.name === paymentMethod} onChange={(e) => handleOnChange(e)} key={uuidv4()} />
            {el.placeholder}
          </label>
        ))}
      </div>
    </div>
  );
};
//
