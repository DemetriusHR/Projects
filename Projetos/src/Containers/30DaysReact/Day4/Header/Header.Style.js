import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: relative;
  height: 60px;
  background: #5f98cd;
  padding-top: 0;

  .menuIcon {
    position: absolute;
    width: 29px;
    height: 15px;
    top: 23px;
    left: 20px;
    cursor: pointer;

    &:hover {
      .dashTop,
      .dashBottom,
      .circle {
        background: #fff;
      }
    }

    .dashTop {
      position: absolute;
      width: 20px;
      height: 3px;
      top: 0;
      left: 0;
      background: #b2daff;
      border-radius: 3px;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }

    .dashBottom {
      position: absolute;
      width: 20px;
      height: 3px;
      top: 0;
      left: 0;
      background: #b2daff;
      border-radius: 3px;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      width: 29px;
      top: auto;
      bottom: 0;
    }

    .circle {
      position: absolute;
      height: 7px;
      width: 7px;
      border-radius: 4px;
      top: -2px;
      right: 0;
      background: #b2daff;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
  }

  .title {
    display: block;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }

  .searchIcon {
    position: absolute;
    z-index: 3;
    font-size: 21px;
    color: #ffffff;
    top: 18px;
    right: 20px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

export default HeaderWrapper;
