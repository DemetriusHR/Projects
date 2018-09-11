import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PageInitialWrapper from './pageInitialStyled';
import Button from '../../Components/Buttons/ButtonOne';
import dataBase from '../../Utils/dataBase';
import { onCompare } from '../../Utils/FunctionsAux';
import { languageEnglish, languageEspanol, languagePortugues } from '../../Store/actions/index';

class PageInitial extends React.PureComponent {
  render() {
    return (
      <PageInitialWrapper>
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
        <h1> {dataBase[this.props.languageValue].title} </h1>
        <h3> {dataBase[this.props.languageValue].subtitle} </h3>
        <Link to={'/login'}>
          <Button text={dataBase[this.props.languageValue].buttonText} />
        </Link>
      </PageInitialWrapper>
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
}) (PageInitial);
