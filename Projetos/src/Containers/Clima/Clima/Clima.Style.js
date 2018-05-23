import styled from "styled-components";

const ClimaWrapper = styled.div`
  padding: 10px;
  background: rgb(0, 224, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 224, 255, 1) 0%,
    rgba(0, 224, 255, 1) 4%,
    rgba(255, 255, 255, 1) 99%
  );
  height: calc(100vh - 20px);

  .testando {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-column-gap: 10px;
    grid-row-gap: 1em;
    width: 30%;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 68%;
    right: 0;
    background-color: #86dffd;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: 0.5s ease;
    text-align: center;
  }

  .testando:hover .overlay{
    width: 32%;
  }
`;

export default ClimaWrapper;
