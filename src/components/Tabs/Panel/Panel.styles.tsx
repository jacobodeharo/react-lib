import styled from 'styled-components';

const StyledPanel = styled.div`
  background: var(--c-button-bg, ${({ theme }) => theme.primaryColorText});
  padding: 10px;
  border-radius: 0 0 5px 5px;
`;

export { StyledPanel };
