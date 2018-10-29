import styled from 'styled-components';

const ImageModalWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  display: none;
  position: fixed;
  background-color: #000000c2;
  cursor: zoom-out;

  .image-content,
  .description-content {
    margin: auto;
  }

  .description-content {
    width: 80%;
    height: 5%;
    padding: 10px 0;
    background: #a5a5a5b5;
    display: block;
    text-align: center;
    color: #45c0fd;
  }

  .image-content,
  .description-content {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  .close {
    top: 15px;
    right: 35px;
    position: absolute;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: 700px) {
    .image-content {
      width: 100%;
    }
  }
`;

export default ImageModalWrapper;
