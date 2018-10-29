import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DropDownWrapper, TooltipArrow, PowerOff } from './DropDown.Style';
import { LanguageContext } from '../../../Context';

const DropDown = () => {
  const {
    login,
    idLogin,
    actions: { outIndex },
    dataBase: { logoff }
  } = useContext(LanguageContext);

  return (
    <DropDownWrapper>
      <TooltipArrow />
      <span>{`@${login[idLogin].nickname}`}</span>
      <br />
      <span>{`${login[idLogin].email}`}</span>
      <Link to="/">
        <PowerOff onClick={() => outIndex()}>
          <span className="fa fa-power-off" />
          <span className="text-poweroff">{logoff}</span>
        </PowerOff>
      </Link>
    </DropDownWrapper>
  );
};

export default DropDown;
