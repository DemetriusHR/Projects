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

  .card {
    cursor: pointer;
  }
`;
