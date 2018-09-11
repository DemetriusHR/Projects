import styled from 'styled-components';

const ButtonWrapper = styled.div`
  padding-top: 18vh;
  
  .component {
    margin: 0;
    color: #484848;
    text-align: center;
  }

  .text {
    padding: 12px 17px;
    border: 1px solid #636363;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    -webkit-touch-callout: none;
      -webkit-user-select: none;
       -khtml-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
  } 

  .text:hover {
    cursor: pointer;
    animation: radial-pulse 1s infinite;
  }

  @keyframes radial-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(107, 107, 107, 0.4);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(218, 218, 218, 0);
    }
  }
`;

export default ButtonWrapper;
