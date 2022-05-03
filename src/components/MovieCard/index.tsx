import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import down from '../../../public/assets/down.svg';
import play from '../../../public/assets/play.svg';
import plus from '../../../public/assets/plus.svg';
import thumbUp from '../../../public/assets/thumb-up.svg';

export type MovieCardProps = {
  image: string
  genresList: any[]
  genres: any[]
  relevance: string
  id: string
  type: string
};

interface Styles {
  mainContainer: { [key: string]: string }
  buttons: { [key: string]: string }
  infos: { [key: string]: string }
  genres: { [key: string]: string }
}

const style: Styles = {
  mainContainer: {
    base: 'z-10 m-1 duration-200 delay-200 rounded-md h-72 group',
    hover: 'hover:scale-150 hover:delay-500 hover:bg-background hover:z-40',
  },
  buttons: {
    container: 'flex invisible delay-500 group-hover:visible',
    play: 'ml-3 mr-2 bg-white hover:bg-gray-300',
    plus: 'border-[1px] border-neutral-400 bg-neutral-800 hover:border-white',
    thumbUp: 'mx-2 border-[1px] border-neutral-400 bg-neutral-800 hover:border-white',
    down: 'mr-4 border-[1px] ml-28 border-neutral-400 bg-neutral-800 hover:border-white',
    common: 'relative grid w-8 h-8 my-4 rounded-full place-items-center',
  },
  infos: {
    container: 'flex invisible delay-500 group-hover:visible',
    match: 'text-green-400',
    common: 'mx-3 text-sm font-medium',
  },
  genres: {
    container: 'flex invisible my-4 delay-500 group-hover:visible',
    common: 'mx-3 text-xs',
  },
};

const MovieCard = ({
  image, genresList, genres, relevance, id, type,
}: MovieCardProps) => {
  const [rating, setRating] = useState('16');

  const getGenres = () => {
    const genresNames = genres.map((genre) => {
      const genreName = genresList.find((g) => g.id === genre);
      return genreName?.name;
    });
    return genresNames.join(' ● ');
  };

  const getMatch = () => {
    const value = Number(relevance) * 10;
    return `${value}% Match`;
  };

  useEffect(() => {
    const URL = 'https://api.themoviedb.org/3';
    const API_KEY = '20147a1534ba357ca36b05b79d848ac3';

    const getCertificate = async () => {
      const certificate = await axios.get(`${URL}/movie/${id}/release_dates`, {
        params: {
          api_key: API_KEY,
        },
      }).then((res) => res.data.results);

      const rate = certificate.find((c :any) => c.iso_3166_1 === 'BR');
      let ratingValue = rate?.release_dates[0].certification;
      if (!ratingValue) {
        ratingValue = 14 + (Math.floor(Math.random() * 3) * 2);
      }
      setRating(ratingValue);
    };
    getCertificate();
  }, [id]);

  return (
    <div className={`${style.mainContainer.base} ${style.mainContainer.hover}`}>
      <Image
        className="rounded-md"
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt="Movie"
        width={294}
        height={162}
        layout="responsive"
      />
      <div className={`${style.buttons.container}`}>
        <div className={`${style.buttons.play} ${style.buttons.common}`}>
          <Image src={play} alt="Play" />
        </div>
        <div className={`${style.buttons.plus} ${style.buttons.common}`}>
          <Image src={plus} alt="Add" />
        </div>
        <div className={`${style.buttons.thumbUp} ${style.buttons.common}`}>
          <Image src={thumbUp} alt="Thumbs Up" />
        </div>
        <div className={`${style.buttons.down} ${style.buttons.common}`}>
          <Image src={down} alt="More" />
        </div>
      </div>
      <div className={`${style.infos.container}`}>
        <p className={`${style.infos.match} ${style.infos.common}`}>
          {getMatch()}
        </p>
        <Image src={`/assets/${rating}.png`} alt="Rating" width={20} height={20} unoptimized />
        <p className={`${style.infos.common}`}>
          {type}
        </p>
      </div>
      <div className={`${style.genres.container}`}>
        <p className={`${style.genres.common}`}>
          {getGenres()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
