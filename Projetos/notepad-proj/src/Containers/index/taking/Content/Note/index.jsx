import React, { useContext } from 'react';

import NoteWrapper from './Note.Style';
import { NotesContext } from '../../../../../Context';

const Note = () => {
  const { copied, cuted, actions, title, content } = useContext(NotesContext); // eslint-disable-line
  return (
    <NoteWrapper
      style={{
        marginLeft: `${copied ? '5px' : ''}${cuted ? '6px' : ''}`
      }}
    >
      <form onSubmit={(e) => actions.onChange(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => actions.handleInputChangeTitle(e)}
          className="styled title"
          placeholder="Título..."
          autoComplete="off"
        />
        <br />
        <textarea
          placeholder="Nota..."
          value={content}
          onChange={(e) => actions.handleInputChangeContent(e)}
          cols="30"
          rows="5"
          className="styled note scroll-styled"
        />
      </form>
    </NoteWrapper>
  );
};

export default Note;
