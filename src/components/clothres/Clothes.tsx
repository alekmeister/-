import tShirt from 'assets/tShirt.jpg';
import React from 'react';
import type { Clothes as ClothesType } from 'components/store/clothes/types';
import style from 'components/clothres/clothres.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  items: ClothesType[];
}

export const Clothes: React.FC<Props> = ({ items }) => {
  return (
    <div className={style.items}>
      {items.map((el) => (
        <div className={style.items_item} key={uuidv4()}>
          <Link to={el.id}>
            <div className={style.items_item_img}>
              <img className={style.newCollection} src={el.img} alt={tShirt} />
            </div>
          </Link>
          <div className={style.items_item_title}> {el.name} </div>
          <div className={style.items_item_prices}>
            <div className={cn(style.items_item_price, { [style.discount]: el.newPrice })}>{el.price}$</div>
            {el.newPrice ? <div className={style.items_item_newPrice}>{el.newPrice}$</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
};
