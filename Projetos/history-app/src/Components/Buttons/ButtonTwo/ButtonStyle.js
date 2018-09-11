import styled from 'styled-components';

const ButtonWrapper = styled.div`
  padding-top: 15px;
  
  .component {
    margin: 0;
    color: #484848;
    text-align: center;
  }

  .text {
    padding: 12px 40%;
    color: #444;
    border: 1px solid #63636336;
    background: #9a796152;
    border-radius: 4px;
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
      box-shadow: 0 0 0 0 rgba(191, 191, 191, 0.34);
    }
    100% {
      box-shadow: 0 0 0 13px rgba(218,218,218,0);
    }
  }
`;

export default ButtonWrapper;
