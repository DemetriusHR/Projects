import React, { useContext } from 'react';

import HeaderWrapper from './Header.Style';
import { NotesContext } from '../../../../Context';

const Header = () => {
  const { actions } = useContext(NotesContext);
  return (
    <HeaderWrapper className="border">
      <form>
        <input
          type="text"
          onKeyUp={(event) => actions.searchNotes(event.target.value)}
          className="input"
          placeholder="Pesquisar..."
          autoComplete="off"
        />
        <div
          className="fa fa-plus icon-plus"
          onClick={() => actions.onClickPlus()}
        />
      </form>
    </HeaderWrapper>
  );
};

export default Header;
