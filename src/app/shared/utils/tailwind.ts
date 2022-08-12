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
  | '9xl'
  | string;

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
  | 'loose'
  | string;

const getTextSizeClass = (size: TailwindSize): string => {
  if (!size) return '';

  switch (size) {
    case 'xs':
      return 'text-xs';
    case 'sm':
      return 'text-sm';
    case 'lg':
      return 'text-lg';
    case 'xl':
      return 'text-xl';
    case '2xl':
      return 'text-2xl';
    case '3xl':
      return 'text-3xl';
    case '4xl':
      return 'text-4xl';
    case '5xl':
      return 'text-5xl';
    case '6xl':
      return 'text-6xl';
    case '7xl':
      return 'text-7xl';
    case '8xl':
      return 'text-8xl';
    case '9xl':
      return 'text-9xl';
    default:
      return size;
  }
};

const getLeadingSizeClass = (size: TailwindLeadingSize): string => {
  if (!size) return '';

  switch (size) {
    case '3':
      return 'leading-3';
    case '4':
      return 'leading-4';
    case '5':
      return 'leading-5';
    case '6':
      return 'leading-6';
    case '7':
      return 'leading-7';
    case '8':
      return 'leading-8';
    case '9':
      return 'leading-9';
    case '10':
      return 'leading-10';
    case 'none':
      return 'leading-none';
    case 'tight':
      return 'leading-tight';
    case 'snug':
      return 'leading-snug';
    case 'normal':
      return 'leading-normal';
    case 'relaxed':
      return 'leading-relaxed';
    case 'loose':
      return 'leading-loose';
    default:
      return size;
  }
};

export {
  TailwindSize,
  TailwindLeadingSize,
  getTextSizeClass,
  getLeadingSizeClass,
};
