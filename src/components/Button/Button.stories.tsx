import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from '../theme';
import { availableThemes, ThemeID } from '../theme/variants';
import { ButtonStyles } from './Button.styles';
import { ButtonProps } from './Button.types';

export default {
  title: '@/components/Base/Button',
  component: ButtonStyles,
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
    <ThemeProvider theme={availableThemes[args.themeName as ThemeID]}>
      <ButtonStyles>{label}</ButtonStyles>
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  themeName: 'light',
};
