import styled from 'styled-components';

const ParagrafoWrapper = styled.div`
  margin-bottom: 40px;
  font-family: 'Work Sans', sans-serif;
  font-size: 19px;
  line-height: 1.2;

  img {
    width: 100%;
  }

  .coding {
    margin: 0 2px;
    padding: 3px 4px;
    background: rgba(0, 0, 0, 0.05);
    font-size: 16px;
  }

  .underline {
    text-decoration: underline;
  }

  .first {
    margin-top: 35px;
  }

  .bold {
    font-weight: 600;
  }

  .second-title {
    font-size: 26px;
  }

  .third-title {
    font-size: 22px;
  }

  .second-title,
  .third-title {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .italic {
    font-style: italic;
  }

  li {
    margin-bottom: 20px;
    line-height: 1.25;
  }
`;

export default ParagrafoWrapper;
