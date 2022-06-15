import close from 'assets/close.svg';
import tShirt from 'assets/tShirt.jpg';
import style from './styles/basketItems.module.scss';

export const BasketItems = () => {
  return (
    <div className={style.items}>
      <div className={style.titleAndPhoto}>
        <img className={style.сlose} src={close} alt={close} />
        <img className={style.item} src={tShirt} alt={tShirt} />
        <div className={style.itemTitle}>Футболка USA</div>
      </div>
      <div className={style.amount}>1</div>
      <div className={style.price}>129$</div>
      <div className={style.totalPrice}>129$</div>
    </div>
  );
};
