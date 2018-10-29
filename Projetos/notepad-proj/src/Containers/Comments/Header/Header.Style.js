import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #f1f1f1;
  text-align: center;
  padding: 20px 0;

  .textarea-style {
    width: 70%;
    height: 10vh;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: 0;
    resize: none;
    margin-bottom: 10px;
  }

  .button-style {
    vertical-align: top;
    height: 10vh;
    width: 6vh;
    margin-left: 10px;
  }

  .button {
    height: 7vh;
    width: 100px;
    border: 0;
    background: #57c8ff;
    color: white;
    outline: 0;
    cursor: pointer;
  }

  .button-save:hover {
    background: green;
    color: white;
  }

  .button-cancel:hover {
    background: red;
    color: white;
  }
`;

export default HeaderWrapper;
