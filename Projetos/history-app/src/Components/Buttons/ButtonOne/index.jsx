import React from 'react';

import ButtonWrapper from './Button';

const Button = ({ text }) => (
  <ButtonWrapper>
    <p className="component"><span className="text">{text}</span></p>
  </ButtonWrapper>
);

export default Button;
