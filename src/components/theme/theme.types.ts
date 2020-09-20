import { DefaultTheme } from 'styled-components';

export type ColorName =
  | 'cText'
  | 'cStroke'
  | 'cBackground'
  | 'cAccent'
  | 'cAccentBackground';
export type ColorPalette = {
  [P in ColorName]: string;
};

export type Theme = DefaultTheme & ColorPalette;
