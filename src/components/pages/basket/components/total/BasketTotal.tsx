import React from 'react';
import style from 'components/pages/basket/components/total/basketTotal.module.scss';

interface Props {
  total: number;
}

export const BasketTotal: React.FC<Props> = ({ total }) => {
  return <div className={style.total}> Итого: {total || 0} $</div>;
};
