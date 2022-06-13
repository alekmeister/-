import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Basket } from 'assets/basket.svg';
import React from 'react';
import style from 'components/header/header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.navigation}>
          <div className={style.header_left}>
            <Logo className={style.logo_icon} />
            <div className={style.logo}>WOMAZING</div>
          </div>
          <nav className={style.nav}>
            <a className={style.nav_link} href="/">
              Главная
            </a>
            <a className={style.nav_link} href="/">
              Магазин
            </a>
            <a className={style.nav_link} href="/">
              О бренде
            </a>
            <a className={style.nav_link} href="/">
              Контакты
            </a>
          </nav>
          <div className={style.phone}>
            <Phone className={style.phone_icon} />
            <div className={style.phone_number} />+ 7(495) 823 - 54 - 12
          </div>
          <Basket className={style.basket} />
        </div>
      </div>
    </header>
  );
}

export { Header };
