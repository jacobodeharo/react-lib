import React from 'react';
import { AnchorProps } from './Anchor.types';
import styled from 'styled-components';

const AnchorStyles = styled.a<AnchorProps>`
  color: var(--c-anchor-text, ${({ theme }) => theme.primaryTextColor});
  transition: color 150ms ease-in-out;
  outline: none;

  :hover {
    color: var(--c-anchor-text-hover, ${({ theme }) => theme.primaryColorDark});
    cursor: pointer;
  }
`;
export { AnchorStyles };
