import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from '../theme';
import { availableThemes } from '../theme/variants';
import { Tabs } from './Tabs';
import { TabsProps } from './Tabs.types';

import { Selector } from './Selector/Selector';
import { Panel } from './Panel/Panel';
import {
  renderPanelContentA,
  renderPanelContentB,
  renderPanelContentC,
} from './Tabs.storyhelper';

export default {
  title: 'Components/Containers/Tabs',
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
  return (
    <ThemeProvider theme={availableThemes[args.themeName]}>
      <Tabs selectedTab='Tab A'>
        <Selector tabId='Tab A'>Tab A</Selector>
        <Selector tabId='Tab B'>Tab B</Selector>
        <Selector tabId='Tab C'>Tab C</Selector>
        <Panel tabId='Tab A'>{renderPanelContentA()}</Panel>
        <Panel tabId='Tab B'>{renderPanelContentB()}</Panel>
        <Panel tabId='Tab C'>{renderPanelContentC()}</Panel>
      </Tabs>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  themeName: 'light',
};
