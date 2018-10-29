import styled from 'styled-components';

import search from '../../../../Assets/imgs/search.png';

const HeaderWrapper = styled.div`
  padding-left: 30px;
  width: 52.4vh;

  .input {
    width: 70%;
    height: 18px;
    padding-left: 25px;
    border: 1px solid #d4d4d4;
    border-radius: 30px;
    background: url(${search});
    background-repeat: no-repeat;
    background-position: 6px 2px;
    background-size: 16px 15px;
    vertical-align: middle;
    outline: 0;
  }

  .icon-plus {
    padding: 13px 23px;
    color: #00abff;
    font-size: 20px;
    cursor: pointer;
  }

  .icon-plus:hover {
    background: #f3f3f3;
  }
`;

export default HeaderWrapper;
