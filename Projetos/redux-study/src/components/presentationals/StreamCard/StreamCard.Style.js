import styled from "styled-components";

const StreamCardWrapper = styled.div`
  margin-top: 50px;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  display: flex;
  flex-direction: "row";
  flex-wrap: wrap;

  .stream-cover {
    margin: 20px;
    position: relative;
  }

  .card {
    border: 1px solid rgba(0, 0, 0, 0.62);
    border-radius: 5px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.79);
    background: #4444449c;
    color: #222;
    padding: 12px;
    margin: 15px;

    .name {
      font-size: 22px;
      -webkit-margin-before: 0;
      -webkit-margin-after: 12px;
      color: #eafdff;
    }

    .game {
      font-size: 20px;
      -webkit-margin-before: 0;
      -webkit-margin-after: 12px;
      color: #eafdff;
    }

    .followers {
      font-size: 20px;
      -webkit-margin-before: 0;
      -webkit-margin-after: 12px;
      color: #fff;
    }

    .viewers {
      font-size: 20px;
      -webkit-margin-before: 0;
      -webkit-margin-after: 12px;
      color: #ff3d3d;
    }
  }
`;

export default StreamCardWrapper;
