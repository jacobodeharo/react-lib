import { Theme } from '@/components/theme';

export type TTabsContext = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

export type TabsProps = {
  selectedTab: string;
  theme?: Theme;
};
