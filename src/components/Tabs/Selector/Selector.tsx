import React from 'react';
import { SelectorProps } from './Selector.types';
import { useTabs } from '../Tabs.hooks';

const Selector: React.FC<SelectorProps> = (props) => {
  const { setActiveTab } = useTabs();
  const { tabId, children } = props;
  const clickHandler = () => {
    setActiveTab(tabId);
  };
  return (
    <div className='tab' onClick={clickHandler}>
      {children}
    </div>
  );
};

export { Selector };
