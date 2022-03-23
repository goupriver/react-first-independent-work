import colorPallete from './colorPallete'

function getHashColor(colorId) {
  let color = colorPallete.find((item) => colorId === item.id);

  return color.hash;
}

export default getHashColor;
