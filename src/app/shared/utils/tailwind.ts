type TailwindSize =
  | ''
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

const getTextSizeClass = (size: TailwindSize): string => {
  if (!size) return '';

  return `text-${size}`;
};

export { TailwindSize, getTextSizeClass };
