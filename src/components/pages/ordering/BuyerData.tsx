import React from 'react';
import style from './style/buyerData.module.scss';

export const BuyerData = () => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Данные покупателя </div>
      <input className={style.input} placeholder="Имя" />
      <input className={style.input} placeholder="E-mail" />
      <input className={style.input} placeholder="Телефон" />
    </div>
  );
};
