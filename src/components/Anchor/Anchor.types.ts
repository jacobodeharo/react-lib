import { ComponentProps } from 'react';
import { Theme } from '../theme/theme.types';

export type AnchorProps = ComponentProps<'a'> & {
  theme?: Theme;
};
