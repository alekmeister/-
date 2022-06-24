import sweetshot from 'assets/sweetshot.jpg';
import { Title } from 'components/title/Title';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from 'components/store/types';
import style from './carditem.module.scss';

const CardItem: React.FC = () => {
  const data = useAppSelector((store) => store);
  console.log(data);
  const { clotheId } = useParams();
  // const selectedItems =
  return (
    <div className={style.container}>
      <Title>Свитшот Sweet Shot </Title>
      <div className={style.item}>
        <img className={style.photo} src={sweetshot} alt={sweetshot} />
        <div className={style.options}>
          <div className={style.price}>311$</div>
          <div className={style.size}>Выберите размер</div>
          <button className={style.oneSize}>S</button>
          <button className={style.oneSize}>M</button>
          <button className={style.oneSize}>L</button>
          <button className={style.oneSize}>XL</button>
          <div className={style.colors}>Выберите Цвет</div>
          <button className={style.oneColor}> </button>
          <button className={style.oneColor}> </button>
          <button className={style.oneColor}> </button>
          <button className={style.oneColor}> </button>
          <div className={style.inBasket}>
            <input className={style.amount} placeholder="1" />
            <button className={style.btn}> В корзину</button>
          </div>
        </div>
      </div>
      <div className={style.connectedItems}>Связанные товары</div>
    </div>
  );
};

export { CardItem };
