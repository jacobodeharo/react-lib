import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GRAY_THEME as defaultTheme } from './variants/grayTheme';
import { ThemeProviderProps } from './theme.types';

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={theme || defaultTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export { ThemeProviderProps, ThemeProvider };
