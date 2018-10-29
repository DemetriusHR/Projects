import styled from 'styled-components';

const NewsWrapper = styled.div`
  width: 100%;
  color: #383838;

  .content-news {
    height: 100vh;
    overflow: scroll;
    animation-name: moveRight;
    animation-duration: 0.5s;
  }

  @keyframes moveRight {
    from {
      transform: translateY(1000px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export default NewsWrapper;
