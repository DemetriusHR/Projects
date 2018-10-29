import styled from 'styled-components';

const ContentWrapper = styled.div`
  -webkit-touch-callout: text;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  padding: 20px 40px 50px 40px;
  color: #5a5a5a;

  .container {
    background-color: #fff;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    padding: 20px 30px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .hashtag {
    color: #80d5ff;
  }

  .hashtag:hover {
    cursor: pointer;
    color: #61acd2;
  }
`;

export default ContentWrapper;
