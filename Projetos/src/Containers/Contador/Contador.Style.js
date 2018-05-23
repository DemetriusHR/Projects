import styled from "styled-components";

const AppWrapper = styled.body`
  padding: 10px;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    86deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  height: calc(100vh - 20px);
  
  .stop {
    padding: 20px;
    font-size: 20px;
    color: red;
  }

  .start {
    padding: 20px;
    font-size: 20px;
    color: green;
  }

  .div-align {
    margin-left: 45%;
  }

  .background {
    background-color: black;
    width: 85px;
  }

  .timer {
    font-size: 30px;
    margin-left: 0px;
    color: #1ea800;
    font-family: DejaVu Sans Light;
  }
`;

export default AppWrapper;
