import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonWrapper, ComponentWrapper, TextWrapper } from './Button';

const Button = ({ text, link }) => (
  <ButtonWrapper>
    <ComponentWrapper>
      {link !== undefined ? (
        <Link to={link}>
          <TextWrapper className="dont-select">{text}</TextWrapper>
        </Link>
      ) : (
        <TextWrapper className="dont-select">{text}</TextWrapper>
      )}
    </ComponentWrapper>
  </ButtonWrapper>
);

export default Button;
