import React, { ButtonHTMLAttributes } from 'react';
import style from './button.module.scss';

// interface ButtonTypes {
//   blackAndWhite: string;
// }
//
// const BUTTON_TYPES: ButtonTypes = {
//   blackAndWhite: style.btn_black_white,
// };

// interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//   buttonType: keyof typeof BUTTON_TYPES;
// }

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
