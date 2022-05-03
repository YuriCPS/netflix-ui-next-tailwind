import Image from 'next/image';
import rating10 from '../../../public/assets/10.png';
import down from '../../../public/assets/down.svg';
import play from '../../../public/assets/play.svg';
import plus from '../../../public/assets/plus.svg';
import thumbUp from '../../../public/assets/thumb-up.svg';

export type MovieCardProps = {
  image: string
  genresList: any[]
  genres: any[]
  relevance: string
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

const MovieCard = ({
  image, genresList, genres, relevance,
}: MovieCardProps) => {
  const getGenres = () => {
    const genresNames = genres.map((genre) => {
      const genreName = genresList.find((g) => g.id === genre);
      return genreName?.name;
    });
    return genresNames.join(' ● ');
  };

  const getRelevance = () => {
    const value = Number(relevance) * 10;
    return `${value}% Match`;
  };

  return (
    <div className="z-10 m-1 duration-200 delay-200 rounded-md h-72 group w-80 hover:scale-150 hover:delay-500 hover:bg-background hover:z-40">
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt="Movie"
        width={294}
        height={162}
        layout="responsive"
        className="rounded-md hover:delay-500"
      />
      <div className="flex invisible delay-500 group-hover:visible bg-background">
        <div className="relative grid w-8 h-8 my-4 ml-3 mr-2 bg-white rounded-full place-items-center hover:bg-gray-300">
          <Image src={play} alt="Play" />
        </div>
        <div className="relative grid w-8 h-8 my-4 border-[1px] rounded-full place-items-center border-neutral-400 bg-neutral-800 hover:border-white">
          <Image src={plus} alt="Add" />
        </div>
        <div className="relative grid w-8 h-8 mx-2 my-4 border-[1px] rounded-full place-items-center border-neutral-400 bg-neutral-800 hover:border-white">
          <Image src={thumbUp} alt="Thumbs Up" />
        </div>
        <div className="relative grid w-8 h-8 my-4 mr-4 border-[1px] rounded-full ml-28 place-items-center border-neutral-400 bg-neutral-800 hover:border-white">
          <Image src={down} alt="More" />
        </div>
      </div>
      <div className="flex items-center invisible delay-500 group-hover:visible">
        <p className="mx-3 text-sm font-medium text-green-400 ">{getRelevance()}</p>
        <Image src={rating10} alt="Rating" width={20} height={20} />
        <p className="mx-3 text-sm">Minisérie</p>
      </div>
      <div className="flex items-center invisible mt-2 mb-4 delay-500 group-hover:visible">
        <p className="mx-3 text-xs text-justify">{getGenres()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
