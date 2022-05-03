import MovieCard from 'components/MovieCard';

export type MoviesRowProps = {
  category: string
  list: any[]
  genresList: any[]
};

// interface Styles {
//   bg: { [key: string]: string }
//   common: string,
// }

// const style: Styles = {
//   bg: {
//     style1: '',
//     style2: '',
//   },
//   common: '',
// };

const MoviesRow = ({ category, list, genresList }: MoviesRowProps) => (
  <div className="mx-20 my-8">
    <h2 className="pb-4 text-2xl font-bold">{category}</h2>
    <div className="flex h-56">
      {list.map((movie) => (
        <MovieCard
          key={movie?.title}
          image={movie.backdrop_path}
          genresList={genresList}
          genres={movie.genre_ids}
          relevance={movie.vote_average}
        />
      ))}
    </div>
  </div>
);

export default MoviesRow;
