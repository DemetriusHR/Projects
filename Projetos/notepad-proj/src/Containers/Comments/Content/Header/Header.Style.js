import styled from 'styled-components';

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  .image {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;
  }

  .text {
    margin-left: 10px;

    .name {
      font-weight: bold;
      font-size: 18px;
    }

    .nickname {
      color: #999;
      margin-left: 3px;
    }
  }
`;

export default HeaderWrapper;
