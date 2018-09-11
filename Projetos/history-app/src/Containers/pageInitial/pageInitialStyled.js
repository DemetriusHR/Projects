import styled from 'styled-components';

const PageInitialWrapper = styled.div`
  height: 100vh;
  background: #6748327a;
  color: #5b5149;

  h1, h3 {
    margin: 0;
    text-align: center;
  }
  h1 {
    padding-top: 25vh;
    font-family: 'Arimo', sans-serif;
    font-size: 50px;
  }
  h3 {
    font-weight: 300;
    font-family: 'Inconsolata', monospace;
  }

  .languages {
    padding: 7px;
    font-size: 9px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    .title {
      margin: 0;
      padding-bottom: 10px;
      padding-left: 10px;
      font-weight: 600;
    }

    .language {
      padding: 1px 10px;
      border-radius: 3px;
    }

    .language:hover {
      cursor: pointer;
    }
  }
`;

export default PageInitialWrapper;
