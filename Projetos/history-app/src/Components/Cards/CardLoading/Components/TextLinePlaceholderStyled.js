import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%{
    background-position:-468px 0
  }
  100%{
    background-position:468px 0
  }
`;

export const TextPlaceholder = styled.div`
  position: relative;
`;

export const Line = styled.div`
  display: block;
  height: 13px;
  width: 100%;
  background: transparent;
  position: relative;
  &:before {
    box-sizing: border-box;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: absolute;
    height: 100%;
    width: 50%;
    content: '';
  }
`;

export const LineCover = styled.div`
  height: 100%;
  content: '';
  background: white;
  position: absolute;
  right: 0;
  top: 0;
`;
