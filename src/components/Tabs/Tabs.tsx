import * as React from 'react';
import { TabsContext } from './Tabs.context';

const Tabs: React.FC = (props) => {
  const [activeTab, setActiveTab] = React.useState('a');
  const { children } = props;
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab]
  );
  return (
    <TabsContext.Provider value={memoizedContextValue}>
      {children}
    </TabsContext.Provider>
  );
};

export { Tabs };
