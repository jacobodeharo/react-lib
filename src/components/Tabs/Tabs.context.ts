import { TTabsContext } from './Tabs.types';
import * as React from 'react';

const TabsContext = React.createContext<TTabsContext | undefined>(undefined);

export { TabsContext };
