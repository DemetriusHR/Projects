import React, { useContext } from 'react';

import HeaderWrapper from './Header.Style';
import { TasksContext } from '../../../../Context/tasks';

const Header = () => {
  const { actionsTasks, term } = useContext(TasksContext);
  return (
    <HeaderWrapper>
      <span className="fa fa-angle-left back" />
      <form className="form-align" onSubmit={(e) => actionsTasks.onSubmit(e)}>
        <input
          type="text"
          value={term}
          onChange={(e) => actionsTasks.onChange(e)}
          className="input"
        />
      </form>
    </HeaderWrapper>
  );
};

export default Header;
