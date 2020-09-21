import React from 'react';
import { PanelProps } from './Panel.types';
import { useTabs } from '../Tabs.hooks';
import { StyledPanel } from './Panel.styles';

const Panel: React.FC<PanelProps> = (props) => {
  const { activeTab } = useTabs();
  const { children, tabId } = props;
  return activeTab === tabId ? <StyledPanel>{children}</StyledPanel> : null;
};

export { Panel };
