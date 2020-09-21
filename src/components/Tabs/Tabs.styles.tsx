import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

const TabsHeader = styled.div`
  background: #ee8f6c;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
`;

const TabsBody = styled.div`
  background: #ee4a0d;
  box-sizing: border-box;
  flex: 1 1 auto;
`;

export { TabsWrapper, TabsHeader, TabsBody };
