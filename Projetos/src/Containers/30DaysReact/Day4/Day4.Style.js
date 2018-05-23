import styled from "styled-components";

const Day4Wrapper = styled.div`
  position: relative;

  .notificationsFrame {
    z-index: 2;
    width: 100%;
    top: 20px;
    background: #fff;
    overflow: hidden;
    font-family: "Open Sans", Helvetica, sans-serif;
    margin-bottom: 40px;

    &.show-menu {
      transform: translate3d(150px, 0, 0);
    }

    .searchInput {
      border: 10px solid red;
      box-sizing: border-box;
      position: absolute;
      top: 13px;
      right: 55px;
      width: 200px;
      height: 34px;
      border-radius: 17px;
      border: none;
      background: #fff;
      padding: 0 17px;
      font-size: 13px;
      color: #666;
      transition: all 0.3s ease-in-out;
      transform: translateX(15px);
      opacity: 0;
      pointer-events: none;

      &:focus {
        outline: none;
      }

      &.active {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

export default Day4Wrapper;
