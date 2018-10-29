import React from 'react';
import { Link } from 'react-router-dom';

import DropDownWrapper from './DropDown.Style';

const DropDown = (props) => {
  const { nickname, text } = props;

  return (
    <DropDownWrapper>
      <div className="tooltip-arrow" />
      <span>{`@${nickname}`}</span>
      <p>{text}</p>
      <Link to="/logoff">
        <div className="power-off">
          <span className="fa fa-power-off" />
          <span className="text-poweroff">Sair</span>
        </div>
      </Link>
    </DropDownWrapper>
  );
};

export default DropDown;
