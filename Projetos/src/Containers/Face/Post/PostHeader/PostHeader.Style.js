import styled from "styled-components";

const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;

  .img-style {
    border-radius: 100%;
    object-fit: cover;
    height: 60px;
    width: 60px;
  }

  .nickname {
    margin-left: 10px;
    font-size: 16px;
    color: #666;
  }

  .moment {
    margin-left: 10px;
    font-size: 14px;
    color: #999;
  }
`;

export default PostHeaderWrapper;
