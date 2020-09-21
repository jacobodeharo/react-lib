import React from 'react';
import { SelectorProps } from './Selector.types';
import { useTabs } from '../Tabs.hooks';
import { StyledSelector } from './Selector.styles';

const Selector: React.FC<SelectorProps> = (props) => {
  const { setActiveTab, activeTab } = useTabs();
  const { tabId, children } = props;
  const clickHandler = () => {
    setActiveTab(tabId);
  };
  return (
    <StyledSelector
      onClick={clickHandler}
      active={activeTab === tabId}
      {...props}
    >
      {children}
    </StyledSelector>
  );
};

export { Selector };
