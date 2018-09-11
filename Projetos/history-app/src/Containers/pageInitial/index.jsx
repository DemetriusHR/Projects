import React from 'react';
import { Link } from "react-router-dom";

import PageInitialWrapper from './pageInitialStyled';
import Button from '../../Components/Buttons/ButtonOne';
import dataBase from '../../Utils/dataBase';
import { onCompare } from '../../Utils/FunctionsAux';

class PageInitial extends React.PureComponent {
  state ={
    language: 'English'
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
      <PageInitialWrapper>
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
        <h1> {dataBase[this.state.language].title} </h1>
        <h3> {dataBase[this.state.language].subtitle} </h3>
        <Link to={'/login'}>
          <Button text={dataBase[this.state.language].buttonText} />
        </Link>
      </PageInitialWrapper>
    );
  }
}

export default PageInitial;
