import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: zoom-in;

  img {
    width: 85%;
    height: 100%;
    transition: 0.3s;
  }

  img:hover {
    opacity: 0.75;
  }

  .description-image {
    font-size: 13px;
    color: #9e9d9d;
    text-align: center;
  }
`;

export default ImageWrapper;
