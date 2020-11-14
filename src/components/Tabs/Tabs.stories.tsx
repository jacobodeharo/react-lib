import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from '../theme';
import { availableThemes, ThemeID } from '../theme/variants';
import { Tabs } from './Tabs';
import { TabsProps } from './Tabs.types';

import { Selector } from './Selector/Selector';
import { Panel } from './Panel/Panel';
import {
  RenderPanelContentA,
  RenderPanelContentB,
  RenderPanelContentC,
} from './Tabs.storyhelper';

export default {
  title: '@/components/Containers/Tabs',
  component: Tabs,
  argTypes: {
    themeName: {
      control: {
        type: 'select',
        options: Object.keys(availableThemes),
      },
    },
  },
} as Meta;

type StoryTabsProps = TabsProps & {
  themeName: string;
};

const Template: Story<StoryTabsProps> = (args) => {
  const themeTextcolor =
    availableThemes[args.themeName as ThemeID].primaryTextColor;
  return (
    <ThemeProvider theme={availableThemes[args.themeName as ThemeID]}>
      <Tabs selectedTab='Tab A'>
        <Selector tabId='Tab A'>Tab A</Selector>
        <Selector tabId='Tab B'>Tab B</Selector>
        <Selector tabId='Tab C'>Tab C</Selector>
        <Panel tabId='Tab A'>{RenderPanelContentA(themeTextcolor)}</Panel>
        <Panel tabId='Tab B'>{RenderPanelContentB(themeTextcolor)}</Panel>
        <Panel tabId='Tab C'>{RenderPanelContentC(themeTextcolor)}</Panel>
      </Tabs>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  themeName: 'gray',
};
