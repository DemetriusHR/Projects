import styled from 'styled-components';

const ListWrapper = styled.div`
  height: 91.7vh;
  overflow-y: scroll;
  color: #222;

  ul {
    padding: 0 40px 100px 40px;
    list-style-type: none;
  }

  li {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;

    .task-styled {
      width: 90%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .container {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    height: 25px;
    margin-bottom: 10px;
    padding: 35px;
    display: block;
    position: unset;
    font-size: 22px;
    cursor: pointer;
  }

  .considerations {
    right: 0px;
    padding-left: 20px;
    font-size: 15px;

    .complete {
      padding-left: 10px;
    }
  }

  li:hover {
    background-color: #f8fff8;
  }
`;

export default ListWrapper;
