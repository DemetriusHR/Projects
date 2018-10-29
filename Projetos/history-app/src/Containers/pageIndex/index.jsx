import React, { Fragment, lazy, Suspense } from 'react';

import { ContentWrapper, ChangeLanguageContent } from './ContentStyle';
import Navbar from '../../Components/Navbar';
import CardLoading from '../../Components/Cards/CardLoading';
import ChangeLanguage from '../../Components/ChangeLanguage';

const Cards = lazy(() => import('./Components/Cards'));

const Loading = () => (
  <ContentWrapper>
    <div className="cards">
      <div style={{ padding: '10px' }}>
        <CardLoading />
      </div>
      <div style={{ padding: '10px' }}>
        <CardLoading />
      </div>
      <div style={{ padding: '10px' }}>
        <CardLoading />
      </div>
      <div style={{ padding: '10px' }}>
        <CardLoading />
      </div>
    </div>
  </ContentWrapper>
);

const PageIndex = ({ history }) => (
  <Fragment>
    <Navbar history={history} />
    <Suspense fallback={<Loading />}>
      <ContentWrapper>
        <Cards history={history} />
      </ContentWrapper>
    </Suspense>
    <ChangeLanguageContent>
      <ChangeLanguage border="#fff" />
    </ChangeLanguageContent>
  </Fragment>
);

export default PageIndex;
