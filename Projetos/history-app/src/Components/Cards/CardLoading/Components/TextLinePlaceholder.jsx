import React from 'react';
import PropTypes from 'prop-types';
import { Line, LineCover, TextPlaceholder } from './TextLinePlaceholderStyled';

const TextLinePlaceholder = ({ width, height, marginBottom }) => {
  const setWidth = 100 - width;
  return (
    <TextPlaceholder>
      <Line style={{ height: `${height}px` }} />
      <LineCover style={{ width: `${setWidth}%` }} />
      <div style={{ height: `${marginBottom}px` }} />
    </TextPlaceholder>
  );
};

TextLinePlaceholder.defaultProps = {
  width: 100,
  height: 13,
  marginBottom: 12 // effectively lineHeight
};

TextLinePlaceholder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  marginBottom: PropTypes.number
};

export default TextLinePlaceholder;
