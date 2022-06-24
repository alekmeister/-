import style from 'components/header/style/headerLogo.module.scss';
import icon from 'assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className={style.headerLogo}>
        <img className={style.icon} src={icon} alt={icon} />
        <div className={style.logo}>WOMAZING</div>
      </div>
    </Link>
  );
};
