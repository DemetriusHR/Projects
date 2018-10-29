import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 320px;
  height: 500px;
  padding: 40px 40px 0px;
  border: 1px solid #fbfbfb;
  box-shadow: 2px 2px 4px #e0e0e0;

  .img-profile {
    padding-bottom: 10px;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 300px;
      object-fit: cover;
    }
  }

  .div-content-profile {
    .button-edit {
      margin-left: 79px;
      margin-top: 20px;
    }
  }

  .div-content-edit {
    .edit-img {
      width: 30px;
      height: 30px;
      margin-top: -27px;
      margin-left: 200px;
      border-radius: 100%;
      background: #00abff;
      color: #fff;
      font-size: 20px;

      .text {
        margin-top: -4px;
        margin-left: -1px;
        vertical-align: -webkit-baseline-middle;
        align-text: center;
      }
    }

    .name {
      margin-left: 16px;
    }

    .email {
      margin-left: 14px;
    }

    .date {
      width: 30% !important;
    }

    .button-save {
      margin-left: 40px;
      margin-top: 20px;
    }

    .button-cancel {
      margin-left: 29px;
      margin-top: 20px;
    }

    input[type='email'],
    input[type='text'],
    input[type='date'] {
      width: 50%;
      height: 18px;
      border: 1px solid #d4d4d4;
      border-radius: 8px;
      padding-left: 7px;
      outline: 0;
    }

    input[type='email']:hover,
    input[type='text']:hover,
    input[type='date']:hover {
      border: 1px solid #999;
    }
  }

  .title-link {
    margin-left: -32px;
    padding-right: 0px !important;
  }
`;

export default ContentWrapper;
