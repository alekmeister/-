import basket from 'assets/basket.svg';
import React from 'react';
import style from 'components/header/style/header.module.scss';
import { HeaderLogo } from 'components/header/HeaderLogo';
import { HeaderNav } from 'components/header/HeaderNav';
import { HeaderPhoneLogo } from 'components/header/HeaderPhoneLogo';
import { HeaderPhoneNumber } from 'components/header/HeaderPhoneNumber';

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <HeaderLogo />
        <HeaderNav />
        <div className={style.phone}>
          <HeaderPhoneLogo />
          <HeaderPhoneNumber />
        </div>
        <img className={style.basket} src={basket} alt={basket} />
      </header>
    </div>
  );
};

export { Header };
