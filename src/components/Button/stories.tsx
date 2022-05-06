import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Zinc: Story<ButtonProps> = (args) => <Button {...args} />;

Zinc.args = {
  href: '#',
  text: 'Button',
  color: 'zinc',
  size: 'medium',
};

export const Neutral: Story<ButtonProps> = (args) => <Button {...args} />;

Neutral.args = {
  href: '#',
  text: 'Button',
  color: 'neutral',
  size: 'medium',
};
