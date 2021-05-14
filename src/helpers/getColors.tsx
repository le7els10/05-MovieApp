import ImageColors from 'react-native-image-colors';

const getColors = async (path: String) => {
  let uri = `https://image.tmdb.org/t/p/w500${path}`;

  let colors = await ImageColors.getColors(uri, {});
  let primary, secondary;

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  } else {
    primary = colors.primary;
    secondary = colors.secondary;
  }

  return [primary, secondary];
};

export default getColors;
