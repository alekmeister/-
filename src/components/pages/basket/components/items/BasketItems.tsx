import close from 'assets/close.svg';
import tShirt from 'assets/tShirt.jpg';
import style from 'components/pages/basket/components/items/basketItems.module.scss';

export const BasketItem = () => {
  return (
    <div className={style.items}>
      <div className={style.titleAndPhoto}>
        {/* svg */}
        <img className={style.close} src={close} alt={close} />
        <img className={style.item} src={tShirt} alt={tShirt} />
        <div className={style.itemTitle}>Футболка USA</div>
      </div>
      <div className={style.amount}>1</div>
      <div className={style.price}>129$</div>
      <div className={style.totalPrice}>129$</div>
    </div>
  );
};
