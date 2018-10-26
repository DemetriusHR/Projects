import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding-top: 15px;
`;

export const ComponentWrapper = styled.p`
  margin: 0;
  color: #484848;
  text-align: center;
`;

export const TextWrapper = styled.span`
  padding: 12px 40%;
  color: #444;
  border: 1px solid #63636336;
  border-radius: 4px;
  background: #b6a79dd1;
  font-size: 20px;
  font-family: 'Quicksand', sans-serif;

  :hover {
    cursor: pointer;
    animation: radial-pulse-2 1s infinite;
  }

  @keyframes radial-pulse-2 {
    0% {
      box-shadow: 0 0 0 0 rgba(191, 191, 191, 0.34);
    }
    100% {
      box-shadow: 0 0 0 13px rgba(218, 218, 218, 0);
    }
  }
`;
