import React from 'react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from '../theme';
import { availableThemes } from '../theme/variants';

export default {
  title: 'Components/Base/Button',
  component: Button,
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

type StoryButtonProps = ButtonProps & {
  label: string;
  themeName: string;
};

const Template: Story<StoryButtonProps> = (args) => {
  const { label } = args;
  return (
    <ThemeProvider theme={availableThemes[args.themeName]}>
      <Button>{label}</Button>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  themeName: 'light',
};
