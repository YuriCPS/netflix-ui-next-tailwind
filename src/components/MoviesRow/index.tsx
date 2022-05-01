export type MoviesRowProps = {
  category: string
  list: any[]
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

const MoviesRow = ({ category, list }: MoviesRowProps) => (
  <div className="mx-1 my-8">
    <h2 className="mx-8 mt-10 text-2xl font-bold uppercase">{category}</h2>
    <div className="flex p-4 overflow-x-auto">
      {list.map((movie) => (
        <img
          key={movie.title || movie.name}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />
      ))}
    </div>
  </div>
);

export default MoviesRow;
