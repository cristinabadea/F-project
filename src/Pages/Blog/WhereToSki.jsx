import React from "react";
import "./WhereToSki.css";
import { Accordion } from "react-bootstrap";
import { useState } from "react";

const WhereToSki = () => {
  const [textColor, setTextColor] = useState("rgba(0, 0, 0, 0.55)");

  const handleClick1 = (e) => {
    setTextColor("rgb(92, 201, 235)");
  };
  const handleClick2 = (e) => {
    setTextColor("rgb(92, 201, 235)");
  };
  const handleClick3 = (e) => {
    setTextColor("rgb(92, 201, 235)");
  };
  const handleClick4 = (e) => {
    setTextColor("rgb(92, 201, 235)");
  };
  const handleClick5 = (e) => {
    setTextColor("rgb(92, 201, 235)");
  };
  return (
    <div>
      <div className="blog-page-title">
        <h1>5 Top-Rated Ski Resorts in the World now</h1>
        <h4>
          Find the best slopes for you with our list of the top ski resorts in
          the world.
        </h4>
      </div>
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={handleClick1}>
              <p style={{ color: textColor }}>1. Whistler Blackcomb</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="image-text-description">
                <img src="data:image/jpeg;base64,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"></img>
                <p>
                  Now part of Vail Resorts group, Whistler Blackcomb combines
                  the superb terrain of two mountains to make it Canada's
                  premier ski resort and the largest winter sports area in North
                  America. The combined skiable terrain offers more than 200
                  runs accessed by 37 lifts. One of these, the
                  three-kilometer-plus PEAK 2 PEAK gondola joins the two
                  mountaintops and is the world's longest unsupported lift span.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={handleClick2}>
              <p style={{ color: textColor }}>2.Courchevel</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="image-text-description">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVCD8IZYAMV8gdVB17BR0Cvdb3GSLegmgtw&usqp=CAU"></img>
                <p>
                  Despite its decidedly upscale villages and reputation,
                  Courchevel is for serious skiers looking for snow thrills of a
                  lifetime. Part of Les 3 Vallées region, the world's largest
                  Alpine ski domain, with 600 kilometers of interconnected ski
                  runs across 10 summits higher that 2,500 meters, Courchevel
                  offers 150 kilometers of alpine ski terrain accessed by 60
                  lifts.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={handleClick3}>
              <p style={{ color: textColor }}>3. Zermatt</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="image-text-description">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlRC-v4hv24FpVtmUGDdm7OWXGtDx_iqeqQ&usqp=CAU"></img>
                <p>
                  Even if it didn't have one of the world's most beautiful
                  mountains as a backdrop, Switzerland's ski resort of Zermatt
                  would be a place skiers dream about. It's the highest winter
                  sports area in the Alps, and it has the greatest vertical drop
                  in Switzerland, plus the magnificent peak of the Matterhorn
                  can be seen from almost everywhere on its 350 kilometers of
                  trails and slopes.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header onClick={handleClick4}>
              <p style={{ color: textColor }}>5. Vail Mountain Resort</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="image-text-description">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0DS2ui1XT64uiukOx2CktYmWVNpJW91xDw&usqp=CAU"></img>
                <p>
                  The biggest of Colorado's ski resorts, and one of the largest
                  in the world, Vail offers enough terrain to keep an avid skier
                  in any skill level busy. Long, well-groomed runs overlook the
                  luxury hotels and upscale restaurants and shops in the equally
                  well-manicured town of Vail.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header onClick={handleClick5}>
              <p style={{ color: textColor }}>5. Aspen Snowmass</p>
            </Accordion.Header>
            <Accordion.Body>
              <div className="image-text-description">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnayn_KGAqa_iq_kcu-fgJ6TKarhJFdbCYbw&usqp=CAU"></img>
                <p>
                  Top among the several ski resorts in Colorado, Aspen Snowmass
                  is made up of four ski areas surrounding Aspen and Snowmass
                  Village. The combined terrain of Snowmass, Aspen Mountain,
                  Aspen Highlands, and Buttermilk exceeds 5,500 acres, with
                  Snowmass alone accounting for more than 3,000. Although the
                  smallest of the four, Buttermilk is known for hosting the
                  Winter X-Games since 2002. The 2021 games are scheduled for
                  January 28–31.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default WhereToSki;

