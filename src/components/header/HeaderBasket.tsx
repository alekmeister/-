import basket from 'assets/basket.svg';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { getBasket } from 'components/store/clothes/actionCreators/getClothes';
import style from './style/headerBasket.module.scss';

export const HeaderBasket = () => {
  const dataBasket = useAppSelector((state) => state.basket.basket);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, []);
  const amountClothes = dataBasket.length;
  return (
    <div className={style.basket}>
      <img className={style.img} src={basket} alt={basket} />
      {amountClothes > 0 ? <div className={style.circle}>{amountClothes}</div> : null}
    </div>
  );
};
