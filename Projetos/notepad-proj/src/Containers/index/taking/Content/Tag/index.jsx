import React, { useContext } from 'react';

import TagWrapper from './Tag.Style';
import { NotesContext } from '../../../../../Context';

const Tag = () => {
  const { copied, cuted, date } = useContext(NotesContext);
  return (
    <TagWrapper
      className="border"
      style={{
        visibility: `${date === '' ? 'hidden' : ''}`,
        marginLeft: `${copied ? '5px' : ''}${cuted ? '6px' : ''}`
      }}
    >
      <div className="information">
        <span>{date}</span>
      </div>
    </TagWrapper>
  );
};

export default Tag;
