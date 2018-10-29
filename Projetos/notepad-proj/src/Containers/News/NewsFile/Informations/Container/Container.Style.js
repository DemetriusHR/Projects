import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 20px;
  height: 34px;
  margin-bottom: 20px;
  padding: 20px 28px;
  border: 1px solid #80d5ff;
  border-radius: 100%;
  text-align: center;

  :hover {
    cursor: pointer;
    animation: radial-pulse 1s infinite;
  }

  @keyframes radial-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(95, 231, 255, 0.4);
    }

    100% {
      box-shadow: 0 0 0 20px rgb(95, 231, 255, 0);
    }
  }
`;

export default ContainerWrapper;
