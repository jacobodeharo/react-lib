import styled from 'styled-components';

const StyledSelector = styled.div`
  align-items: center;
  background: gold;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  min-height: 35px;
  margin: 10px;

  :hover {
    cursor: pointer;
    background: darkgoldenrod;
  }
`;

export { StyledSelector };
