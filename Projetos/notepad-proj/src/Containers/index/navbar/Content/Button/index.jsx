import React from 'react';

import ButtonWrapper from './Button.Style';

const Button = (props) => {
  const { visibility } = props;
  return (
    <ButtonWrapper
      style={{ backgroundColor: `${visibility ? '#c8e3f1' : ''}` }}
    >
      <span>
        {'Tags'}
        <span
          className={`fa ${visibility ? 'fa-chevron-down' : 'fa-chevron-up'}`}
        />
      </span>
    </ButtonWrapper>
  );
};

export default Button;
