import { Story, Meta } from '@storybook/react';
import Hero, { HeroProps } from '.';

export default {
  title: 'Hero',
  component: Hero,
} as Meta;

export const Default: Story<HeroProps> = (args) => <Hero {...args} />;

Default.args = {
  movies: {},
};
