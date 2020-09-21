import React from 'react';
import { ButtonProps } from './Button.types';
import styled, { css } from 'styled-components';

const getBgColor = (hovered: boolean) =>
  hovered
    ? css`var(--c-button-bg-hover, ${({ theme }) => theme.primaryColor})`
    : css`var(--c-button-bg, ${({ theme }) => theme.primaryColorDark})`;

const getFgColor = (hovered: boolean) =>
  hovered
    ? css`var(--c-button-fg-hover, ${({ theme }) => theme.primaryColorText})`
    : css`var(--c-button-fg, ${({ theme }) => theme.primaryColorLight})`;

const ButtonStyles = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${() => getBgColor(false)};
  border: 0;
  border-radius: 5px;
  color: ${() => getFgColor(false)};
  display: inline-flex;
  justify-content: center;
  min-height: 40px;
  padding: 0 20px;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
  outline: none;

  :hover {
    background-color: ${() => getBgColor(true)};
    color: ${() => getFgColor(true)};
    cursor: pointer;
  }
`;
export { ButtonStyles };
