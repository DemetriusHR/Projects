import styled from 'styled-components';

const ProfileWrapper = styled.div`
  width: 256px;
  right: 0px;
  border-top: 0px !important;
  border-bottom-left-radius: 5px;
  position: absolute;
  float: right;
  background: white;
  text-align: 20px;
  text-decoration: none;
  animation-name: slideInDown;
  animation-duration: 0.3s;

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  .fa {
    margin-left: 15px;
  }

  .content {
    height: 20px;
    padding: 5px 0;
  }

  .content:hover {
    background: #00abff;
    color: white;
  }

  .content-notoff {
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
  }

  .content-off {
    border-bottom-left-radius: 5px;
    color: red;
  }

  .content-off:hover {
    background: red;
    color: white;
  }

  .margin-styled__1 {
    margin-left: 7px;
  }

  .margin-styled__2 {
    margin-left: 2px;
  }

  @keyframes slideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default ProfileWrapper;
