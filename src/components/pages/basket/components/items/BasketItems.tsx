import { ReactComponent as Close } from 'assets/close.svg';
import tShirt from 'assets/tShirt.jpg';
import style from 'components/pages/basket/components/items/basketItems.module.scss';
import { useAppDispatch } from 'components/store/types';
import { Clothes } from 'components/store/clothes/types';
import { removeFromBasketServer } from 'components/store/clothes/actionCreators/getClothes';
import { removeFromBasket } from 'components/store/clothes/slice';
import React from 'react';
import { v4 } from 'uuid';

interface Props {
  data: Clothes[];
}

export const BasketItem: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const remove = (el: Clothes) => {
    dispatch(removeFromBasketServer(el.id));
    dispatch(removeFromBasket(el));
  };
  return (
    <>
      {data.map((el) => (
        <div className={style.item} key={v4()}>
          <div className={style.titleAndPhoto}>
            <Close className={style.close} onClick={() => remove(el)} />
            <img className={style.icon} src={tShirt} alt={tShirt} />
            <div className={style.itemTitle}>{el.name}</div>
          </div>
          <div className={style.price}>{el.price}$</div>
          <div className={style.amount}>{el.amount}</div>
          <div className={style.totalPrice}>{el.price * el.amount}$</div>
        </div>
      ))}
    </>
  );
};
