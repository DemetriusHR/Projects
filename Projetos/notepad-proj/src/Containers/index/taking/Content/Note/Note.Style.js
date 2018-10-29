import styled from 'styled-components';

const NoteWrapper = styled.div`
  padding: 20px 60px;

  .styled {
    border: 0 !important;
    outline: 0;
  }

  .title {
    width: 90%;
    height: 30px;
    margin-bottom: 30px;
    font-size: 20px;
    outline: 0;
  }

  .note {
    width: 100%;
    height: 73vh;
    resize: none;
  }
`;

export default NoteWrapper;
