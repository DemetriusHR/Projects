import styled from 'styled-components';

const ComponentWrapper = styled.div`
  width: 320px;
  padding: 10px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .title {
    font-weight: bold;
    font-size: 18px;
    padding-right: 10px;
  }
`;

export default ComponentWrapper;
