import styled from 'styled-components';

const ItemsWrapper = styled.div`
  padding: 15px;
  padding-left: 30px;
  vertical-align: center;
  backface-visibility: visible !important;
  animation-name: flipInX;
  animation-duration: 1s;
  text-align: left;
  cursor: pointer;

  .title {
    font-weight: bold;
    color: #666;
  }

  .content {
    color: #999;
  }

  .text-size {
    width: 300px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  :hover {
    background: #e7eff3;
  }

  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
  }
`;

export default ItemsWrapper;
