import React, { useEffect, useState } from 'react';
import { BasketTitle } from 'components/pages/basket/components/title/BasketTitle';
import { BasketItem } from 'components/pages/basket/components/items/BasketItems';
import { BasketPromo } from 'components/pages/basket/components/promo/BasketPromo';
import { BasketTotal } from 'components/pages/basket/components/total/BasketTotal';
import { Title } from 'components/title/Title';
import style from 'components/pages/basket/components/main/basket.module.scss';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { getBasket } from 'components/store/clothes/actionCreators/getClothes';

enum PROMO_TYPES {
  PERCENT = 'PERCENT',
  FIXED = 'FIXED',
}

interface Promo {
  name: string;
  type: PROMO_TYPES;
  value: number;
}

const AVAILIABLE_PROMOCODES: Promo[] = [
  {
    name: 'newyear22',
    type: PROMO_TYPES.PERCENT,
    value: 22,
  },
  {
    name: 'free10',
    type: PROMO_TYPES.FIXED,
    value: 10,
  },
];

const Basket: React.FC = () => {
  const [promo, setPromo] = useState('');

  const dataBasket = useAppSelector((state) => state.basket.basket);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, []);
  let counter = 0;
  const calculateTotal = dataBasket
    .map((el) => el.price * el.amount)
    .map((i) => (counter += i))
    .reverse()[0];

  const total = (): number => {
    const validPromo = AVAILIABLE_PROMOCODES.find(({ name }) => name === promo);
    if (validPromo) {
      switch (validPromo.type) {
        case PROMO_TYPES.FIXED:
          return calculateTotal - validPromo.value;
        case PROMO_TYPES.PERCENT:
          return calculateTotal - (calculateTotal * validPromo.value) / 100;
        default: {
          return 0;
        }
      }
    } else {
      return calculateTotal;
    }
  };

  return (
    <div className={style.container}>
      <Title>Корзина</Title>
      <div className={style.inner}>
        <BasketTitle />
        <BasketItem data={dataBasket} />
        <BasketPromo setPromo={setPromo} promo={promo} />
        <div className={style.total}>
          <BasketTotal total={total()} />
          <button className={style.checkout}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export { Basket };
