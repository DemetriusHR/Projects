import React from 'react';

import ButtonWrapper from '../Button.Style';

const ButtonEdit = () => (
  <ButtonWrapper
    width="150px"
    backgroundHover="#bae3f7"
    colorHover="#00abff"
    content="044"
  >
    <div className="effect">
      <span className="text">Editar</span>
    </div>
  </ButtonWrapper>
);

export default ButtonEdit;
