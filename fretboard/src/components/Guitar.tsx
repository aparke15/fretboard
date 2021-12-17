import React, { useState } from "react";
import { Fretboard } from "./Fretboard";

export const Guitar = () => {
  const [currFrets, setCurrFrets] = useState([[0], [0], [0], [0], [0], [0]]);

  const updateCurrFrets = (string: number, fret: number) => {
    let newFrets = [...currFrets];
    // console.log(newFrets);
    // for (let i = 0; i < newFrets[string].length; i++) {
    // newFrets[string][i] =
    // fret !== undefined ? fret : newFrets[string][i] * -1;
    if (!newFrets[string].includes(fret)) {
      newFrets[string].push(fret);
      console.log("newFrets ", newFrets);
    } else {
      newFrets[string].splice(newFrets[string].indexOf(fret), 1);
    }
    // }
    setCurrFrets([...newFrets]);
  };

  return (
    <div className="guitar">
      <Fretboard currFrets={currFrets} updateCurrFrets={updateCurrFrets} />
    </div>
  );
};
