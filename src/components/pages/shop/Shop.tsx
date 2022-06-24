import React, { useEffect, useState } from 'react';
import { Clothes } from 'components/clothres/Clothes';
import { Title } from 'components/title/Title';
import { Button } from 'components/UiKit/Button';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import { getClothes } from 'components/store/clothes/actionCreators/getClothes';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import style from './shop.module.scss';

const categories: string[] = ['Все', 'Пальто', 'Свитшоты', 'Футболки', 'Купальник'];

export const Shop: React.FC = () => {
  const data = useAppSelector((state) => state.clothes.items);
  const [activeFilter, setActiveFilter] = useState('Все');
  const filtered = data.filter((el) => el.category.includes(activeFilter));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <div className={style.container}>
      <Title>Магазин</Title>
      <div className={style.categories}>
        {categories.map((el) => (
          <Button className={cn(style.categories_btn, { [style.active]: el === activeFilter })} key={uuidv4()} onClick={() => setActiveFilter(el)}>
            {el}
          </Button>
        ))}
      </div>
      <div className={style.displayed}>9 из 12 товаров</div>
      <Clothes items={filtered} />
      <div className={style.pages}>
        <Button className={style.pages_btn}>1</Button>
        <Button className={style.pages_btn}>2</Button>
      </div>
    </div>
  );
};
