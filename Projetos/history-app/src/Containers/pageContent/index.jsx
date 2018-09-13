import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import PageInitialWrapper from './pageInitialStyled';
import Navbar from '../../Components/Navbar';
// import ChangeLanguage from '../../Components/ChangeLanguage';
// import dataBase from '../../Utils/dataBase';

class PageContent extends React.PureComponent {
  state = {
    textTeste: 'teste'
  }

  render() {
    const { textTeste } = this.state;
    return (
      <Fragment>
        <Navbar />
        <p>
          {`${textTeste}`}
        </p>
      </Fragment>
    );
  }
}

export default PageContent;
