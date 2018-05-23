import React from "react";
import ClimaWrapper from "./Clima.Style";
import Card from "../Card/Card";
import Details from "../Details/Details";

class Clima extends React.PureComponent {
  state = {
    days: [
      {
        id: 1,
        dayOfMouth: "19/05",
        dayOfWeek:
          new Date("05/19/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/19/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/19/2018").getDay() === 2
                ? "Terça"
                : new Date("05/19/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/19/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/19/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "3",
        min: "15",
        max: "25"
      },

      {
        id: 2,
        dayOfMouth: "20/05",
        dayOfWeek:
          new Date("05/20/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/20/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/20/2018").getDay() === 2
                ? "Terça"
                : new Date("05/20/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/20/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/20/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "3",
        min: "16",
        max: "26"
      },

      {
        id: 3,
        dayOfMouth: "21/05",
        dayOfWeek:
          new Date("05/21/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/21/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/21/2018").getDay() === 2
                ? "Terça"
                : new Date("05/21/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/21/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/21/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "2",
        min: "7",
        max: "20"
      },

      {
        id: 4,
        dayOfMouth: "22/05",
        dayOfWeek:
          new Date("05/22/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/22/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/22/2018").getDay() === 2
                ? "Terça"
                : new Date("05/22/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/22/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/22/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "2",
        min: "10",
        max: "22"
      },

      {
        id: 5,
        dayOfMouth: "23/05",
        dayOfWeek:
          new Date("05/23/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/23/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/23/2018").getDay() === 2
                ? "Terça"
                : new Date("05/23/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/23/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/23/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "2",
        min: "12",
        max: "24"
      },

      {
        id: 6,
        dayOfMouth: "24/05",
        dayOfWeek:
          new Date("05/24/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/24/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/24/2018").getDay() === 2
                ? "Terça"
                : new Date("05/24/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/24/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/24/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "3",
        min: "13",
        max: "25"
      },

      {
        id: 7,
        dayOfMouth: "25/05",
        dayOfWeek:
          new Date("05/25/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/25/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/25/2018").getDay() === 2
                ? "Terça"
                : new Date("05/25/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/25/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/25/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "3",
        min: "14",
        max: "26"
      },

      {
        id: 8,
        dayOfMouth: "26/05",
        dayOfWeek:
          new Date("05/26/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/26/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/26/2018").getDay() === 2
                ? "Terça"
                : new Date("05/26/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/26/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/26/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "3",
        min: "15",
        max: "27"
      },

      {
        id: 9,
        dayOfMouth: "27/05",
        dayOfWeek:
          new Date("05/27/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/27/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/27/2018").getDay() === 2
                ? "Terça"
                : new Date("05/27/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/27/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/27/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "3",
        min: "16",
        max: "29"
      },

      {
        id: 10,
        dayOfMouth: "28/05",
        dayOfWeek:
          new Date("05/28/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/28/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/28/2018").getDay() === 2
                ? "Terça"
                : new Date("05/28/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/28/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/28/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "1",
        min: "18",
        max: "33"
      },

      {
        id: 11,
        dayOfMouth: "29/05",
        dayOfWeek:
          new Date("05/29/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/29/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/29/2018").getDay() === 2
                ? "Terça"
                : new Date("05/29/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/29/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/29/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "1",
        min: "18",
        max: "34"
      },

      {
        id: 12,
        dayOfMouth: "30/05",
        dayOfWeek:
          new Date("05/30/2018").getDay() === 0
            ? "Domingo"
            : new Date("05/30/2018").getDay() === 1
              ? "Segunda"
              : new Date("05/30/2018").getDay() === 2
                ? "Terça"
                : new Date("05/30/2018").getDay() === 3
                  ? "Quarta"
                  : new Date("05/30/2018").getDay() === 4
                    ? "Quinta"
                    : new Date("05/30/2018").getDay() === 5
                      ? "Sexta"
                      : "Sábado",
        climate: "1",
        min: "19",
        max: "35"
      }
    ]
  };
  render() {
    return (
      <ClimaWrapper>
        <div className="testando">
          <Card data={this.state.days} />
          <div class="overlay">
            <Details />
          </div>
        </div>
      </ClimaWrapper>
    );
  }
}

export default Clima;
