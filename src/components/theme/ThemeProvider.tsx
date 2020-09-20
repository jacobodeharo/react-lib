import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme as defaultTheme } from './variants/lightTheme';
import { Theme } from './theme.types';

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <StyledThemeProvider theme={theme || defaultTheme}>
      {children}
    </StyledThemeProvider>
  );
};
