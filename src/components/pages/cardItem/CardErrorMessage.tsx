import React from 'react';
import style from './cardErrorMessage.module.scss';

type Props = {
  info: boolean;
  children: string;
};
export const CardErrorMessage: React.FC<Props> = ({ info, children }) => {
  return (
    <div
      className={style.errorMessage}
      style={{
        visibility: info ? 'hidden' : 'visible',
      }}
    >
      {children}
    </div>
  );
};
