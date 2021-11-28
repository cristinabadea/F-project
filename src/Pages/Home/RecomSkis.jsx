/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Contexts/Context";
import { ImageContext } from "../../Contexts/ImageContext";
import RecomItem from "./RecomItem";
import { Link } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const RecomSkis = () => {
  const context = useContext(Context);
  const imageContext = useContext(ImageContext);

  console.log("recom skis: " + imageContext);
  const [answer, setAnswer] = useState({
    height: context.data?.userData?.height ?? "",
    weight: context.data?.userData?.weight ?? "",
    gender: context.data?.userData?.gender ?? "",
    ability: context.data?.userData?.ability ?? "",
    skiStyle: context.data?.userData?.skiStyle ?? "",
    recom1: "",
    recom2: "",
    recom3: "",
    image: "",
  });

  useEffect(() => {
    // Male - B - P
    if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 135 - 138 cm.`,
        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,
        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,
        image: imageContext.products[0].imageUrl,
      });

      // Male - b - OP
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 135 - 138 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      // Male - int - p
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,

        recom1: `Suggested ski lengh: 136 - 139 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[2].imageUrl,
      });

      // Male - int - op
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 136 - 139 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      // Male - adv - p
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,

        recom1: `Suggested ski lengh: 137 - 140 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,
        image: imageContext.products[4].imageUrl,
      });

      // male - adv - op
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 137 - 140 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,
        image: imageContext.products[17].imageUrl,
      });

      // fem - b - p
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 135 - 138 cm.`,
        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions. The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing. Long and clean turns or shorter arcs down groomers make the essence of alpine skiing. Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,
        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best. They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,
        image: imageContext.products[6].imageUrl,
      });

      // fem - b - op
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 135 - 138 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[13].imageUrl,
      });
      //fem - int - p
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 136 - 139 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[8].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 136 - 139 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      // fem - adv - p
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 137 - 140 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[10].imageUrl,
      });

      //fem - adv - op
    } else if (
      (answer.height === "146cm - 147cm" ||
        answer.height === "148cm - 150cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 137 - 140 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      // male - b - p
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 140 - 142 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[1].imageUrl,
      });
      //male - b - op
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 140 - 142 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //male - int - p
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 141 - 144 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[3].imageUrl,
      });

      // male - int - op
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 141 - 144 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      // male - adv - p
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 142 - 145 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[5].imageUrl,
      });

      // male - adv - op
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 142 - 145 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //fem - b - p
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 140 - 142 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[7].imageUrl,
      });

      //fem - b - op
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 140 - 142 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 141 - 143 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[9].imageUrl,
      });

      // fem - int - op
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 141 - 143 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      // fem - adv - p
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 142 - 144 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[11].imageUrl,
      });

      // fem - adv - op
    } else if (
      (answer.height === "151cm - 152cm" ||
        answer.height === "153cm - 155cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,

        recom1: `Suggested ski lengh: 143 - 145 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      // male - b - p
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,

        recom1: `Suggested ski lengh: 143 - 145 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[0].imageUrl,
      });

      // male - b - op
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 145 - 148 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      // male - int - p
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 146 - 149 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[2].imageUrl,
      });

      //male - int - op
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 146 - 149 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      // male - adv - p
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 147 - 150 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[5].imageUrl,
      });

      // male - adv - op
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 147 - 150 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //fem - b -p
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 144 - 147 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[6].imageUrl,
      });

      //fem - b - op
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 144 - 147 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 145 - 148 cm.`,
        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[8].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 145 - 148 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 146 - 149 cm.`,
        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier.
        
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[10].imageUrl1,
      });

      //fem-adv -op
    } else if (
      (answer.height === "156cm - 158cm" ||
        answer.height === "159cm - 160cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 146 - 149 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      // male - b - p
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 150 - 152 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[1].imageUrl,
      });

      //male - b - op
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 150 - 152 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      // male - int- p
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 151 - 153 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[3].imageUrl,
      });

      //male - int - op
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 151 - 153 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //male - adv - p
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 152 - 154 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[5].imageUrl,
      });

      // male - adv -op
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 152 - 154 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //fem-b-p
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 149 - 151 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[6].imageUrl,
      });

      // fem - b - op
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 149 - 151 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 150 - 152 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[8].imageUrl,
      });

      // fem - int - op
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 150 - 152 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 151 - 153 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[10].imageUrl,
      });

      //fem-adv-op
    } else if (
      (answer.height === "161cm - 162cm" ||
        answer.height === "163cm - 165cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 151 - 153 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[18].imageUrl,
      });

      //male - b -p
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 154 - 156 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[1].imageUrl,
      });

      // male - b - op
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 154 - 156 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //male - int - p
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 155 - 157 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[3].imageUrl,
      });

      //male-int - op
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 155 - 157 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //male - adv - p
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 156 - 158 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[5].imageUrl,
      });

      //male - adv - op
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 156 - 158 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //fem - b -p
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 154 - 157 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time.
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[6].imageUrl,
      });

      //fem - b - op
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 154 - 157 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 155 - 158 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[8].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 155 - 158 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 156 - 159 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[10].imageUrl,
      });

      //fem - adv - op
    } else if (
      (answer.height === "166cm - 168cm" ||
        answer.height === "169cm - 170cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 156 - 159 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //male - b-p
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 160 - 164 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[1].imageUrl,
      });

      // male - b -op
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 160 - 164 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //male - int - p
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 161 - 165 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[3].imageUrl,
      });

      //male - int - op
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 161 - 165 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //male - adv - p
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 162 - 166 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[4].imageUrl,
      });

      //male - adv - op
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 162 - 166 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      //fem - b  - p
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 160 - 164 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,
        image: imageContext.products[7].imageUrl,
      });

      //fem - b - op
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 160 - 164 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 161 - 165 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[9].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 161 - 165 cm.`,
        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //fem-adv - p
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 160 - 164 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[11].imageUrl,
      });

      //fem - adv - op
    } else if (
      (answer.height === "171cm - 173cm" ||
        answer.height === "174cm - 176cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 160 - 164 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      //male - b -p
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 165 - 168 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,
        image: imageContext.products[1].imageUrl,
      });

      // male - b -op
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 165 - 168 cm.`,
        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //male - int - p
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 166 - 169 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[3].imageUrl,
      });

      //male - int - op
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 166 - 169 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //male - adv - p
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 167 - 170 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,
        image: imageContext.products[5].imageUrl,
      });

      //male - adv - op
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 167 - 170 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      // fem - b - p
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 165 - 168 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[6].imageUrl,
      });

      //fem - b - op
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 165 - 168 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 166 - 169 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[8].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 166 - 169 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 167 - 170 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[10].imageUrl,
      });

      // fem - adv - op
    } else if (
      (answer.height === "177cm - 178cm" ||
        answer.height === "179cm - 180cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 167 - 170 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //male - b -p
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 168 - 171 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[0].imageUrl,
      });

      // male - b - op
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 168 - 171 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      // male - int - p
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 169 - 172 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[2].imageUrl,
      });

      //male - int - op
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 169 - 172 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //male - adv - p
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 170 - 173 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[4].imageUrl,
      });

      //male - adv - op
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 170 - 173 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      //fem - b - p
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 168 - 170 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[7].imageUrl,
      });

      //fem - b -op
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 168 - 170 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 169 - 171 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[9].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 169 - 171 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 170 - 172 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[11].imageUrl,
      });

      //fem - adv - op
    } else if (
      (answer.height === "181cm - 183cm" ||
        answer.height === "184cm - 186cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 170 - 172 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //male - b - p
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 172 - 175 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[1].imageUrl,
      });

      //male - b -op
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 172 - 175 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //male - int - p
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 173 - 176 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[3].imageUrl,
      });

      //MALE - int - op
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 173 - 176 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //male - adv - p
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 174 - 177 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[5].imageUrl,
      });

      //MALE - adv - op
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 174 - 177 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //fem - b -p
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 172 - 175 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[6].imageUrl,
      });

      // fem - b -op
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 172 - 175 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 173 - 176 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[8].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 173 - 176 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 174 - 177 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[10].imageUrl,
      });

      //fem -adv - op
    } else if (
      (answer.height === "184cm - 186cm" ||
        answer.height === "187cm - 188cm") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 174 - 177 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[17].imageUrl,
      });

      //male - b -p
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 176 - 180 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[0].imageUrl,
      });

      //male - b -op
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Male" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 176 - 180 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[12].imageUrl,
      });

      //male - int - p
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 177 - 181 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[2].imageUrl,
      });

      //male - int - op
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Male" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 177 - 181 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[14].imageUrl,
      });

      //male -adv -p
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 179 - 182 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[4].imageUrl,
      });

      //male -adv - op
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Male" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 179 - 182 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        image: imageContext.products[16].imageUrl,
      });

      //fem - b -p
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 176 - 180 cm.`,

        recom2: `Being a beginer, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to learn the moves in no time. 
        Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
        The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake. Piste skis: This is probably the most traditional way of skiing.
        Long and clean turns or shorter arcs down groomers make the essence of alpine skiing.
        Whether you skid your turns or carve them, you ride down groomed snow and pistes all day, having fun varying the length of your turns and your style.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[7].imageUrl,
      });

      //fem - b -op
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Female" &&
      answer.ability === "Beginer" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 176 - 180 cm.`,

        recom2: `Being an off-piste beginner, it is recommended to choose shorter skis. That we'll give you more control and stability and you will be able to get used to the powder in no time.
                Typical beginner ski qualities include:  softer flex, narrower widths, composite, foam or softer wood cores, and capped constructions.
                The idea is to create a ski that is easy to turn and very forgiving if you do make a mistake.`,

        recom3: `You are a good on-piste skier who can handle black runs without problems. Able to link turns and stop safely on steep slopes. You feel mentally and physically ready to go off piste.
                You will need a go for it attitude and be physically fit.
                Overall skiing experience should be a minimum of 5 weeks.
                Off piste experience: 0 – 3 weeks.`,

        image: imageContext.products[13].imageUrl,
      });

      //fem - int - p
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 177 - 181 cm.`,

        recom2: ` The majority of skiers and skis fall into intermediate level, whether you like to carve on groomers or venture into the powder. 
        These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
        Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        Skiing on piste will teach you how to balance and how to turn. In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[9].imageUrl,
      });

      //fem - int - op
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Female" &&
      answer.ability === "Intermediate" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 177 - 181 cm.`,

        recom2: `You are confident and comfortable skiing off piste in moderate terrain. You are prepared to venture into more challenging terrain and snow conditions to further develop your off piste skills.
                Overall skiing experience should be a minimum of 10 weeks.
                Off piste experience minimum 3 weeks with a mountain guide.`,

        recom3: `These skis are  generally somewhat wider than beginner-intermediate skis, with a stronger wood core and sandwich sidewall construction.
                Depending on the type of ski, intermediate-advanced level skis may have full camber, rocker, or some combination of the two.`,

        image: imageContext.products[15].imageUrl,
      });

      //fem - adv - p
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      answer.skiStyle === "On piste"
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 178 - 181 cm.`,

        recom2: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,

        recom3: `Piste skiing is the most accessible form of skiing, suited for the entire family, you'll have to go through it before jumping on other terrains. 
        In order to link long turns at high speed on hard snow, piste skis featuring a traditional camber and a waist sizing below 86mm are best.
        They deliver quicker edge to edge transitions and offer more grip as well as precise edge control.`,

        image: imageContext.products[11].imageUrl,
      });

      //fem - adv -op
    } else if (
      (answer.height === "189cm - 191cm" || answer.height === "192cm +") &&
      answer.gender === "Female" &&
      answer.ability === "Expert" &&
      (answer.skiStyle === "Freeride" ||
        answer.skiStyle === "Ski touring" ||
        answer.skiStyle === "Ski mountaineering")
    ) {
      setAnswer({
        ...answer,
        recom1: `Suggested ski lengh: 178 - 181 cm.`,

        recom2: `You confidently ski off piste in all conditions including steep terrain, such as narrow couloirs or steep pitches.
        You have a thorough understanding of snow safety and rescue procedures and have practiced with your equipment.
        Overall skiing experience minimum 15 weeks.
        Off piste experience more 6 weeks.`,

        recom3: `Regardless of terrain choice, advanced to expert level skis are for the more aggressive and skilled skier. 
        You will often find layers of Titanal, carbon, flax, or other materials meant to deliver better performance at speed or in demanding conditions.
        Advanced-expert skis are generally stiffer both longitudinally and torsionally than intermediate level skis and can be challenging at slower speeds.
        You'll find expert level carving, park, all-mountain and powder skis with a wide variety of rocker configurations.
        Performance range skis are for more assertive skiers who want to make marked turns from the top to the bottom of the slopes.
        If you like to go fast, have good physical fitness and a solid technical level, these more sturdy and responsive skis are for you.
        Depending on your preference, you have the choice between more sidecut for tight turns or less sidecut for wide turns. ‘Race’ skis are also available for very good skiers.
        They are developed based on the same technologies used to build the racing skis of professional athletes.`,
        image: imageContext.products[17].imageUrl,
      });
    }
  }, []);

  return (
    <div>
      <div>
        <RecomItem
          recom1={answer.recom1}
          recom2={answer.recom2}
          recom3={answer.recom3}
          itemImage={answer.image}
        ></RecomItem>
      </div>
    </div>
  );
};
export default RecomSkis;
