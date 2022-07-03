import React, { useState } from 'react';
import style from 'components/pages/basket/components/promo/basketPromo.module.scss';

export const BasketPromo: React.FC<any> = ({ setPromo }) => {
  const [userPromo, setUserPromo] = useState('');
  return (
    <div className={style.promo}>
      <input className={style.enterPromo} placeholder="Введите купон" value={userPromo} onChange={(e) => setUserPromo(e.target.value)} />
      <button className={style.usePromo} onClick={() => setPromo(userPromo)}>
        Применить{' '}
      </button>
      <button className={style.updateBasket}>Обновить корзину</button>
    </div>
  );
};
// : React.ChangeEvent<HTMLInputElement>
