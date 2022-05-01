import { Story, Meta } from '@storybook/react';
import MoviesRow, { MoviesRowProps } from '.';

export default {
  title: 'MoviesRow',
  component: MoviesRow,
} as Meta;

export const Default: Story<MoviesRowProps> = (args) => <MoviesRow {...args} />;

Default.args = {
  category: '#',
};
