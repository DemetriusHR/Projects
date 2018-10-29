import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin: 30px 60px;
  padding: 60px 60px;
  border: 1px solid #00000014;
  border-radius: 5px;
  background: #80d5ff1a;
  color: #38abffd6;

  .styled,
  .title,
  .button {
    outline: 0;
  }

  .style {
    border: 1px solid #80d5ff4a;
    border-radius: 4px;
  }

  .title,
  .note {
    width: 100%;
  }

  .title {
    height: 30px;
    margin-bottom: 30px;
    padding-left: 5px;
    font-size: 20px;
  }

  .note {
    height: 73vh;
    margin-bottom: 30px;
    padding: 5px;
    resize: none;
  }

  .label {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .buttons-content {
    width: 80%;
    height: 20%;
    margin: auto;
    padding: 5px 0;
    display: block;
    color: #45c0fd;
    text-align: center;

    .button {
      width: 100px;
      height: 7vh;
      border: 0;
      background: #57c8ff;
      color: white;
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
      color: white;
    }
  }

  .styled:hover {
    border: 1px solid #80d5ff6b;
  }

  textarea::placeholder,
  input::placeholder {
    color: #6aceff9e;
  }
`;

export default ContentWrapper;
