import React from 'react';
import style from 'components/pages/orderReceived/orderReceived.module.scss';
import { Title } from 'components/title/Title';
import { ReactComponent as ConfirmIcon } from 'assets/checkmark.svg';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';

export const OrderReceived: React.FC = () => {
  return (
    <>
      <Header />
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
          <button className={style.btn}> На главную</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
