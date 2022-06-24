import style from 'components/header/style/headerPhone.module.scss';
import React from 'react';
import Phone from 'assets/phone.svg';

export const HeaderPhoneLogo = () => {
  return <img className={style.logo} src={Phone} alt={Phone} />;
};
