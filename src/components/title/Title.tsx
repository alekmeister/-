import React from 'react';
import style from './title.module.scss';

type TitleProps = {
  children: string;
};

export const Title = (props: TitleProps) => {
  return <div className={style.title}>{props.children}</div>;
};
