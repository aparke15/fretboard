import React from "react";
import { fbProps } from "./Fretboard";

export const MuteBtns = ({ currFrets, updateCurrFrets }: fbProps) => {
  return (
    <div className="mute-btns">
      {currFrets.map((frets, string) => {
        currFrets[string].map((fret, i) => {
          const isChecked = fret < 0 || Object.is(fret, -0);

          return (
            <div key={i} className="mute-btn">
              <input
                id={`mute-${i}`}
                type="checkbox"
                checked={isChecked}
                onChange={() => updateCurrFrets(i)}
              />
              <label htmlFor={`mute-${i}`}></label>
            </div>
          );
        });
      })}
    </div>
  );
};
