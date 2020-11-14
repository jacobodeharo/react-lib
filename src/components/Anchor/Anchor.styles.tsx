import styled from 'styled-components';
import { AnchorProps } from './Anchor.types';

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
