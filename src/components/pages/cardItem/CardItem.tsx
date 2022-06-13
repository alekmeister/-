import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import sweetshot from 'assets/sweetshot.jpg';
import { Clothres } from 'components/clothres/Clothres';
import style from './carditem.module.scss';

function CardItem() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.title}>Свитшот Sweet Shot</div>
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
        <Clothres />
      </div>
      <Footer />
    </>
  );
}

export { CardItem };
