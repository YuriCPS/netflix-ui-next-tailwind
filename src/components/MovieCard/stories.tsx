import { Story, Meta } from '@storybook/react';
import MovieCard, { MovieCardProps } from '.';

export default {
  title: 'MovieCard',
  component: MovieCard,
} as Meta;

export const Default: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

Default.args = {
  image: '#',
};
