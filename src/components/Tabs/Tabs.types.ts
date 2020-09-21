import { Theme } from '../theme/theme.types';

export type TTabsContext = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

export type TabsProps = {
  selectedTab: string;
  theme?: Theme;
};
