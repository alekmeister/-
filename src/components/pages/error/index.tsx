import { Title } from 'components/title/Title';
import React from 'react';
import style from './index.module.scss';

export const Error: React.FC = () => {
  return (
    <div className={style.container}>
      <Title>Что-то пошло не так...</Title>
      <div className={style.text}>Данной страницы не существует. Пока что...</div>
    </div>
  );
};
