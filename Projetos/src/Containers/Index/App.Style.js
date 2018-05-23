import styled from "styled-components";
import contadorImg from "../../Assets/imgs/Screenshot_1.png";
import todoImg from "../../Assets/imgs/Screenshot_2.png";
import faceImg from "../../Assets/imgs/Screenshot_3.png";
import climaImg from "../../Assets/imgs/Screenshot_4.png";

const AppWrapper = styled.body`
  background-color: #222;
  height: 100%;

  .App {
    text-align: center;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    font-size: large;
  }

  .img-align {
    padding: 18px;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  .contador {
    background: #222 url(${contadorImg}) no-repeat;
  }

  .todo {
    background: #222 url(${todoImg}) no-repeat;
  }

  .face {
    background: #222 url(${faceImg}) no-repeat;
  }

  .clima {
    background: #222 url(${climaImg}) no-repeat;
  }

  .overlay {
    background: #fff !important;
    text-align: center;
    padding: 67px 0 66px 0;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
  }

  .img-align:hover .overlay {
    opacity: 1;
  }

  .text {
    white-space: nowrap;
    color: black;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
  }

  .p-format {
    text-align: center;
    margin-buttom: 0px;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default AppWrapper;
