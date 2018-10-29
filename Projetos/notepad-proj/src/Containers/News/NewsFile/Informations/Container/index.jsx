import React from 'react';

import ContainerWrapper from './Container.Style';

const Container = (props) => {
  const { number, icon } = props;

  return (
    <ContainerWrapper>
      <span className="number-likes">{number}</span>
      <br />
      <span className={`fa ${icon}`} />
    </ContainerWrapper>
  );
};

export default Container;
