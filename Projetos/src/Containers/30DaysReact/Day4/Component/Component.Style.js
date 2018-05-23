import styled from "styled-components";

const ComponentWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  .line {
    position: absolute;
    top: 0;
    left: 40px;
    bottom: 0;
    width: 3px;
    background: #ebebeb;
  }

  .item {
    position: relative;
    z-index: 2;
    margin: 20px 30px 30px 70px;
    display: block;

    &:hover {
      color: #5f98cd;
      cursor: pointer;
    }

    .circle {
      box-sizing: border-box;
      position: absolute;
      height: 11px;
      width: 11px;
      background: #fff;
      border: 2px solid #5f98cd;
      box-shadow: 0 0 0 3px #fff;
      border-radius: 6px;
      top: 0;
      left: -20px;
    }

    .avatar {
      position: absolute;
      height: 40px;
      width: 40px;
      display: inline-block;
      vertical-align: top;
      overflow: hidden;
      left: -49px;

      img {
        width: 100%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .time {
      display: block;
      font-size: 11px;
      line-height: 11px;
      margin-bottom: 2px;
    }

    p {
      font-size: 15px;
      line-height: 20px;
      margin: 0px 40px 0px 0px;
      font-family: "Open Sans", Lora, Times, no-serif;

      b {
        font-weight: 600;
      }
    }

    .right {
      position: absolute;
      right: 5px;
      font-size: 11px;
      top: 11px;
    }

    .commentCount {
      position: absolute;
      right: 15px;
      font-size: 12px;
      top: 11px;

      &:after {
        content: "\f075";
        font-family: FontAwesome;
        position: absolute;
        font-size: 20px;
        color: #ebebeb;
        top: -50%;
        left: 100%;
        margin-left: 10px;
        z-index: 3;
      }

      &:hover:after {
        color: lightblue;
      }
      /*border-radius: 50%;
            border: 5px solid #ecf0f1;
  
            box-sizing: border-box;
            position: absolute;
            height: 20px;
            width: 20px;
            background: #fff;
            border: 2px solid #5F98CD;
            box-shadow: 0 0 0 3px #fff;*/
    }
  }
`;
export default ComponentWrapper;
