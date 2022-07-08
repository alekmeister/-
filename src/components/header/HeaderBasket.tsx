import basket from 'assets/basket.svg';
import React from 'react';
import { useAppSelector } from 'components/store/types';
import style from './style/headerBasket.module.scss';

export const HeaderBasket = () => {
  const dataBasket = useAppSelector((state) => state.basket.basket);
  const amountClothes = dataBasket.length;
  return (
    <div className={style.basket}>
      <img className={style.img} src={basket} alt={basket} />
      {amountClothes > 0 ? <div className={style.circle}>{amountClothes}</div> : null}
    </div>
  );
};
