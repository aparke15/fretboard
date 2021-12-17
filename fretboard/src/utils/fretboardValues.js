export const fbSize = {
  width: 720,
  height: 96,
};

const createStringPositions = () => {
  return Array(6)
    .fill(0)
    .map((s, i) => ((5.5 - i) * fbSize.height) / 6);
};

const createFretPositions = () => {
  const frets = 24;
  const dMax = 0.95;

  const scaleLen = dMax / (1 - Math.pow(2, -(frets + 1) / 12));

  const perc = Array(frets + 1)
    .fill(0)
    .map((d, n) => {
      console.log(d);
      return scaleLen * (1 - Math.pow(2, -(n + 1) / 12));
    });

  return perc.map((f) => {
    console.log(f);
    return f * fbSize.width;
  });
};

const stringPositions = createStringPositions();
const fretPositions = createFretPositions();

export { stringPositions, fretPositions };
