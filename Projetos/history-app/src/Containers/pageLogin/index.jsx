import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PageLoginWrapper from './pageLoginStyle';
import Button from '../../Components/Buttons/ButtonTwo';
import dataBase from '../../Utils/dataBase';
import { onCompare } from '../../Utils/FunctionsAux';
import { languageEnglish, languageEspanol, languagePortugues } from '../../Store/actions/index';

class PageLogin extends React.PureComponent {
  state = {
    createAccount: false
  }

  onClickCreate = () => {
    this.setState({
      createAccount: true
    });
  }

  render() {
    return (
      <PageLoginWrapper>
        <div className="languages">
          <p className="title">
            {dataBase[this.props.languageValue].titleChangeLanguage}
          </p>
          <span 
            className="language" 
            style={{ border: `${onCompare(this.props.languageValue, 'English')}` }}
            onClick={() => this.props.languageEnglish()}
          >
            English
          </span>
          <span 
            className="language" 
            style={{ border: `${onCompare(this.props.languageValue, 'Português')}` }}
            onClick={() => this.props.languagePortugues()}
          >
            Português
          </span>
          <span 
            className="language" 
            style={{ border: `${onCompare(this.props.languageValue, 'Español')}` }}
            onClick={() => this.props.languageEspanol()}
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
                    <h1> {dataBase[this.props.languageValue].createAccount} </h1>
                  </div>
                  <div className="content-card content-card-create">
                    <p>{dataBase[this.props.languageValue].nickname}</p>
                    <input type="text" required="required" />
                    <p>{dataBase[this.props.languageValue].email}</p>
                    <input type="text" required="required" />
                    <p>{dataBase[this.props.languageValue].password}</p>
                    <input type="password" required="required" />
                    <p>{dataBase[this.props.languageValue].confirmPass}</p>
                    <input type="password" required="required" />
                    <Button text={<span>{dataBase[this.props.languageValue].create}</span>} />
                  </div>
                </React.Fragment>
                 :
                <React.Fragment>
                  <div className="header-card">
                    <h1> Login </h1>
                  </div>
                  <div className="content-card">
                    <p>{dataBase[this.props.languageValue].email}</p>
                    <input type="text" required="required" />
                    <p>{dataBase[this.props.languageValue].password}</p>
                    <input type="password" required="required" />
                    <Button text={dataBase[this.props.languageValue].signIn} />
                  </div>
                  <div className="finish-card">
                    <p>{dataBase[this.props.languageValue].dontAccount} 
                        <span className="here-finish" onClick={() => this.onClickCreate()}> {dataBase[this.props.languageValue].here}</span>
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

const mapStateToProps = state => {
  return {
    languageValue: state.language.language
  };
};

export default connect(
 mapStateToProps, 
{
  languageEnglish,
  languageEspanol,
  languagePortugues
}) (PageLogin);
