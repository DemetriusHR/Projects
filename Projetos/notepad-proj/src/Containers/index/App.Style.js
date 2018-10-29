import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas: 'menu main main main main main main main main main main main main';

  .navbar {
    grid-area: menu;
  }

  .taking {
    grid-area: main;
  }

  .border {
    border: 1px solid #eaeaea;
  }
`;

export default AppWrapper;
