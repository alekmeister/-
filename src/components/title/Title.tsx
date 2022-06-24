import React from 'react';
import style from './title.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => {
  return <div className={style.title}>{children}</div>;
};
