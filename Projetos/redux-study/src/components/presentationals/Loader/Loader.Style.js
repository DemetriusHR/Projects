import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 600px;
  border: none;
  background: none;

  .line-1 {
    position: absolute;
    background: #6ac0d6;
    height: 50%;
    bottom: 25%;
    width: 5%;
    left: 45%;
    z-index: 1;
  }

  .line-2 {
    position: absolute;
    background: #89e5f6;
    height: 50%;
    bottom: 25%;
    width: 5%;
    left: 50%;
    z-index: 1;
  }

  .triangle {
    position: absolute;
    height: 40%;
    width: 200%;
    top: -20%;
    left: -100%;
    background: #08517a;
    -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: 2;
  }

  .triangle-sm {
    position: absolute;
    height: 30%;
    width: 100%;
    top: -15%;
    left: -0%;
    background: #6ac0d6;
    -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    z-index: 2;
  }

  .shine {
    position: absolute;
    height: 20%;
    width: 100%;
    top: 90%;
    background: #b2e4f6;
    animation: shine 0.8s infinite;
    z-index: 3;
  }

  .line-3 {
    position: absolute;
    background: #89e5f6;
    height: 30%;
    bottom: 25%;
    width: 5%;
    left: 40%;
    z-index: 1;
  }

  .line-4 {
    position: absolute;
    background: #08517a;
    height: 35%;
    bottom: 25%;
    width: 5%;
    left: 55%;
    z-index: 1;
  }

  @keyframes shine {
    0% {
      top: 100%;
    }
    100% {
      top: -10%;
    }
  }
`;

export default LoaderWrapper;
