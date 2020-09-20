import React from 'react';
import { TTabsContext } from './Tabs.types';
import { TabsContext } from './Tabs.context';

const useTabs = (): TTabsContext => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

export { useTabs };
