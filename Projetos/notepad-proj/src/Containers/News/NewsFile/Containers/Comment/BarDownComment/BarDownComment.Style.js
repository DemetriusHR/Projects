import styled from 'styled-components';

const CommentWrapper = styled.div`
  padding: 15px 25px;
  border: 1px solid #eaeaea;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);
  color: #8e8e8e;
  font-size: 16px;

  :hover {
    box-shadow: 0px 0px 0px 0px;
    cursor: pointer;
  }

  .fa {
    font-size: 22px;
    margin-right: 10px;
  }

  .button {
    width: 100px;
    height: 7vh;
    border: 0;
    background: #57c8ff;
    color: white;
    outline: 0;
    cursor: pointer;
  }

  .button-save:hover,
  .button-cancel:hover {
    color: white;
  }

  .button-save:hover {
    background: green;
  }

  .button-cancel:hover {
    background: red;
  }
`;

export default CommentWrapper;
