import styled from 'styled-components';

const NewsContainerWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px 25px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);

  .img-news {
    width: 95.8%;
    height: 20vh;
    padding: 18px;
    display: flex;
    justify-content: center;
    background-size: cover;
    background: #222 url(${(props) => props.image}) no-repeat;
  }

  .title-news {
    margin-bottom: 5px;
    padding-top: 15px;
    color: #565656;
    font-size: 22px;
    font-weight: bold;
  }

  .subtitle-news {
    color: #696969;
    font-size: 18px;
  }

  .read-news {
    color: #8c8b8b;
    font-size: 14px;
  }

  .img-news,
  .title-news,
  .subtitle-news,
  .read-news {
    cursor: pointer;
  }

  .read-news:hover {
    color: #565656;
  }
`;

export default NewsContainerWrapper;
