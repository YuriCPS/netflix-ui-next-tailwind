import Image from 'next/image';
import tmdbLogo from '../../../public/assets/tmdb.svg';

const Footer = () => (
  <footer className="p-2 mx-auto my-8 text-center">
    <h4 className="m-2 text-sm hover:font-bold">Netflix UI made with NextJS + Tailwind by YuriCPS</h4>
    <h4 className="m-2 text-sm hover:font-bold">This project uses The Movie Database(TMDb) API</h4>
    <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
      <Image
        className="mx-auto"
        src={tmdbLogo}
        alt="The Movie Database"
        width={250}
      />
    </a>
  </footer>
);

export default Footer;
