import styled from 'styled-components';

const ContentWrapper = styled.div`
  -webkit-touch-callout: text;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  height: 100%;
  padding: 2% 20% 5%;

  .header-content {
    img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      object-fit: cover;
    }

    .name-content,
    .date-content {
      font-family: 'Quicksand', sans-serif;
      cursor: default;
    }

    .name-content,
    .name:hover {
      color: #383838;
    }

    .date-content,
    .date:hover {
      color: #8c8b8b;
    }
  }
`;

export default ContentWrapper;
