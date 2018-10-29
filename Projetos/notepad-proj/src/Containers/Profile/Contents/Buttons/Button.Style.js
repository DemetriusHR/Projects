import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: ${(props) => props.width};
  margin-left: 10px;
  border-radius: 6px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background: #00abff;  
  display: inline-block;
  position: relative;
  vertical-align: top;  
  color: white;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
  outline: 0;
  cursor: pointer;
             
  :hover {
    background: ${(props) => props.backgroundHover};
    color: ${(props) => props.colorHover};
  }
              
  .effect {
    height: 18px;
    padding: 15px 0;
    transition: all 0.2s linear 0s;

    &:before {
      content: "\f${(props) => props.content}";
      width: 30px;
      height: 100%;
      top: 0;
      left: 0px;
      border-radius: 0 50% 50% 0;
      background-color: #eef9ff87;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      font-family: FontAwesome;
      transform: scale(0, 1);
      transform-origin: left center;
      transition: all 0.2s linear 0s;
    }

    &:hover {
      text-indent: 30px;

      &:before {
        transform: scale(1, 1);
        text-indent: 0;
      }
    }
  }
`;

export default ButtonWrapper;
