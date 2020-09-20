import React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className='button'>{text}</button>
);

export default Button;
