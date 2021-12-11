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
      {
        title: "REDSTER X5 GREEN + M 10 GW",
        imageUrl: MalePisteB1,
        id: 1,
        price: 2668,
        details: `The entry to X, Atomic Redster X5 Green is an all-round performance piste ski that’s easy to handle at any speed.
        The Atomic M 10 GW – simple to use, offers a consistent feel on the piste or off it, and will let anyone ski with confidence. 
        It’s strong and robust, but easy to click into with GripWalk boots. 
        A great do-it-all binding that can let any kind of skier enjoy their day all over on the mountain.`,
      },
      {
        title: "REDSTER X5 GREY + M 10 GW",
        imageUrl: MalePisteB2,
        id: 2,
        price: 2668,
        details: `The entry to X, Atomic Redster X5 is an all-round performance piste ski that’s easy to handle at any speed. 
        The Atomic M 10 GW – simple to use, offers a consistent feel on the piste or off it, and will let anyone ski with confidence. 
        It’s strong and robust, but easy to click into with GripWalk boots. 
        A great do-it-all binding that can let any kind of skier enjoy their day all over on the mountain.`,
      },
      {
        title: "REDSTER G9 FIS REVOSHOCK M",
        imageUrl: MalePisteI1,
        id: 3,
        price: 4640,
        details: `The Atomic Redster G9 FIS Revoshock M is Atomic’s top FIS compliant Men’s GS race ski. 
          Built with Revoshock for stability, powerful accelerations, and speed.`,
      },
      {
        title: "VANTAGE 79 C + M 10 GW",
        imageUrl: MalePisteI2,
        id: 4,
        price: 2610,
        details: `Power and control for on-piste precision with the agility of an all-mountain ski for exploring new terrain, 
        Atomic Vantage 79 C does it all. 
        The Atomic M 10 GW – simple to use, offers a consistent feel on the piste or off it, and will let anyone ski with confidence. 
        It’s strong and robust, but easy to click into with GripWalk boots. A great do-it-all binding that can let any kind of skier enjoy their day 
        all over on the mountain.`,
      },
      {
        title: "REDSTER S7 + F 12 GW",
        imageUrl: MalePisteA1,
        id: 5,
        price: 3364,
        details: `The Atomic Redster S7 is a slalom ski for nailing fast, precise turns on piste. 
          The Atomic F 12 GW is a super flexible and lightweight all-mountain system binding. 
          It comes with a smart pedal construction that automatically adapts to alpine or GripWalk boots. 
          Plus it comes with easy DIN readability (with DIN range up to 12) and toolless adjustment to get everything sorted fast. 
          It performs perfectly on the slopes, with the flexibility needed for all abilities to have fun.`,
      },
      {
        title: "REDSTER S9 + X 12 GW",
        imageUrl: MalePisteA2,
        id: 6,
        price: 4350,
        details: `For slalom racers or shorter turns on piste, Atomic Redster S9 is an ideal ski – it also features Servotec for extra agility in those short, tight turns. 
        The Atomic X 12 GW ski binding is the ideal option if you’re looking for real race performance that’s compatible with both alpine-normed and GripWalk boots. 
        It comes with Full Flex, which keeps the natural bending line of the ski under the binding while also ensuring constant release values throughout your turn. 
        Top power transfer, total control and fantastic speed – all without the hassle of tools!`,
      },
      {
        title: "CLOUD 9 + M 10 GW",
        imageUrl: FemPisteB1,
        id: 7,
        price: 2320,
        details: `Our best-selling Cloud 9 ski balances Atomic performance with a touch of forgiveness. The Atomic M 10 GW – simple to use, offers a consistent feel on the piste or off it, and will let anyone ski with confidence. It’s strong and robust, but easy to click into with GripWalk boots. A great do-it-all binding that can let any kind of skier enjoy their day all over on the mountain.`,
      },
      {
        title: "CLOUD 11 + M 10 GW",
        imageUrl: FemPisteB2,
        id: 8,
        price: 2900,
        details: `The Atomic Cloud 11 is a ski for fast, confident piste skiing, featuring Servotec Light. The Atomic M 10 GW – simple to use, offers a consistent feel on the piste or off it, and will let anyone ski with confidence. It’s strong and robust, but easy to click into with GripWalk boots. A great do-it-all binding that can let any kind of skier enjoy their day all over on the mountain.`,
      },
      {
        title: `CLOUD C14 WB REVOSHOCK S` + `X 12 GW`,
        imageUrl: FemPisteInt1,
        id: 9,
        price: 4640,
        details: `The Atomic Cloud C14 WB Revoshock S is the premier ski in Atomic’s Cloud range. For the expert skier looking for versatility on the piste. The Atomic X 12 GW ski binding is the ideal option if you’re looking for real race performance that’s compatible with both alpine-normed and GripWalk boots. It comes with Full Flex, which keeps the natural bending line of the ski under the binding while also ensuring constant release values throughout your turn. Top power transfer, total control and fantastic speed – all without the hassle of tools!`,
      },
      {
        title: "REDSTER G9 REVOSHOCK S + X 14 GW",
        imageUrl: FemPisteInt2,
        id: 10,
        price: 5452,
        details: `The Atomic Redster G9 Revoshock S features Revoshock tech for stability at speed and big accelerations in the turns. If you want to ski fast, this is your ski. The Atomic X 14 GW ski binding is the ideal option if you’re looking for real race performance that’s compatible with both alpine-normed and GripWalk boots. The DIN value from 6 to 14 delivers top power transfer, total control and fantastic speed. Plus, the Full Flex keeps the natural bend line of the ski under the binding, while also ensuring constant release values throughout your turn. And all without the hassle of tools.`,
      },
      {
        title: "REDSTER X9 WB REVOSHOCK S + X 12 GW",
        imageUrl: FemPisteA1,
        id: 11,
        price: 4930,
        details: `The Atomic Redster X9 WB Revoshock S combines the best of short and long radius turns in a wider, versatile platform for variable piste conditions. The Atomic X 12 GW ski binding is the ideal option if you’re looking for real race performance that’s compatible with both alpine-normed and GripWalk boots. It comes with Full Flex, which keeps the natural bending line of the ski under the binding while also ensuring constant release values throughout your turn. Top power transfer, total control and fantastic speed – all without the hassle of tools!`,
      },
      {
        title: "REDSTER X9S REVOSHOCK S + X 12 GW",
        imageUrl: FemPisteA2,
        id: 12,
        price: 5220,
        details: `The Atomic Redster X9S Revoshock S is for skiers who want speed, versatility, and max performance—infused with World Cup heritage and a hefty dose of fun.`,
      },
      {
        title: "PUNX FIVE",
        imageUrl: MixedOffB1,
        id: 13,
        price: 1508,
        details: `The Atomic Punx Five is an easy skiing, bomb-proof freestyle ski for sliding rails and stomping landings with confidence. 
          No bindings included`,
      },
      {
        title: "PUNX SEVEN",
        imageUrl: MixedOffB2,
        id: 14,
        price: 2610,
        details: `The competition X-Games ski, Atomic Punx Seven is leading the charge in park and pipe. 
          No bindings included.`,
      },
      {
        title: "BENT CHETLER 120",
        imageUrl: MixedOffInt1,
        id: 15,
        price: 3480,
        details: `One of the most award-winning skis to ever grace the mountain, the Atomic Bent Chetler 120 is a pillow-bashing, powder slashing ski legend. 
          No bindings included.`,
      },
      {
        title: "BENT CHETLER 100",
        imageUrl: MixedOffInt2,
        id: 16,
        price: 2610,
        details: `Atomic Bent Chetler 100 is a go-everywhere, do-everything all-mountain ski. 
          From powder to piste this is the ski of choice for any day. Every day. 
          No bindings included.`,
      },
      {
        title: "BACKLAND 107",
        imageUrl: MixedOffA1,
        id: 17,
        price: 3480,
        details: `Light and mighty, Atomic Backland 107 is a wide freeride touring ski featuring HRZN Tech in the tip for maximum flotation in deep snow. 
          No bindings included.`,
      },
      {
        title: "backland 100",
        imageUrl: MixedOffA2,
        id: 18,
        price: 4640,
        details: `Lightweight and ready for anything, Atomic Backland 100 is a new freeride touring ski that climbs as fast as it skis. 
          No bindings included.`,
      },
    ],
  });

  return (
    <ImageContext.Provider value={{ ...items }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
