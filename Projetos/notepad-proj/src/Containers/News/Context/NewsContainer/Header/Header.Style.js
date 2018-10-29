import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;

  .image {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
  }

  .text {
    margin-left: 12px;
    cursor: pointer;

    .name {
      color: #45c0fd;
      font-weight: bold;
      font-size: 15px;
    }

    .name:hover {
      color: #399fd2;
    }

    .date {
      color: #8c8b8b;
    }

    .date:hover {
      color: #565656;
    }
  }
`;

export default HeaderWrapper;
