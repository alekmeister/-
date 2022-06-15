import React from 'react';
import style from './styles/basketTitle.module.scss';

export const BasketTitle: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>Товар</div>
      <div className={style.item}>Цена</div>
      <div className={style.item}>Количество</div>
      <div className={style.item}>Всего</div>
    </div>
  );
};
