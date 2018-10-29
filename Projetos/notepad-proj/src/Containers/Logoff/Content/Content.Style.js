import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 20px 40px 50px 40px;
  color: #5a5a5a;

  .container {
    width: 95%;
    margin-bottom: 10px;
    padding: 20px 30px;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #80d5ff;
    color: white;
    overflow: hidden;
    text-transform: capitalize;
    display: inline-block;
    position: relative;
  }

  .container:hover {
    background-color: #66bea4;
  }

  .container.effect-styled {
    transition: all 0.2s linear 0s;

    &:before {
      content: '\f0a4';
      top: 0;
      right: -30px;
      width: 30px;
      height: 100%;
      border-radius: 0px 6px 6px 0px;
      background-color: #afffa963;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      font-family: FontAwesome;
      font-size: 20px;
      text-align: center;
      transition: all 0.2s linear 0s;
    }

    &:hover {
      text-indent: -30px;

      &:before {
        right: 0;
        text-indent: 0px;
      }
    }
  }
`;

export default ContentWrapper;
