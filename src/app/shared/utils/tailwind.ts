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

type TailwindLeadingSize =
  | ''
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose';

const getTextSizeClass = (size: TailwindSize): string => {
  if (!size) return '';

  return `text-${size}`;
};

const getLeadingSizeClass = (size: TailwindLeadingSize): string => {
  if (!size) return '';

  return `leading-${size}`;
};

export {
  TailwindSize,
  TailwindLeadingSize,
  getTextSizeClass,
  getLeadingSizeClass,
};
