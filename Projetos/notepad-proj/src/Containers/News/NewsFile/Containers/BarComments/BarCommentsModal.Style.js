import styled from 'styled-components';

const BarCommentsModalWrapper = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 34%;
  margin-top: 29%;
  padding-top: 40px;
  border-top: 1px solid #ccc;
  display: none;
  position: fixed;
  background-color: rgba(226, 226, 226, 0.32);
  text-align: center;
  animation-name: bounceInUp;
  animation-duration: 0.8s;

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #d0d0d0;
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

  .textarea {
    width: 80%;
    height: 150px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    outline: 0;
  }

  .buttons {
    width: 80%;
    height: 20%;
    margin: auto;
    padding: 5px 0;
    display: block;
    color: #45c0fd;
    text-align: center;

    .button {
      height: 7vh;
      width: 100px;
      border: 0;
      background: #57c8ff;
      color: white;
      outline: 0;
      cursor: pointer;
    }

    .button-save:hover {
      background: green;
      color: white;
    }

    .button-cancel:hover {
      background: red;
      color: white;
    }
  }

  .textarea,
  .buttons {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    75% {
      transform: translate3d(0, 10px, 0);
    }

    90% {
      transform: translate3d(0, -5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
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
    .textarea-content {
      width: 100%;
    }
  }
`;

export default BarCommentsModalWrapper;
