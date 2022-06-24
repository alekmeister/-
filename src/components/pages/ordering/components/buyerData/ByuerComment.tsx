import React from 'react';
import style from 'components/pages/ordering/components/main/ordering.module.scss';

export const BuyerComment = () => {
  return (
    <div className={style.inner}>
      <div className={style.title}> Комментарии </div>
      <input className={style.input} placeholder="Комментарий..." />
    </div>
  );
};
