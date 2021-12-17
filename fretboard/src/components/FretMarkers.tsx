import React, { MouseEvent, useState } from "react";
import {
  fbSize,
  fretPositions,
  stringPositions,
} from "../utils/fretboardValues.js";
import { playNote, isMuted } from "../utils/sounds.js";
import { fbProps } from "./Fretboard.js";

export const FretMarkers = ({ currFrets, updateCurrFrets }: fbProps) => {
  const [string, setString] = useState(-1);
  const [fret, setFret] = useState(0);

  const fretMarker = (
    <circle
      cx={`${fretPositions[fret] - 6}`}
      cy={`${stringPositions[string]}`}
      r="6"
      fill="rgba(255,255,255,0.7)"
      stroke="#fff"
    />
  );

  const fretMarkers = currFrets.forEach((String, j) => {
    currFrets[j].map((f, i) => {
      if (!isMuted(currFrets[j][f])) {
        return (
          <circle
            key={i * j}
            cx={`${fretPositions[currFrets[j][i]] - 6}`}
            cy={`${stringPositions[j]}`}
            r="6"
            fill="rgba(255,255,255,0.5)"
            stroke="#fff"
          />
        );
      }
    });
    return true;
  });

  const hideMarker = () => {
    setString(-1);
  };

  const showMarker = (e: MouseEvent): void => {
    // e.preventDefault();
    let s = Math.floor(
      (6 / fbSize.height) * (fbSize.height - 1 - e.nativeEvent.offsetY)
    );
    let f = fretPositions.findIndex((pos) => e.nativeEvent.offsetX < pos);
    f = f === -1 ? 0 : f;
    // console.log("s: ", s);
    // console.log("f: ", f);
    setString(s);
    setFret(f);
  };

  return (
    <div className="fret-markers">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
        width={`${fbSize.width}`}
        height={`${fbSize.height}`}
        onMouseMove={showMarker}
        onMouseLeave={hideMarker}
        onClick={() => {
          playNote(string, fret);
          updateCurrFrets(string, fret);
          console.log("currFrets ", currFrets);
          console.log("string ", string);
          console.log("fret ", fret);
        }}
      >
        {string > -1 && fretMarker}
        {fretMarkers}
      </svg>
    </div>
  );
};
