import React from 'react';
import style from 'preloader/Preloader.module.scss';
import preloader from 'preloader/preloader.gif';

export const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img className={style.preloader_img} src={preloader} alt="preloader" />
    </div>
  );
};
