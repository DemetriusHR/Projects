import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: ${(props) => props.height};
  padding: 15px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.09);
  font-family: 'Muli', sans-serif;
  animation-name: fadeInLeft;
  animation-duration: 0.8s;
  color: #222222db;

  @media screen and (min-height: 567px) and (max-height: 730px) {
    height: 28vh;
    @media screen and (min-height: 656px) and (max-height: 657px) {
      height: 36vh;
    }
  }

  @media screen and (min-height: 731px) {
    height: 25vh;
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 414px) {
    .img-card {
      height: 14vh;
      padding: 8px;
    }
  }

  @media screen and (min-width: 1024px) {
    .img-card {
      height: 20vh;
      padding: 18px;
    }
  }

  @media screen and (min-height: 1176px) {
    height: 29vh;
  }

  .title-card {
    padding-top: 10px;
    border-top: 1px solid #2222221c;
    font-size: 25px;
    font-weight: 700;
    color: #3a3a3a;
  }

  .subtitle-card {
    padding-top: 3px;
    font-size: 17px;
    color: #6f6f6f87;
  }

  .description-card {
    animation-name: flipInX;
    animation-duration: 0.3s;
  }

  .card {
    animation-name: flipInXC;
    animation-duration: 0.3s;
    cursor: pointer;
  }

  @keyframes flipInXC {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, -90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
      opacity: 1;
    }

    to {
      transform: perspective(400px);
    }
  }

  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
      opacity: 1;
    }

    to {
      transform: perspective(400px);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ButtonDescription = styled.div`
  padding: 20px 10px 10px;
  text-align: right;
  color: #2222224a;
  cursor: pointer;
`;

export const ImgCard = styled.div`
  margin-bottom: 10px;
  height: 16vh;
  display: flex;
  justify-content: center;
  background-size: cover;
  background: #2220 url(${(props) => props.img}) no-repeat;

  @media screen and (min-height: 1024px) and (max-height: 1025px) {
    height: 17vh;
  }
`;

export const XCard = styled.div`
  display: table;
  margin-top: -14px;
  margin-left: -10px;
  color: #444;
  cursor: pointer;
`;
