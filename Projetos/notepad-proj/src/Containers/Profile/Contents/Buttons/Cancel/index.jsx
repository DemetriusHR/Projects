import React from 'react';

import ButtonWrapper from '../Button.Style';

const ButtonCancel = () => (
  <ButtonWrapper
    width="100px"
    backgroundHover="red"
    colorHover="white"
    content="2d3"
  >
    <div className="effect">
      <span className="text">Cancelar</span>
    </div>
  </ButtonWrapper>
);

export default ButtonCancel;
