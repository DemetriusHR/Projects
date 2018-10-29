import React from 'react';

import { ImgCard } from '../CardStyled';

export const Card = ({ img, imgPadrao, title, subtitle, clickOnCard }) => (
  <div className="card" onClick={(e) => clickOnCard(e)}>
    <ImgCard img={img || imgPadrao} />
    <p className="title-card">{title}</p>
    <p className="subtitle-card">{subtitle}</p>
  </div>
);
