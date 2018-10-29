import styled from 'styled-components';

export const DropDownWrapper = styled.div`
  left: 0;
  width: 160px;
  margin-top: 44px;
  padding: 15px 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  float: right;
  color: #fff;
  text-align: left;
  font-size: 16px;
  animation-name: zoomInDown;
  animation-duration: 0.1s;

  p {
    -webkit-margin-before: 1em;
    -webkit-margin-after: 0;
    font-size: 14px;
    font-weight: normal;
  }

  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const TooltipArrow = styled.div`
  top: -7px;
  right: 85%;
  width: 0;
  height: 0;
  margin-left: -5px;
  border-color: transparent;
  border-bottom-color: rgba(0, 0, 0, 0.6);
  border-style: solid;
  border-width: 0 7px 7px;
  background: rgba(0, 0, 0, 0);
  position: absolute;
`;

export const PowerOff = styled.div`
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
    font-size: 18px;
    font-weight: 100;
  }

  :hover {
    background: white;
    color: red;
  }
`;
