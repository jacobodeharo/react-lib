import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from '../theme';
import { availableThemes } from '../theme/variants';
import { Tabs } from './Tabs';
import { TabsProps } from './Tabs.types';
import { Anchor, Button } from '../..';

import { Selector } from './Selector/Selector';
import { Panel } from './Panel/Panel';

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

const renderPanelContentA = () => (
  <article>
    <h4>Tab A</h4>
    <p>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
    <hr />
  </article>
);

const renderPanelContentB = () => (
  <article>
    <h4>Tab B</h4>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      <br />
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
    <hr />
    <Button onClick={() => alert('It works!')}>Push me!</Button>
  </article>
);

const renderPanelContentC = () => (
  <article>
    <h4>Tab C</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
      tellus augue. Proin ut enim maximus, elementum enim sed, semper augue.
      Nulla facilisi. Suspendisse potenti. Donec efficitur orci vitae efficitur
      faucibus. Etiam a mi et sapien pretium venenatis. Proin ac tellus nec
      metus fringilla elementum eget quis est. Ut finibus sed tortor id
      interdum. Mauris ullamcorper lorem ac dapibus imperdiet. Ut libero turpis,
      varius sit amet risus non, dignissim venenatis tortor. Curabitur non
      sollicitudin est. Donec pretium quam est, dignissim blandit felis porta
      blandit. In et lorem eu lectus finibus fringilla quis at purus. Sed porta
      ac velit sit amet finibus.
    </p>
    <hr />
    <Anchor href='http://google.com' rel='noopener noreferer' target='_blank'>
      Press this link to search in Google
    </Anchor>
  </article>
);

const Template: Story<StoryTabsProps> = (args) => {
  return (
    <ThemeProvider theme={availableThemes[args.themeName]}>
      <Tabs>
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
