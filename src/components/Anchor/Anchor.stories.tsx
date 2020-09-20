import React from 'react';
import { Anchor } from './Anchor';
import { AnchorProps } from './Anchor.types';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from '../theme';
import { availableThemes } from '../theme/variants';

export default {
  title: 'Components/Anchor',
  component: Anchor,
  argTypes: {
    label: { control: 'text' },
    themeName: {
      control: {
        type: 'select',
        options: Object.keys(availableThemes),
      },
    },
  },
} as Meta;

type StoryButtonProps = AnchorProps & {
  label: string;
  themeName: string;
};

const Template: Story<StoryButtonProps> = (args) => {
  const { label } = args;
  return (
    <ThemeProvider theme={availableThemes[args.themeName]}>
      <Anchor>{label}</Anchor>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'This is an anchor (link)',
  themeName: 'light',
};
