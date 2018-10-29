import React, { useContext } from 'react';

import ItemsWrapper from './Items.Style';
import { NotesContext } from '../../../../../Context';

const Items = () => {
  const { postsSearch, actions, id } = useContext(NotesContext);
  return (
    <React.Fragment>
      {postsSearch.map((data) => (
        <ItemsWrapper
          key={data.key}
          onClick={() => actions.onClickContent(data)}
          style={{
            background: `${id === data.id ? '#c8e3f1' : ''}`
          }}
        >
          <span className="title text-size">{data.title}</span>
          <br />
          <span className="content text-size">{data.content}</span>
        </ItemsWrapper>
      ))}
    </React.Fragment>
  );
};

export default Items;
