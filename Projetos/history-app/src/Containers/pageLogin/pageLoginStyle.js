import styled from 'styled-components';

const PageLoginWrapper = styled.div`
  height: 100vh;
  background: #6748327a;
  color: #5b5149;

  .languages {
    padding: 7px;
    font-size: 9px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    .title {
      margin: 0;
      padding-bottom: 10px;
      padding-left: 10px;
      font-weight: 600;
    }

    .language {
      padding: 1px 10px;
      border-radius: 3px;
    }

    .language:hover {
      cursor: pointer;
    }
  }

  .login-card {
    right: 24%;
    position: absolute;
    padding: 27px 10% 20px;
    animation-name: fadeInDown;
    animation-duration: .5s;

    .esc-card {
      width: 3%;
      cursor: pointer;
      -webkit-touch-callout: none;
        -webkit-user-select: none;
         -khtml-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    }

    .login {
      background: #fff;
      height: 80vh;
      width: 60vh;
      border-radius: 6px;
      box-shadow: 3px 3px 3px 0px #88888885;
      padding: 10px;

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
          -webkit-touch-callout: none;
            -webkit-user-select: none;
             -khtml-user-select: none;
               -moz-user-select: none;
                -ms-user-select: none;
                    user-select: none;
        }

        .here-finish:hover {
          color: #000;
        }

      }
    }
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
              margin-top: 26px;
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
          padding: 8px
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

  @media screen and (min-width: 600px) and (max-width: 1024px) {
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
`;

export default PageLoginWrapper;
