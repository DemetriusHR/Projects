import React from 'react';
import { Link } from "react-router-dom";

import PageLoginWrapper from './pageLoginStyle';
import Button from '../../Components/Buttons/ButtonTwo';
import dataBase from '../../Utils/dataBase';
import { onCompare } from '../../Utils/FunctionsAux';

class PageLogin extends React.PureComponent {
  state = {
    language: 'English',
    createAccount: false
  }

  onClickCreate = () => {
    this.setState({
      createAccount: true
    });
  }

  onClickBrasil = () => {
    this.setState({
      language: 'Português'
    });
  }

  onClickUnitedStates = () => {
    this.setState({
      language: 'English'
    });
  }

  onClickEspaña = () => {
    this.setState({
      language: 'Español'
    });
  }

  render() {
    return (
      <PageLoginWrapper>
        <div className="languages">
          <p className="title">
            {dataBase[this.state.language].titleChangeLanguage}
          </p>
          <span 
            className="language" 
            style={{ border: `${onCompare(this.state.language, 'English')}`
                  }}
            onClick={() => this.onClickUnitedStates()}
          >
            English
          </span>
          <span 
            className="language" 
            style={{ border: `${onCompare(this.state.language, 'Português')}`
                  }}
            onClick={() => this.onClickBrasil()}
          >
            Português
          </span>
          <span 
            className="language" 
            style={{ border: `${onCompare(this.state.language, 'Español')}`
                  }}
            onClick={() => this.onClickEspaña()}
          >
            Español
          </span>
        </div>
        <div className="login-card"> 
          <div className="esc-card">
            <Link to={'/'}>
              X
            </Link>
          </div>
          <div className="login">
              {this.state.createAccount ?
                <React.Fragment> 
                  <div className="header-card header-card-create">
                    <h1> {dataBase[this.state.language].createAccount} </h1>
                  </div>
                  <div className="content-card content-card-create">
                    <p>{dataBase[this.state.language].nickname}</p>
                    <input type="text" required="required" />
                    <p>{dataBase[this.state.language].email}</p>
                    <input type="text" required="required" />
                    <p>{dataBase[this.state.language].password}</p>
                    <input type="password" required="required" />
                    <p>{dataBase[this.state.language].confirmPass}</p>
                    <input type="password" required="required" />
                    <Button text={<span>{dataBase[this.state.language].create}</span>} />
                  </div>
                </React.Fragment>
                 :
                <React.Fragment>
                  <div className="header-card">
                    <h1> Login </h1>
                  </div>
                  <div className="content-card">
                    <p>{dataBase[this.state.language].email}</p>
                    <input type="text" required="required" />
                    <p>{dataBase[this.state.language].password}</p>
                    <input type="password" required="required" />
                    <Button text={dataBase[this.state.language].signIn} />
                  </div>
                  <div className="finish-card">
                    <p>{dataBase[this.state.language].dontAccount} 
                        <span className="here-finish" onClick={() => this.onClickCreate()}> {dataBase[this.state.language].here}</span>
                    </p>
                  </div>
                </React.Fragment>
              }
          </div>
        </div>
      </PageLoginWrapper>
    );
  }
}

export default PageLogin;
