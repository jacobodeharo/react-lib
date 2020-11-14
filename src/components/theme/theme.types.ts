import { DefaultTheme } from 'styled-components';
import { ReactNode } from 'react';

export type Theme = DefaultTheme & ColorPalette;

export type ThemeProviderProps = {
  theme?: Theme;
  children: ReactNode;
};

export type ColorName =
  | 'primaryColor'
  | 'primaryColorDark'
  | 'primaryColorLight'
  | 'primaryColorText'
  | 'accentColor'
  | 'primaryTextColor'
  | 'secondaryTextColor'
  | 'dividerColor';
export type ColorPalette = {
  [P in ColorName]: string;
};
