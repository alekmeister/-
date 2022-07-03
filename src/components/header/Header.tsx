import React from 'react';
import style from 'components/header/style/header.module.scss';
import { HeaderLogo } from 'components/header/HeaderLogo';
import { HeaderNav } from 'components/header/HeaderNav';
import { HeaderPhoneLogo } from 'components/header/HeaderPhoneLogo';
import { HeaderPhoneNumber } from 'components/header/HeaderPhoneNumber';
import { Link } from 'react-router-dom';
import { HeaderBasket } from 'components/header/HeaderBasket';

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
        <Link to="basket">
          <HeaderBasket />
        </Link>
      </header>
    </div>
  );
};

export { Header };
