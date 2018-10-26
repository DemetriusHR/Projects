import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding-top: 18vh;
`;

export const ComponentWrapper = styled.p`
  margin: 0;
  color: #484848;
  text-align: center;
`;

export const TextWrapper = styled.span`
  padding: 12px 17px;
  border: 1px solid #636363;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'Quicksand', sans-serif;

  :hover {
    cursor: pointer;
    animation: radial-pulse 1s infinite;
  }

  @keyframes radial-pulse {
    0% {
      box-shadow: 0 0 0 0 #44444414;
    }
    100% {
      box-shadow: 0 0 0 13px #48484805;
    }
  }
`;
