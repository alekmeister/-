import tShirt from 'assets/tShirt.jpg';
import kypalnik from 'assets/kypalnik.jpg';
import sweetshot from 'assets/sweetshot.jpg';
import React from 'react';
import style from 'components/clothres/clothres.module.scss';

function Clothres() {
  return (
    <div className={style.items}>
      <div className={style.items_item}>
        <div className={style.items_item_img}>
          <img className={style.newCollection} src={tShirt} alt={tShirt} />
        </div>
        <div className={style.items_item_title}> Футболка USA </div>
        <div className={style.items_item_prices}>
          <div className={style.items_item_price}>$229</div>
          <div className={style.items_item_newPrice}>$129 </div>
        </div>
      </div>
      <div className={style.items_item}>
        <div className={style.items_item_img}>
          <img className={style.newCollection} src={kypalnik} alt={kypalnik} />
        </div>
        <div className={style.items_item_title}>Купальник Glow </div>
        <div className={style.items_item_price}> $129 </div>
      </div>
      <div className={style.items_item}>
        <div className={style.items_item_img}>
          <img className={style.newCollection} src={sweetshot} alt={sweetshot} />
        </div>
        <div className={style.items_item_title}> Свитшот Sweet Shot</div>
        <div className={style.items_item_price}> $129 </div>
      </div>
    </div>
  );
}

export { Clothres };
