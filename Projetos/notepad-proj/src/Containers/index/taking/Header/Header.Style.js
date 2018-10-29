import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding-left: 4px;
  border-left: 0px !important;

  .coding-equal {
    padding: 13px 23px;
    cursor: pointer;
  }

  .buttom {
    width: 17px;
    font-size: 20px;
  }

  .email {
    width: 210px;
    padding: 15px 23px;
    float: right;
    overflow: hidden;
    text-align: right;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .clicked {
    background: #c8e3f1;
  }

  .copied {
    color: rgb(8, 206, 8);
    padding: 15px 23px;
  }

  .buttom:hover,
  .email:hover {
    background: #f3f3f3;
  }

  .clicked:hover {
    background: #c8e3f1;
  }
`;

export default HeaderWrapper;
