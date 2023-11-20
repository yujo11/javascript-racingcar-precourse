export const generateRandomInt = (length = 1) => {
  const min = 10 ** (length - 1);
  const max = 10 ** length;

  return Math.floor(Math.random() * (max - min)) + min;
};

export const range = (length, { start = 0, step = 1 } = {}) =>
  Array.from({ length }, (_, i) => start + i * step);
