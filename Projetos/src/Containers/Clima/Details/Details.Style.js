import styled from "styled-components";

const DetailsWrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px 60px 60px;
    grid-column-gap: 10px;
    grid-row-gap: 1em;
    padding: 10px;
  }

  .informations {
    margin-top: 75%;
  }

  .title {
    font-size: 30px;
  }

  .cloud {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export default DetailsWrapper;
