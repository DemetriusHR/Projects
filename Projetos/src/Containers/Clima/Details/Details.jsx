import React from "react";
import DetailsWrapper from "./Details.Style";
import cloudy from "../../../Assets/imgs/cloudy.png";
import cloudyNoite from "../../../Assets/imgs/cloudy-noite.png";
import cloudyNight from "../../../Assets/imgs/cloud-morning.png";
import cloud from "../../../Assets/imgs/cloud-night.png";
import sunny from "../../../Assets/imgs/sun.png";

const dayInNumber =
  new Date().getUTCDate() + "/0" + (new Date().getMonth() + 1) + "";
  
const Details = () => (
  <DetailsWrapper>
    <p className="title">
      {dayInNumber} <br />
      {new Date().getDay() === 0
        ? "Domingo"
        : new Date().getDay() === 1
          ? "Segunda"
          : new Date().getDay() === 2
            ? "Terça"
            : new Date().getDay() === 3
              ? "Quarta"
              : new Date().getDay() === 4
                ? "Quinta"
                : new Date().getDay() === 5
                  ? "Sexta"
                  : "Sábado"}
      {new Date().getDay() > 0 && new Date().getDay() < 6 ? "-Feira" : ""}
    </p>
    <div className="container">
      <div>
        <img src={cloud} alt="sunny" />
        <span> 10°C </span> <br />
        <span> 6:00hrs </span>
      </div>
      <div>
        <img src={cloudy} alt="sunny" />
        <span> 15°C </span> <br />
        <span> 9:00hrs </span>
      </div>

      <div>
        <img src={sunny} alt="sunny" />
        <span> 17°C </span> <br />
        <span> 12:00hrs </span>
      </div>
      <div>
        <img src={sunny} alt="sunny" />
        <span> 22°C </span> <br />
        <span> 15:00hrs </span>
      </div>
      <div>
        <img src={cloudyNight} alt="sunny" />
        <span> 18°C </span> <br />
        <span> 18:00hrs </span>
      </div>
      <div>
        <img src={cloudyNoite} alt="sunny" className="cloud" />
        <span> 12°C </span> <br />
        <span> 21:00hrs </span>
      </div>
    </div>
    <div className="informations">
      <p> Mais informações:</p>
      <a href="https://www.climatempo.com.br/"> www.climatempo.com.br</a>
    </div>
  </DetailsWrapper>
);

export default Details;
