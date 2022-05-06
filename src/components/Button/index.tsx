export type ButtonProps = {
  href: string
  text: string
  color: string
  size: string
};

interface Styles {
  bg: { [key: string]: string }
  size: { [key: string]: string }
  common: string,
}

const style: Styles = {
  bg: {
    zinc: 'bg-zinc-700 hover:bg-zinc-500 text-white',
    neutral: 'bg-neutral-100 hover:bg-neutral-400 text-black',
  },
  size: {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-xl',
  },
  common: 'hover:scale-110 m-2 py-2 px-4 rounded-md font-medium',
};

const Button = ({
  href, text, color, size,
}: ButtonProps) => (
  <a href={href}>
    <button
      type="button"
      className={`${style.bg[color]} ${style.size[size]} ${style.common}`}
    >
      {text}
    </button>
  </a>
);

export default Button;
