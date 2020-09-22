import styled from 'styled-components';

const StyledPanel = styled.div`
  background-color: var(--c-panel-bg, ${({ theme }) => theme.primaryColorLight});
  color: var(--c-panel-fg, ${({ theme }) => theme.primaryColorText});
  padding: 10px;
  border-radius: 0 0 5px 5px;
`;

export { StyledPanel };
