import style from 'components/header/style/headerNav.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav: React.FC = () => {
  return (
    <div className={style.navigation}>
      <nav className={style.nav}>
        <NavLink to="/" className={style.nav_link}>
          Главная
        </NavLink>
        <NavLink to="store" className={style.nav_link}>
          Магазин
        </NavLink>
        <NavLink to="*" className={style.nav_link}>
          О бренде
        </NavLink>
        <NavLink to="contact" className={style.nav_link}>
          Контакты
        </NavLink>
      </nav>
    </div>
  );
};
