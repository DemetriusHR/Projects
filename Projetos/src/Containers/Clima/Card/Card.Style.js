import styled from "styled-components";

const CardWrapper = styled.div`
  width: 90px;
  text-align: center;
  position: relative;

  .test {
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(16, 16, 16, 0.2), 0 6px 20px 0 rgba(16, 16, 16, 0.19);
  }

  .test:hover {
    border: 1px solid #fff853d4;
    height: 130px;
  }
  
  .testing {
    border: 1px solid #fff;
  }

  .img-style {
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default CardWrapper;
