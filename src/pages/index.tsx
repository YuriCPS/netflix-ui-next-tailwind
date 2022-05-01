import axios from 'axios';
import Head from 'next/head';
import Footer from 'components/Footer';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '20147a1534ba357ca36b05b79d848ac3';

const endpoints = {
  originals: '/discover/tv',
  popular: '/movie/popular',
  nowPlaying: '/movie/now_playing',
  trending: '/trending/all/week',
  topRated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Netflix UI by YuriCPS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center">Netflix UI</h1>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
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

  return {
    props: {
      originals,
      popular,
      nowPlaying,
      trending,
      topRated,
      upcoming,
    },
  };
};