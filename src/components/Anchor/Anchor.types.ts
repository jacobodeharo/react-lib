import { ComponentProps } from 'react';
import { Theme } from '@/components/theme';

export type AnchorProps = ComponentProps<'a'> & {
  theme?: Theme;
};
