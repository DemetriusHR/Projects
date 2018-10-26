import React from 'react';

import { ButtonWrapper, ComponentWrapper, TextWrapper } from './ButtonStyle';

const Button = ({ text }) => (
  <ButtonWrapper>
    <ComponentWrapper>
      <TextWrapper className="dont-select">{text}</TextWrapper>
    </ComponentWrapper>
  </ButtonWrapper>
);

export default Button;
