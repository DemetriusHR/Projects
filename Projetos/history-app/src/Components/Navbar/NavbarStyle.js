import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  background: #5b5149;
  position: fixed;
  color: #e0e0e0;
  box-shadow: 1px 1px 1px 1px #0000004f;

  .icon-logoff {
    top: 12px;
    right: 15px;
    position: absolute;
    cursor: pointer;
    font-size: 125%;
  }
`;

export const ComponentWrapper = styled.div`
  margin: 0;
  padding: 10px;
  text-align: center;
  font-size: 19px;
  font-family: 'Playfair Display SC', serif;

  .title-component {
    cursor: pointer;
  }
`;

export const PicturePerfil = styled.div`
  top: 6px;
  left: 6px;
  width: 35px;
  height: 33px;
  position: absolute;
  cursor: pointer;
  background-image: url(${(props) => props.img});
  border-radius: 100%;
  border: 1px solid #ccc;
`;
