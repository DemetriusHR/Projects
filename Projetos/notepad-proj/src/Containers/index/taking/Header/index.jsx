import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import HeaderWrapper from './Header.Style';
import { NotesContext } from '../../../../Context';
import { ProfileContext } from '../../../../Context/profile';

function Header() {
  const [state, setState] = useState({ visible: true });
  const {
    copied,
    cuted,
    actions,
    title,
    content,
    date,
    profile,
    idProfileNote
  } = useContext(NotesContext);
  const { profiles } = useContext(ProfileContext);

  function onClickMore() {
    const { visible } = state;

    setState({
      visible: !visible
    });
  }

  return (
    <HeaderWrapper
      className="border"
      style={{
        marginLeft: `${copied ? '5px' : ''}${cuted ? '6px' : ''}`
      }}
    >
      <div
        className="fa fa-info-circle coding-equal buttom"
        onClick={() => actions.onClickInfo()}
      />

      <div
        className="fa fa-clock-o coding-equal buttom"
        onClick={() => actions.onClickDate()}
      />

      <div
        className="fa fa-trash coding-equal buttom"
        onClick={() => actions.onClickDelete()}
      />

      <div
        className={`fa ${
          state.visible ? 'fa-angle-right' : 'fa-angle-left clicked'
        } coding-equal buttom`}
        onClick={() => onClickMore()}
      />
      <CopyToClipboard
        text={`Título: ${title} Conteudo: ${content} ${date}`}
        onCopy={() => actions.onCut()}
      >
        <div
          className="fa fa-cut coding-equal buttom"
          style={{
            visibility: `${state.visible ? 'hidden' : ''}`,
            background: `${cuted ? '#d0f7d0' : ''}`
          }}
        />
      </CopyToClipboard>

      <CopyToClipboard
        text={`Titulo: ${title} Conteudo: ${content} ${date}`}
        onCopy={() => actions.onCopy()}
      >
        <div
          className="fa fa-copy coding-equal buttom"
          style={{
            visibility: `${state.visible ? 'hidden' : ''}`,
            background: `${copied ? '#d0f7d0' : ''}`
          }}
        />
      </CopyToClipboard>
      <span className="copied">
        {copied ? 'copiado!' : ''}
        {cuted ? 'recortado!' : ''}
      </span>

      <div
        className={`fa coding-equal email ${profile ? 'clicked' : ''}`}
        onClick={() => actions.onClickProfile()}
      >
        <span className="text">{profiles[idProfileNote].email}</span>
        <span className={`${profile ? 'fa-angle-up' : 'fa-angle-down'}`} />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
