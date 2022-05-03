import { render, screen } from '@testing-library/react';

import MoviesRow from '.';

const moviesList = [
  {
    adult: false,
    backdrop_path: '/5P8SmMzSNYikXpxil6BYzJ16611.jpg',
    genre_ids: [
      80,
      9648,
      53,
    ],
    id: 414906,
    original_language: 'en',
    original_title: 'The Batman',
    overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
    popularity: 9031.638,
    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    release_date: '2022-03-01',
    title: 'The Batman',
    video: false,
    vote_average: 7.8,
    vote_count: 4043,
  },
  {
    adult: false,
    backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    genre_ids: [
      28,
      12,
      878,
    ],
    id: 634649,
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    popularity: 4725.378,
    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8.1,
    vote_count: 12208,
  },
];

const genresList = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

describe('<MoviesRow />', () => {
  it('should render the heading', () => {
    render(
      <MoviesRow
        category="Title"
        list={moviesList}
        genresList={genresList}
      />,
    );

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument();
  });
});
