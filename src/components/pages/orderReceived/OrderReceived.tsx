import React from 'react';
import style from 'components/pages/orderReceived/orderReceived.module.scss';
import { Title } from 'components/title/Title';
import { ReactComponent as ConfirmIcon } from 'assets/checkmark.svg';
import { Link } from 'react-router-dom';

export const OrderReceived: React.FC = () => {
  return (
    <div className={style.container}>
      <Title> Заказ получен </Title>
      <div className={style.inner}>
        <div className={style.leftBlock}>
          <ConfirmIcon className={style.icon} />
          <div className={style.success}>
            Заказ успешно оформлен
            <div className={style.text}>Мы свяжемся с вами в ближайшее время!</div>
          </div>
        </div>
        <Link to="/store">
          <button className={style.btn}> На главную</button>
        </Link>
      </div>
    </div>
  );
};
