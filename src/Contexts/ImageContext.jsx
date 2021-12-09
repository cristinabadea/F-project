/** @format */

import React, { useState } from "react";

import MalePisteB1 from "../Images/MalePisteB1.png";
import MalePisteB2 from "../Images/MalePisteB2.png";
import MalePisteI1 from "../Images/MalePisteI1.png";
import MalePisteI2 from "../Images/MalePisteI2.png";
import MalePisteA1 from "../Images/MalePisteA1.png";
import MalePisteA2 from "../Images/MalePisteA2.png";
import FemPisteB1 from "../Images/FemPisteB1.jpg";
import FemPisteB2 from "../Images/FemPisteB2.jpg";
import FemPisteInt1 from "../Images/FemPisteInt1.jpg";
import FemPisteInt2 from "../Images/FemPisteInt2.jpg";
import FemPisteA1 from "../Images/FemPisteA1.jpg";
import FemPisteA2 from "../Images/FemPisteA2.jpg";
import MixedOffB1 from "../Images/MixedOffB1.jpg";
import MixedOffB2 from "../Images/MixedOffB2.jpg";
import MixedOffInt1 from "../Images/MixedOffInt1.jpg";
import MixedOffInt2 from "../Images/MixedOffInt2.jpg";
import MixedOffA1 from "../Images/MixedOffA1.jpg";
import MixedOffA2 from "../Images/MixedOffA2.jpg";

const ImageContext = React.createContext();

const ImageContextProvider = (props) => {
  const [items, setItems] = useState({
    products: [
      { title: "Atomic MBP1", imageUrl: MalePisteB1, id: 1, price: 3229 },
      { title: "Atomic MBP2", imageUrl: MalePisteB2, id: 2, price: 3229 },
      { title: "Atomic MIP1", imageUrl: MalePisteI1, id: 3, price: 3229 },
      { title: "Atomic MIP2", imageUrl: MalePisteI2, id: 4, price: 3229 },
      { title: "Atomic MAP1", imageUrl: MalePisteA1, id: 5, price: 3229 },
      { title: "Atomic MAP2", imageUrl: MalePisteA2, id: 6, price: 3229 },
      { title: "Atomic FBP1", imageUrl: FemPisteB1, id: 7, price: 3229 },
      { title: "Atomic FBP2", imageUrl: FemPisteB2, id: 8, price: 3229 },
      { title: "Atomic FIP1", imageUrl: FemPisteInt1, id: 9, price: 3229 },
      { title: "Atomic FIP2", imageUrl: FemPisteInt2, id: 10, price: 3229 },
      { title: "Atomic FAP1", imageUrl: FemPisteA1, id: 11, price: 3229 },
      { title: "Atomic FAP2", imageUrl: FemPisteA2, id: 12, price: 3229 },
      { title: "Atomic MBoP", imageUrl: MixedOffB1, id: 13, price: 3229 },
      { title: "Atomic FBoP", imageUrl: MixedOffB2, id: 14, price: 3229 },
      { title: "Atomic MIoP", imageUrl: MixedOffInt1, id: 15, price: 3229 },
      { title: "Atomic FIoP", imageUrl: MixedOffInt2, id: 16, price: 3229 },
      { title: "Atomic MAoP", imageUrl: MixedOffA1, id: 17, price: 3229 },
      { title: "Atomic FAoP", imageUrl: MixedOffA2, id: 18, price: 3229 },
    ],
  });

  return (
    <ImageContext.Provider value={{ ...items }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
