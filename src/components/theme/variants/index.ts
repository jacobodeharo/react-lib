import { GRAY_THEME } from './grayTheme';
import { AMBER_THEME } from './amberTheme';
import type { Theme } from '../theme.types';

export type ThemeID = 'gray' | 'amber';
export type Themes = {
  [P in ThemeID]: Theme;
};

export const availableThemes: Themes = {
  gray: GRAY_THEME,
  amber: AMBER_THEME,
};
