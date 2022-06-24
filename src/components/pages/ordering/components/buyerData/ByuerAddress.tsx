import React from 'react';
import style from 'components/pages/ordering/components/main/ordering.module.scss';

const address: string[] = ['Cтрана', 'Город', 'Улица', 'Дом', 'Квартира'];

export const BuyerAddress = () => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Адрес получателя </div>
      {address.map((item) => (
        <input className={style.input} placeholder={item} />
      ))}
    </div>
  );
};
