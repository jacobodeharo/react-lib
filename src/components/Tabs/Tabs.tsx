import * as React from 'react';
import { TabsProps } from './Tabs.types';
import { TabsContext } from './Tabs.context';
import { Selector } from './Selector/Selector';
import { Panel } from './Panel/Panel';
import { renderChildrenOfType } from '../../helper/reactDomUtils';
import { TabsBody, TabsHeader, TabsWrapper } from './Tabs.styles';

const Tabs: React.FC<TabsProps> = (props) => {
  const { children, selectedTab } = props;
  const [activeTab, setActiveTab] = React.useState(selectedTab || '');
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab]
  );
  return (
    <TabsContext.Provider value={memoizedContextValue}>
      <TabsWrapper>
        <TabsHeader>{renderChildrenOfType(children, Selector)}</TabsHeader>
        <TabsBody>{renderChildrenOfType(children, Panel)}</TabsBody>
      </TabsWrapper>
    </TabsContext.Provider>
  );
};

export { Tabs };
