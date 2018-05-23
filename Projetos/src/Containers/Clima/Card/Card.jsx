import React from "react";
import CardWrapper from "./Card.Style";
import sunny from "../../../Assets/imgs/sunny-day.png";
import rainy from "../../../Assets/imgs/rainy-day.png";
import cloudy from "../../../Assets/imgs/cloudy-day.png";

const Card = props => {
  const cardSource = props.data;
  const dayInNumber =
  new Date().getUTCDate() + "/0" + (new Date().getMonth() + 1) + "";

  return cardSource.map(card => (
    <CardWrapper key={card.id}>
      <p> {card.dayOfMouth} </p>
      <div className={`test ${(card.dayOfMouth === dayInNumber) ? 'testing'  : ''}`}>
        <span> {card.dayOfWeek.substring(0, 3)} </span> <br />
        <img
          src={
            card.climate === "1" ? sunny : card.climate === "2" ? rainy : cloudy
          }
          alt="sunny"
        /> <br />
        <span>
          min: {card.min}° <br /> max: {card.max}°
        </span>
      </div>
    </CardWrapper>
  ));
};

export default Card;
