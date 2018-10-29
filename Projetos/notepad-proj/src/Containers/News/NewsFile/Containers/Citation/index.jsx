import React from 'react';

import CitationWrapper from './Citation.Style';
import ParagrafoWrapper from '../Paragrafo/Paragrafo.Style';

const Citation = (props) => {
  const { citation } = props;

  return (
    <ParagrafoWrapper>
      <CitationWrapper className="italic">{citation}</CitationWrapper>
    </ParagrafoWrapper>
  );
};

export default Citation;
