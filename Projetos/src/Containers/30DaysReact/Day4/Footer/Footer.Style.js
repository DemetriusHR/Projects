import styled from "styled-components";

const FooterWrapper = styled.div`
  position: relative;
  background: #ffffff;
  margin: auto;
  height: 30px;
  border-top: 1px solid #eee;
  width: 100%;
  border-radius: 10px;

  button {
    background: #eee;
    position: absolute;
    width: 100%;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom: 0px;
    border: 0;

    i {
      margin: 0 10px;
    }
  }
`;

export default FooterWrapper;
