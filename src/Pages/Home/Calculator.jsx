/** @format */

import React, { useContext } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";

import { Context } from "../../Contexts/Context";

import "./Calculator.css";

const Calculator = () => {
  const context = useContext(Context);
  // console.log(context);
  const json = {
    title: "Get your perfect ski equipment",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      {
        questions: [
          {
            type: "html",
            html: "You are about to start a quiz in order to find the right skis for you!<br/>Please click on <b>'Start Quiz'</b> button when you are ready.",
          },
        ],
      },
      {
        questions: [
          {
            type: "dropdown",
            name: "height",
            title: "Please select your height... (cm)",
            choices: [
              "146cm - 147cm",
              "148cm - 150cm",
              "151cm - 152cm",
              "153cm - 155cm",
              "156cm - 158cm",
              "159cm - 160cm",
              "161cm - 162cm",
              "163cm - 165cm",
              "166cm - 168cm",
              "169cm - 170cm",
              "171cm - 173cm",
              "174cm - 176cm",
              "177cm - 178cm",
              "179cm - 180cm",
              "181cm - 183cm",
              "184cm - 186cm",
              "187cm - 188cm",
              "189cm - 191cm",
              "192cm +",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "dropdown",
            name: "weight",
            title: "Please select your weight... (kg)",
            choices: [
              "45kg - 50kg",
              "50kg - 54kg",
              "55kg - 59kg",
              "60kg - 63kg",
              "64kg - 67kg",
              "68kg - 72kg",
              "73kg - 77kg",
              "78kg - 81kg",
              "82kg - 85kg",
              "86kg - 90kg",
              "91kg - 95kg",
              "96kg - 99kg",
              "100kg - 104kg",
              "105kg - 109kg",
              "110kg - 113kg",
              "114kg - 117kg",
              "118kg - 122kg",
              "123kg +",
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "dropdown",
            name: "gender",
            title: "Please select your gender...",

            choices: ["Male", "Female"],
          },
        ],
      },
      {
        questions: [
          {
            type: "dropdown",
            name: "ability",
            title: "Please select your ability level...",

            choices: ["Beginer", "Intermediate", "Expert"],
          },
        ],
      },
      {
        questions: [
          {
            type: "dropdown",
            name: "skiStyle",
            title: "Please select your riding style...",

            choices: [
              "On piste",
              "Freeride",
              "Ski touring",
              "Ski mountaineering ",
            ],
          },
        ],
      },
    ],
    completedHtml: "Congratulatios! Your perfect skis are here!",
  };

  const survey = new Survey.Model(json);
  survey.onComplete.add(function (sender) {
    context.methods.saveUserData(sender.data);
  });

  return (
    <div id="container-survey">
      <div id="srv">
        <Survey.Survey model={survey} />
      </div>
    </div>
  );
};

export default Calculator;
