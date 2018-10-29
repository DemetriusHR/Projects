import React from 'react';
import PropTypes from 'prop-types';

import TextLinePlaceholder from './TextLinePlaceholder';

const Paragraph = ({ numberOfLines, marginBottom, lineHeight, className }) => {
  const lines = [];
  const lineWidths = [99, 98, 97, 96, 95, 94, 93];
  const lastLineWidth = [80, 75, 70, 65, 60, 55, 50, 45, 40, 35];

  // eslint-disable-next-line
  for (let i = 0; i < numberOfLines + 1; i++) {
    let width = lineWidths[Math.floor(Math.random() * lineWidths.length)];
    let setLineHeight = lineHeight;
    if (i !== 0 && i % 5 === 0) {
      width = lastLineWidth[Math.floor(Math.random() * lastLineWidth.length)];
      setLineHeight = marginBottom;
    }

    lines.push(
      <TextLinePlaceholder key={i} width={width} marginBottom={setLineHeight} />
    );
  }
  return <div className={className}>{lines}</div>;
};

Paragraph.defaultProps = {
  numberOfLines: 5,
  lineHeight: 12,
  marginBottom: 30,
  className: ''
};

Paragraph.propTypes = {
  numberOfLines: PropTypes.number,
  lineHeight: PropTypes.number,
  marginBottom: PropTypes.number,
  className: PropTypes.string
};

export default Paragraph;
