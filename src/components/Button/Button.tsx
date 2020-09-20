import React from 'react';
import { ButtonProps } from './Button.types';
import styled from 'styled-components';

const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: var(--c-bg, ${({ theme }) => theme.cBackground});
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--c-border, ${({ theme }) => theme.cStroke}) inset;
  color: var(--c-text, ${({ theme }) => theme.cText});
  display: inline-flex;
  justify-content: center;
  min-height: 35px;
  padding: 0 20px;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out,
    box-shadow 150ms ease-in-out;
  outline: none;

  :hover {
    background-color: var(
      --c-bg-hover,
      ${({ theme }) => theme.cAccentBackground}
    );
    cursor: pointer;
  }
`;
export { Button };
