/** @format */

import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RecomItem.css";
import { ImageContext } from "../../Contexts/ImageContext";

const RecomItem = (props) => {
  const imageContext = useContext(ImageContext);
  var product = props.itemImage;
  return (
    <div>
      <div className="recom-row">
        <div className="recom-col recom-col-background">
          <h1> Recommended for you:</h1>

          <ul id="recom-list">
            <li>{props.recom1}</li>
            <li>{props.recom2}</li>
            <li>{props.recom3}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="recom-col recom-col-background">
          <h1> Tips:</h1>{" "}
          <h4>
            <em>Good skiers</em> master some of these. <em>Great skiers</em>{" "}
            master all five.{" "}
          </h4>
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                <strong>1. Direct pressure to the outside ski</strong>
              </Accordion.Header>
              <Accordion.Body>
                "The fundamental key to skiing well is to get balanced over the
                downhill or outside ski. This is as simple as saying that
                turning left is a right-footed turn and turning right is a
                left-footed turn. While good skiing does involve help from the
                inside ski, which should stay engaged with the snow while it
                also tips and turns, the real money is on the outside ski.
                <strong>
                  <em> Drill: </em>
                </strong>
                Learn to balance on that outside leg and ski by making some
                turns with the inside ski just barely off the ground, or
                touching just slightly, while all of your weight is on the
                outside ski. Make sure the inside ski stays level to the snow;
                don’t let the tip get higher than the tail.
                <br />
                When you can properly balance on only the outside ski through a
                series of turns, then you will be better balanced to ski on both
                skis."
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <strong>
                  2. Control Edge Angles with Inclination and Angulation
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                "Skiing on black pistes is definitely about getting on edge, but
                how we put the skis on edge can make a huge difference. Tipping
                the skis on edge involves inclining the body towards the inside
                of the turn in the direction you are turning, and also involves
                angulating the upper body back towards the skis, towards the
                outside of the turn.
                <br />
                Most skiers get the tipping into the turn part of edging their
                skis; they usually do this too much. It’s the angulation of the
                upper body back towards the outside ski that gets overlooked.
                <strong>
                  <em> Drill: </em>
                </strong>
                The best way to reinforce good angles is to take a run with your
                poles dragging in the snow. Keep them just a bit wider than your
                feet and in line with the front of your boots, and almost
                totally vertical. In order to keep both poles in the snow while
                turning, you will need to move the inside hip and shoulder
                up,and keep the outside hip and shoulder down.
                <br />
                This will level out your upper body, to prevent tipping into the
                turn, and will help your edges work the best they can."
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {" "}
                <strong>
                  3. Keep the Center of Mass over the Base of Support
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                "One of the toughest fundamentals to master is also the
                simplest. Good skiers must control their center of mass, so that
                it can stay over the base of support. In general, stay balanced
                so you can use the front of the skis and the back of the skis
                when needed. Many skiers are perpetually stuck in the
                “backseat.” Only when you have access to the entire length of
                the skis can you properly shape your turns.
                <strong>
                  <em> Drill: </em>
                </strong>
                Dial in this type of balance by hopping or bouncing on your
                skis.
                <br />
                If you can find balance over your feet, it will show by the
                ability to either bounce, or slightly hop and leave the snow at
                any point in your turn. When you do leave the snow, make sure
                the skis stay nice and level with the snow surface, to ensure
                solid balance over the middle of the skis. Challenge yourself by
                having a friend follow you and call out when they want you to
                hop or bounce. You should be able to execute the move at any
                point in the turn."
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <strong>4. Control the Skis’ Rotation with leg rotation</strong>
              </Accordion.Header>
              <Accordion.Body>
                "Everyone loves to watch good bump skiers; it’s amazing to see
                how well their legs can move and turn independently of their
                upper body. It’s also fundamental to good skiing that the skis
                are turned with the rotation of the legs independently of the
                upper body. Many skiers who aren’t well balanced over their skis
                don’t have the ability to rotate the legs and turn the skis
                without turning the entire body.
                <br />
                When you find a stance that is centered over your feet, it
                becomes possible to rotate the thighs, and turn the skis while
                keeping the upper body and even the hips down the hill in a
                short turn.
                <strong>
                  <em> Drill: </em>
                </strong>
                Practice staying balanced over your feet, and turning the legs
                off to each side while continuing to move straight down the
                hill—your shoulders and upper body facing the fall line. This
                proper stance will make for quick feet, and great skiing in all
                conditions."
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                {" "}
                <strong>
                  5. Regulate the Pressure Created by the Ski/Snow Interaction
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                "The true '<em>je ne sais quoi</em>' ” of great skiing is a
                skier’s ability to have “touch.” Good touch is what makes a
                skier look like they are floating down the hill with no effort.
                Once a skier is balanced front to back, and side to side on the
                skis, has proper angles, and is turning the legs, there is a
                chance to have good touch. Being able to leave the snow when you
                want, and being able to stay on the snow when you want are good
                examples of this.
                <br />
                When a skier is balanced over the boots and skis, the legs can
                be supple, and relaxed, and can adjust for changes in the
                terrain. This is the opposite of a skier who is leaning back and
                bracing against their outside leg and holding on for dear life.
                <br />
                That skier is going to be thrown into the air unintentionally by
                the next bump. The best drill for dialing in this fundamental is
                to ski lots of types of terrain. Go find powder, breakable
                crust, ice and anything else off the groomers. That will help
                build your touch!"
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="recom-col recom-img">
          <img className="img1" src={product} />
          <Link to="/cart">
            <button className="recom-btn">Go to shop list!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecomItem;
