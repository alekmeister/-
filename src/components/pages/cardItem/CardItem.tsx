import sweetshot from 'assets/sweetshot.jpg';
import { Title } from 'components/title/Title';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { addToBasketServer } from 'components/store/clothes/actionCreators/getClothes';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CardErrorMessage } from 'components/pages/cardItem/CardErrorMessage';
import { addInBasket } from 'components/store/clothes/slice';
import { Clothes } from 'components/store/clothes/types';
import style from './carditem.module.scss';

const CardItem: React.FC = () => {
  const [activeSize, setActiveSize] = useState('');
  const [activeColor, setActiveColor] = useState('');
  const [amountClothes, setAmountClothes] = useState(1);
  const { clotheId } = useParams();
  const data = useAppSelector((state) => state.clothes.items);

  const dispatch = useAppDispatch();

  const item = data.find((el) => el.id === clotheId) as Clothes;
  const { color, name, price, size, newPrice } = item;
  const amount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountClothes(Number(e.target.value));
  };
  const disableButton = () => {
    if (activeSize && activeColor && amountClothes > 0) return false;
    return true;
  };
  const addToBasket = () => {
    const itemForBasket = {
      ...item,
      amount: amountClothes,
    };
    dispatch(addInBasket(itemForBasket));
    dispatch(addToBasketServer(itemForBasket));
  };

  return (
    <div className={style.container}>
      <Title>{name}</Title>
      <div className={style.item}>
        <img className={style.photo} src={sweetshot} alt={sweetshot} />
        <div className={style.options}>
          <div className={style.price}>{newPrice || price}$</div>
          <div className={cn(style.size, { [style.active_Size_Error]: !activeSize })}>Выберите размер</div>
          {size.map((el) => (
            <button className={cn(style.oneSize, { [style.active_Size]: activeSize === el })} key={uuidv4()} onClick={() => setActiveSize(el)}>
              {el}
            </button>
          ))}
          <div className={cn(style.colors, { [style.active_Color_Error]: !activeColor })}>Выберите Цвет</div>
          {color.map((el) => (
            <button className={cn(style.oneColor, { [style.active_Color]: activeColor === el })} style={{ backgroundColor: `${el}` }} key={uuidv4()} onClick={() => setActiveColor(el)} />
          ))}

          <div className={style.inBasket}>
            <input className={style.amount} type="number" placeholder="0" value={amountClothes} onChange={amount} />
            <button className={cn(style.btn, { [style.btn_disabled]: disableButton() })} disabled={disableButton()} onClick={() => addToBasket()}>
              В корзину
            </button>
          </div>

          <CardErrorMessage info={amountClothes > 0}> Неверное количество</CardErrorMessage>
        </div>
      </div>
      <div className={style.connectedItems}>Связанные товары</div>
    </div>
  );
};

export { CardItem };
