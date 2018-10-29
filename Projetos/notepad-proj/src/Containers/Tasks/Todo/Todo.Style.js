import styled from 'styled-components';

const TodoWrapper = styled.body`
  height: 100vh;

  .form-align {
    margin-top: -28px;
    margin-bottom: -6px;
    text-align: center;
  }

  .input {
    width: 70%;
    height: 18px;
    padding-left: 15px;
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 6px 2px;
    background-size: 16px 15px;
    vertical-align: middle;
    outline: 0;
  }
`;

export default TodoWrapper;
