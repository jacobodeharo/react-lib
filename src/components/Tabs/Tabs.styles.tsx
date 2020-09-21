import styled from 'styled-components';

const TabsWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 2px 10px 2px #c7c7c7;
  flex-direction: column;
`;

const TabsHeader = styled.div`
  background: #04365d;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  display: flex;
  flex: 1 1 auto;
`;

const TabsBody = styled.div`
  background: #f1f1f1;
  box-sizing: border-box;
  flex: 1 1 auto;
`;

export { TabsWrapper, TabsHeader, TabsBody };
