import React, { InputHTMLAttributes } from 'react';
import style from './Input.module.scss';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export const Input: React.FC<Props> = (props) => {
  return <input className={style.input} {...props} />;
};
