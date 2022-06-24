import React from 'react';
import style from 'components/pages/ordering/components/main/ordering.module.scss';
import { Input } from 'components/UiKit/Input';

const Info: string[] = ['Имя', 'E-mail', 'Телефон'];

export const BuyerInfo = () => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Данные покупателя </div>
      {Info.map((el) => (
        <Input placeholder={el} />
      ))}
    </div>
  );
};
