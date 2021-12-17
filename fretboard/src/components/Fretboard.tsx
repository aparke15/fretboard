import React from "react";
import { FretboardBg } from "./FretboardBg";
import { MuteBtns } from "./MuteBtns";
import { FretMarkers } from "./FretMarkers";

export type fbProps = {
  currFrets: number[][];
  updateCurrFrets: Function;
};

export const Fretboard = ({ currFrets, updateCurrFrets }: fbProps) => {
  return (
    <div className="fretboard-container">
      <MuteBtns currFrets={currFrets} updateCurrFrets={updateCurrFrets} />
      <FretboardBg />
      <FretMarkers currFrets={currFrets} updateCurrFrets={updateCurrFrets} />
    </div>
  );
};
