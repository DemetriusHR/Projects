import React from 'react';

import ButtonWrapper from './ButtonStyle';

const Button = ({ text }) => (
  <ButtonWrapper>
    <p className="component"><span className="text">{text}</span></p>
  </ButtonWrapper>
);

export default Button;