import { guitar } from "./audiosynth.js";

const getNote = (string, fret) => {
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const open = [4, 9, 14, 19, 23, 28];
  const index = open[string] + fret;
  const note = notes[index % 12];
  const octave = Math.floor(index / 12) + 2;
  return [note, octave];
};

export const playNote = (string, fret) => {
  const [note, octave] = getNote(string, fret);
  const duration = 1.5;
  guitar.play(note, octave, duration);
};

export const isMuted = (fret) => {
  return fret < 0 || Object.is(fret, -0);
};

export const playGuitarBody = (currStrings, currFrets) => {
  currFrets.forEach(
    (f, s) => currStrings.includes(s) && !isMuted(f) && playNote(s, f)
  );
};

// function playGuitarBody() {
//   guitar.play("E", 4, 1.5);
// }

// export { playGuitarBody };
