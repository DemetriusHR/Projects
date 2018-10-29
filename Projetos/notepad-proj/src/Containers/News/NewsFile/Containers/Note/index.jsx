import React from 'react';

import NoteWrapper from './Note.Style';
import ParagrafoWrapper from '../Paragrafo/Paragrafo.Style';

const Note = (props) => {
  const { note } = props;

  return (
    <ParagrafoWrapper>
      <NoteWrapper className="italic">{note}</NoteWrapper>
    </ParagrafoWrapper>
  );
};

export default Note;
