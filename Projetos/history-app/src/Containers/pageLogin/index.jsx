import React from 'react';

import PageLoginWrapper from './pageLoginStyle';

import ChangeLanguage from '../../Components/ChangeLanguage';
import Body from './Components/Body';

const PageLogin = () => {
  return (
    <PageLoginWrapper>
      <ChangeLanguage />
      <Body />
    </PageLoginWrapper>
  );
};

export default PageLogin;
