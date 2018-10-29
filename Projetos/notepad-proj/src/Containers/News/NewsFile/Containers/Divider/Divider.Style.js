import styled from 'styled-components';

const DividerWrapper = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  --x-height-multiplier: 0.342;
  --baseline-multiplier: 0.22;
  margin: 40px 0;
  border: 0;
  display: block;
  overflow: visible;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.6em;

  :before {
    content: '...';
    margin-left: 0.6em;
    display: inline-block;
    position: relative;
    color: rgba(0, 0, 0, 0.68);
  }
`;

export default DividerWrapper;
