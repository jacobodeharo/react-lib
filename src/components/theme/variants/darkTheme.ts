import { Theme } from '../theme.types';

export const DARK_THEME: Theme = {
  cText: '#e5d3d8',
  cBackground: '#39393c',
  cAccent: '#afcce9',
  cAccentBackground: '#4141a2',
  cStroke: '#e5d3d8',
};

export const lightTheme: Theme = {
  ...DARK_THEME,
};
