import styled from 'styled-components';

const BottomBarWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  padding: 30px 0px;
  font-family: 'Quicksand', sans-serif;

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .subtitle {
    font-size: 13px;
  }

  .buttons-content {
    display: flex;
    align-items: center;

    .buttom {
      margin-top: 20px;
      margin-bottom: 0px;
      padding: 25px 28px 15px;
      color: #80d5ff;
      font-size: 22px;
      width: 20px;
    }

    .text {
      margin-top: 10px;
      margin-left: 15px;
      width: 40px;
    }

    .second-buttom {
      margin-left: 72%;
    }
  }
`;

export default BottomBarWrapper;
