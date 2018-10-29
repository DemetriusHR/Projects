import styled from 'styled-components';

const CommentWrapper = styled.div`
  margin-bottom: 30px;
  padding: 15px 25px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);

  .header {
    padding-bottom: 0px;
    font-size: 16px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      object-fit: cover;
    }

    .date-content {
      font-size: 13px;
    }
  }
`;

export default CommentWrapper;
