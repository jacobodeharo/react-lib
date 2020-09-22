import styled, { css } from 'styled-components';
import { SelectorProps } from './Selector.types';

const getBgColor = (active: boolean, hovered: boolean) =>
  active
    ? css`var(--c-selector-bg-active, ${({ theme }) =>
        theme.primaryColorLight})`
    : hovered
    ? css`var(--c-selector-bg-hover, ${({ theme }) => theme.primaryColor})`
    : css`var(--c-selector-bg, ${({ theme }) => theme.primaryColorDark})`;

const getFgColor = (active: boolean, hovered: boolean) =>
  active
    ? css`var(--c-selector-fg-active, ${({ theme }) => theme.primaryTextColor})`
    : hovered
    ? css`var(--c-selector-fg-hover, ${({ theme }) => theme.primaryColorText})`
    : css`var(--c-selector-fg, ${({ theme }) => theme.primaryColorLight})`;

const StyledSelector = styled.div<SelectorProps>`
  align-items: center;
  background-color: ${({ active }) => getBgColor(active, false)};
  color: ${({ active }) => getFgColor(active, false)};
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  min-height: 50px;
  transition: background-color 150ms ease-in-out;

  :first-of-type {
    border-radius: 5px 0 0 0;
  }

  :last-of-type {
    border-radius: 0 5px 0 0;
  }

  :hover {
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    color: ${({ active }) => getFgColor(active, true)};
    background-color: ${({ active }) => getBgColor(active, true)};
  }
`;

export { StyledSelector };
