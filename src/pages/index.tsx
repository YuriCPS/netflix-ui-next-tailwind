import axios from 'axios';
import Head from 'next/head';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import MoviesRow from 'components/MoviesRow';

type HomeProps = {
  originals: object[];
  popular: object[];
  nowPlaying: object[];
  trending: object[];
  topRated: object[];
  upcoming: object[];
  genresMovies: object[];
  genresTv: object[];
};

export default function Home({
  originals, popular, nowPlaying, trending, topRated, upcoming, genresMovies, genresTv,
}: HomeProps) {
  return (
    <div>
      <Head>
        <title>Netflix UI by YuriCPS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero movies={popular} />
        <MoviesRow category="Originals" list={originals} genresList={genresTv} type="Series" />
        <MoviesRow category="Popular" list={popular} genresList={genresMovies} type="Movie" />
        <MoviesRow category="Now Playing" list={nowPlaying} genresList={genresMovies} type="Movie" />
        <MoviesRow category="Trending" list={trending} genresList={genresMovies} type="Movie" />
        <MoviesRow category="Top Rated" list={topRated} genresList={genresMovies} type="Movie" />
        <MoviesRow category="Upcoming" list={upcoming} genresList={genresMovies} type="Movie" />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const URL = 'https://api.themoviedb.org/3';
  const API_KEY = '20147a1534ba357ca36b05b79d848ac3';

  const endpoints = {
    originals: '/discover/tv',
    popular: '/movie/popular',
    nowPlaying: '/movie/now_playing',
    trending: '/trending/all/week',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
    genresMovies: '/genre/movie/list',
    genresTv: '/genre/tv/list',
  };

  const originals = await axios.get(`${URL}${endpoints.originals}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.results);

  const popular = await axios.get(`${URL}${endpoints.popular}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.results);

  const nowPlaying = await axios.get(`${URL}${endpoints.nowPlaying}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.results);

  const trending = await axios.get(`${URL}${endpoints.trending}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.results);

  const topRated = await axios.get(`${URL}${endpoints.topRated}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.results);

  const upcoming = await axios.get(`${URL}${endpoints.upcoming}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.results);

  const genresMovies = await axios.get(`${URL}${endpoints.genresMovies}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.genres);

  const genresTv = await axios.get(`${URL}${endpoints.genresTv}`, {
    params: {
      api_key: API_KEY,
    },
  }).then((res) => res.data.genres);

  return {
    props: {
      originals,
      popular,
      nowPlaying,
      trending,
      topRated,
      upcoming,
      genresMovies,
      genresTv,
    },
  };
};
