import React from 'react';

import ButtonWrapper from '../Button.Style';

const ButtonSave = () => (
  <ButtonWrapper
    width="100px"
    backgroundHover="green"
    colorHover="white"
    content="00c"
  >
    <div className="effect">
      <span className="text">Salvar</span>
    </div>
  </ButtonWrapper>
);

export default ButtonSave;
