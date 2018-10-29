import styled from 'styled-components';

const LinkContentWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1px solid #e8e8e8;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;

  .text {
    width: 70%;
    padding: 23px 20px;

    .title,
    .subtitle {
      margin-bottom: 10px;
    }

    .subtitle,
    .link {
      font-size: 13px;
    }

    .link {
      color: #ccc;
    }
  }

  .image-content {
    margin-left: 45px;
    margin-bottom: -4px;

    img {
      height: 158px;
    }

    .variant {
      width: 65%;
      margin-left: 35%;
    }
  }
`;

export default LinkContentWrapper;
