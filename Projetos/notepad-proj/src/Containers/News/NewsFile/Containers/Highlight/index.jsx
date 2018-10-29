import React from 'react';
import HighlightWrapper from './Highlight.Style';
import ParagrafoWrapper from '../Paragrafo/Paragrafo.Style';

const Highlight = (props) => {
  const { text } = props;
  return (
    <ParagrafoWrapper>
      <HighlightWrapper className="bold">
        <span>{text}</span>
      </HighlightWrapper>
    </ParagrafoWrapper>
  );
};

export default Highlight;
