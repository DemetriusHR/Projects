function onCompare(state, language, border) {
  const colorBorder = `2px solid ${
    border !== undefined ? border : '#00000052'
  }`;

  return state === language ? colorBorder : '';
}

export { onCompare };
