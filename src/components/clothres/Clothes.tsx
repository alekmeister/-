import tShirt from 'assets/tShirt.jpg';
import React from 'react';
import type { Clothes as ClothesType } from 'components/store/clothes/types';
import style from 'components/clothres/clothres.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  items: ClothesType[];
}

export const Clothes: React.FC<Props> = ({ items }) => {
  return (
    <div className={style.items}>
      {items.map((el) => (
        <div key={el.id} className={style.items_item}>
          <Link to={el.id}>
            <div className={style.items_item_img}>
              <img className={style.newCollection} src={tShirt} alt={tShirt} />
            </div>
          </Link>
          <div className={style.items_item_title}> {el.name} </div>
          <div className={style.items_item_prices}>
            <div className={style.items_item_price}>{el.price}</div>
            <div className={style.items_item_newPrice}>$129</div>
            {/* <button onClick={addClothes}>OK</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};