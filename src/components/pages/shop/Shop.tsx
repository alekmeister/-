import React, { useEffect, useState } from 'react';
import { Clothes } from 'components/clothres/Clothes';
import { Title } from 'components/title/Title';
import { Button } from 'components/UiKit/Button';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import { getClothes } from 'components/store/clothes/actionCreators/getClothes';
import { useAppDispatch, useAppSelector } from 'components/store/types';
import { Pagination } from 'components/pagination';
import style from './shop.module.scss';

const categories: string[] = ['Все', 'Пальто', 'Свитшоты', 'Футболки', 'Купальник'];

export const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = useAppSelector((state) => state.clothes.items);
  const dispatch = useAppDispatch();

  const [activeFilter, setActiveFilter] = useState('Все');
  useEffect(() => {
    dispatch(getClothes({ page: currentPage }));
  }, [currentPage]);

  const filtered = data.filter((el) => el.category.includes(activeFilter));
  const showClothes = () => (filtered.length >= 8 ? 8 : filtered.length);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

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
      <div className={style.displayed}> Показано {showClothes()} товаров</div>
      <Clothes items={filtered} />
      <div className={style.pages}>
        <Pagination onChangePage={handleChangePage} page={currentPage} />
      </div>
    </div>
  );
};
