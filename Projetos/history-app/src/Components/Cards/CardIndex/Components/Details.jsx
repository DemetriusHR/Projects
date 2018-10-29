import React from 'react';

import { XCard, ButtonDescription } from '../CardStyled';

export const Details = ({
  description,
  detailsWord,
  show,
  details,
  onClickShow,
  clickOnCard
}) => (
  <div className="description-card">
    <XCard onClick={clickOnCard}>X</XCard>
    {description}
    <ButtonDescription onClick={onClickShow}>
      {`${detailsWord} `}
      <span className={`fa fa-chevron-${show ? 'down' : 'up'}`} />
    </ButtonDescription>
    <div
      style={{
        display: `${show ? '' : 'none'}`,
        paddingTop: '10px'
      }}
    >
      {details}
    </div>
  </div>
);
