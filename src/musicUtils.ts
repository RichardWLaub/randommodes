const SHARP_NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_NOTES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const MAJOR_SCALE_STEPS = [2, 2, 1, 2, 2, 2, 1];
const MODES = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];

function getRandomKey(): string {
  const keys = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb", "B", "E", "A", "D", "G"];
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

function getMajorScale(startNote: string): string[] {
  // Determine whether to use flat notes for specific keys
  const useFlatNotes = ["F", "Bb", "Eb", "Ab", "Db", "Gb"].includes(startNote);
  const notes = useFlatNotes ? FLAT_NOTES : SHARP_NOTES;
  let startIndex = notes.indexOf(startNote);

  if (startIndex === -1) {
    throw new Error("Invalid starting note");
  }

  const scale: string[] = [notes[startIndex]];
  for (const step of MAJOR_SCALE_STEPS) {
    startIndex = (startIndex + step) % notes.length;
    scale.push(notes[startIndex]);
  }

  // Special case for Gb major scale to replace B with Cb
  if (startNote === "Gb") {
    return scale.map((note) => (note === "B" ? "Cb" : note));
  }

  return scale;
}

export function getRandomMode(): { modeName: string, scale: string[] } {
  const majorScale = getRandomMajorScale();
  const randomModeIndex = Math.floor(Math.random() * 7);
  const modeName = MODES[randomModeIndex];
  
  const modeScale = [
    ...majorScale.slice(randomModeIndex, majorScale.length - 1),
    ...majorScale.slice(0, randomModeIndex),
  ];

  return {
    modeName,
    scale: modeScale,
  };
}

function getRandomMajorScale(): string[] {
  const randomKey = getRandomKey();
  return getMajorScale(randomKey);
}
