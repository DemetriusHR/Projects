import styled from 'styled-components';

const NavBarWrapper = styled.div`
  height: 7.6vh;
  background: #80d5ff;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  .back {
    margin-left: -202vh;
    margin-top: -2px;
    padding: 11px 10px;
    font-size: 30px;
  }

  .back:hover {
    background: white;
    color: #80d5ff;
  }

  .back:active {
    background: white;
    color: blue;
  }

  .text {
    margin-top: -35px;
  }

  .foto-styled {
    margin-top: -53px;
    margin-right: 10px;
    float: right;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      object-fit: cover;
    }
  }
`;

export default NavBarWrapper;
