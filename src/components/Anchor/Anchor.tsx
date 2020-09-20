import React from 'react';
import { AnchorProps } from './Anchor.types';
import styled from 'styled-components';

const Anchor = styled.a<AnchorProps>`
  color: var(--c-text, ${({ theme }) => theme.cText});
  transition: color 150ms ease-in-out;
  outline: none;

  :hover {
    color: var(--c-text-hover, ${({ theme }) => theme.cAccent});
    cursor: pointer;
  }
`;
export { Anchor };
