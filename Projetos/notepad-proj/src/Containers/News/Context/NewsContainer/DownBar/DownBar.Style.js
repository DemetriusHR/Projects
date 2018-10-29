import styled from 'styled-components';

const DownBarWrapper = styled.div`
  margin-top: 10px;
  font-size: 14px;

  .fa {
    color: #45c0fd;
    font-size: 20px;
  }

  .star {
    width: 60px;
    padding: 10px 10px 10px 0;
  }

  .save {
    margin-top: -44px;
    padding: 10px;
    float: right;
    text-align: right;
  }

  .star,
  .save {
    cursor: pointer;
  }
`;

export default DownBarWrapper;
