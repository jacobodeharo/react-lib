import React from 'react';
import { PanelProps } from './Panel.types';
import { useTabs } from '../Tabs.hooks';

const Panel: React.FC<PanelProps> = (props) => {
  const { activeTab } = useTabs();
  const { children, tabId } = props;
  return activeTab === tabId ? <div>{children}</div> : null;
};

export { Panel };
