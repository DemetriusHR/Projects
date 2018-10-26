import styled from 'styled-components';

const PageLoginWrapper = styled.div`
  height: 100vh;
  background: #6748327a;
  color: #5b5149;

  .login-card {
    right: 24%;
    padding: 27px 10% 20px;
    position: absolute;
    animation-name: fadeInDown;
    animation-duration: 0.5s;

    .esc-card {
      width: 3%;
      cursor: pointer;
    }

    .login {
      height: 80vh;
      width: 60vh;
      padding: 10px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 3px 3px 3px 0px #88888885;

      .header-card {
        margin-top: 40px;
        padding: 15px 0px;
        text-align: center;

        h1 {
          margin: 0;
          font-size: 25px;
          font-family: 'Arimo', sans-serif;
        }

        h3 {
          margin: 0;
          font-size: 18px;
        }
      }

      .header-card-create {
        margin-top: 20px;
      }

      .content-card {
        margin-top: 20px;
        padding: 25px;
        outline: 0;

        p {
          margin: 0;
          margin-top: 40px;
          font-size: 11px;
        }

        input {
          width: 100%;
          padding-top: 10px;
          border: 0;
          border-bottom: 1px solid #ccc;
          font-size: 18px;
          outline: 0;
        }

        input:focus {
          border-bottom: 1px solid #25b960;
        }
      }

      .content-card-create {
        margin-top: -33px;
      }

      .finish-card {
        font-size: 14px;
        text-align: center;

        .here-finish {
          cursor: pointer;
          font-size: 15px;
          font-weight: 550;
          color: #9a8e86;
        }

        .here-finish:hover {
          color: #000;
        }
      }
    }
  }

  .div-error {
    bottom: 4px;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #44444454;
    position: fixed;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    @media (max-height: 500px) {
      .login-card {
        right: 0.3%;
        padding: 24px 0% 0px;

        .login {
          width: 66vh;
          padding: 1px;

          .header-card {
            margin-top: 10px;
          }

          .content-card {
            p {
              margin-top: 18px;
            }
          }
        }
      }
    }

    @media (min-height: 550px) and (max-height: 574px) {
      .login-card {
        right: 0.3%;
        padding: 24px 0% 0px;

        .login {
          width: 53vh;
          padding: 8px;
        }
      }
      @media (max-height: 568px) {
        .content-card {
          p {
            margin-top: 30px !important;
          }
        }
      }
    }

    @media (min-height: 575px) {
      .login-card {
        right: 1%;
        padding: 24px 0% 0px;

        .login {
          width: 52vh;
        }
      }
    }

    @media (height: 812px) {
      .login-card {
        .login {
          width: 43vh;
        }
      }
    }

    @media (height: 823px) {
      .login-card {
        .login {
          width: 46.5vh;
        }
      }
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    .login-card {
      right: -1%;
      padding: 27px 10% 0;
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .dZxRSE {
    padding-top: 1vh;
  }
`;

export default PageLoginWrapper;
