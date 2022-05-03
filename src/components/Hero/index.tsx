import { useState, useEffect } from 'react';
import Button from 'components/Button';

export type HeroProps = {
  movies: any;
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

const Hero = ({ movies }: HeroProps) => {
  // const movie = movies[Math.floor(Math.random() * movies.length - 1)];
  // const movie = movies[2];
  const [movie, setMovie] = useState({
    title: '',
    backdrop_path: '',
    overview: '',
  });

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
  }, [movies]);

  return (
    <div
      className="min-h-[80vh] p-8 w-screen bg-cover"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <h1 className="pt-10 mb-4 text-5xl font-bold mt-96 ">{movie.title}</h1>
      <p className="w-1/3 mb-4 text-lg font-medium ">{movie.overview}</p>
      <Button text="Play" size="large" color="neutral" href="#" />
      <Button text="More information" size="large" color="neutral" href="#" />
    </div>
  );
};

export default Hero;
