export const eyeColorMap = (colorName) => {
  switch (colorName) {
    case 'blue':
      return 'azuis';

    case 'green':
      return 'verdes';

    case 'brown':
      return 'castanhos';

    default:
      return colorName;
  }
};
