export const generateRandomRgb = () => {
  const R = Math.random() * (214 - 0) + 0;
  const G = Math.random() * (234 - 0) + 0;
  const B = Math.random() * (255 - 110) + 110;

  return `rgb(${R},${G}, ${B})`;
};
