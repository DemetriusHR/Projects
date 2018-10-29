import styled from 'styled-components';

const DropDownWrapper = styled.div`
  width: 160px;
  right: 10px;
  margin-top: 5px;
  padding: 15px 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  float: right;
  color: #fff;
  text-align: left;
  animation-name: zoomInDown;
  animation-duration: 0.1s;

  p {
    -webkit-margin-before: 1em;
    -webkit-margin-after: 0;
    font-size: 14px;
    font-weight: normal;
  }

  .tooltip-arrow {
    top: -7px;
    left: 89%;
    width: 0;
    height: 0;
    margin-left: -5px;
    border-color: transparent;
    border-bottom-color: rgba(0, 0, 0, 0.6);
    border-style: solid;
    border-width: 0 7px 7px;
    background: rgba(0, 0, 0, 0);
    position: absolute;
  }

  .power-off {
    width: 100%;
    margin-top: 15px;
    padding: 3px 0;
    border: 1px solid rgba(0, 0, 0, 0);
    background: red;
    text-align: center;
    color: white;
    cursor: pointer;

    .text-poweroff {
      margin-left: 7px;
      font-size: 20px;
      font-weight: 100;
    }
  }

  .power-off:hover {
    background: white;
    color: red;
  }

  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default DropDownWrapper;
