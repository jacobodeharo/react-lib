import styled from 'styled-components';
import { SelectorProps } from './Selector.types';

const StyledSelector = styled.div<SelectorProps>`
  align-items: center;
  background-color: ${({ active }) => (active ? '#f1f1f1' : '#59b0fd')};
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
    background-color: ${({ active }) => (active ? '#f1f1f1' : '#8dc3f1')};
  }
`;

export { StyledSelector };
