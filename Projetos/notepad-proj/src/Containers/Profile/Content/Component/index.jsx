import React from 'react';

import ComponentWrapper from './Component.Style';

const Component = (props) => {
  const { text, title } = props;

  return (
    <ComponentWrapper>
      <span>
        <span className="title">{title}</span>
        {text}
      </span>
    </ComponentWrapper>
  );
};

export default Component;
