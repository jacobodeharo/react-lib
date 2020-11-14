import { ComponentProps } from 'react';
import { Theme } from '@/components/theme';

export type ButtonProps = ComponentProps<'button'> & {
  theme?: Theme;
};
