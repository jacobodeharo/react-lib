import { ComponentProps } from 'react';
import { Theme } from '../theme/theme.types';

export type ButtonProps = ComponentProps<'button'> & {
  theme?: Theme;
};
