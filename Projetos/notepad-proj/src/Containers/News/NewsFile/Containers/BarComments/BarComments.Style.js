import styled from 'styled-components';

const BarCommentsWrapper = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 30px 30px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  color: #8e8e8e;

  :hover {
    color: #6b6b6b;
  }

  .fa {
    font-size: 22px;
    margin-right: 10px;
  }
`;

export default BarCommentsWrapper;
