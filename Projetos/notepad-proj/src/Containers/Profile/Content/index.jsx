import React, { Component } from 'react';

import ContentWrapper from './Content.Style';
import ComponentWrapper from './Component/Component.Style';
import Componente from './Component';
import ButtonCancel from '../Contents/Buttons/Cancel';
import ButtonSave from '../Contents/Buttons/Save';
import ButtonEdit from '../Contents/Buttons/Edit';
import { NotesContext } from '../../../Context';
import { ProfileContext } from '../../../Context/profile';

class Content extends Component {
  static contextType = NotesContext + ProfileContext;

  state = {
    visible: true,
    visibleLink: false
  };

  onClick = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible
    });
  };

  onClickLink = () => {
    const { visibleLink } = this.state;

    this.setState({
      visibleLink: !visibleLink
    });
  };

  render() {
    const {
      profiles,
      idProfileNote,
      img,
      name,
      nickname,
      email,
      dateOfBirthday,
      actionsProfiles
    } = this.context;

    const { visible, visibleLink } = this.state;

    return (
      <ContentWrapper>
        <div
          className="div-content-profile"
          style={{
            display: `${visible ? '' : 'none'}`
          }}
        >
          <div className="img-profile">
            <img src={`${profiles[idProfileNote].img}`} alt="profile" />
          </div>
          <div className="component">
            <Componente title="Nome: " text={profiles[idProfileNote].name} />
            <Componente
              title="Usuário: "
              text={profiles[idProfileNote].nickname}
            />
            <Componente title="E-mail: " text={profiles[idProfileNote].email} />
            <Componente
              title="Data de Nascimento: "
              text={profiles[idProfileNote].dateOfBirthday}
            />
          </div>
          <div className="button-edit" onClick={() => this.onClick()}>
            <ButtonEdit />
          </div>
        </div>
        <div
          className="div-content-edit"
          style={{
            display: `${!visible ? '' : 'none'}`
          }}
        >
          <div className="img-profile">
            <img src={`${profiles[idProfileNote].img}`} alt="profile" />
            <div className="edit-img" onClick={() => this.onClickLink()}>
              <span
                className={`text fa ${visibleLink ? 'fa-minus' : 'fa-plus'}`}
              />
            </div>
            <ComponentWrapper
              style={{
                visibility: `${visibleLink ? '' : 'hidden'}`
              }}
            >
              <span className="title title-link">Link Image: </span>
              <input
                type="text"
                className="name"
                value={img}
                onChange={(e) => actionsProfiles.handleInputChangeImg(e)}
              />
            </ComponentWrapper>
          </div>
          <ComponentWrapper>
            <span className="title">Nome: </span>
            <input
              type="text"
              className="name"
              value={name}
              onChange={(e) => actionsProfiles.handleInputChangeName(e)}
            />
          </ComponentWrapper>
          <ComponentWrapper>
            <span className="title">Usuário: </span>
            <input
              type="text"
              value={nickname}
              onChange={(e) => actionsProfiles.handleInputChangeNickname(e)}
            />
          </ComponentWrapper>
          <ComponentWrapper>
            <span className="title">E-mail: </span>
            <input
              type="email"
              className="email"
              value={email}
              onChange={(e) => actionsProfiles.handleInputChangeEmail(e)}
            />
          </ComponentWrapper>
          <ComponentWrapper>
            <span className="title">Data de Nascimento: </span>
            <input
              type="date"
              className="date"
              value={dateOfBirthday}
              onChange={(e) => actionsProfiles.handleInputChangeDate(e)}
            />
          </ComponentWrapper>
          <div style={{ display: 'flex' }}>
            <div
              className="button-save"
              onClick={() => {
                this.onClick();
                actionsProfiles.onSave(idProfileNote);
              }}
            >
              <ButtonSave />
            </div>
            <div
              className="button-cancel"
              onClick={() => {
                this.onClick();
                actionsProfiles.onCancel();
              }}
            >
              <ButtonCancel />
            </div>
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

export default Content;
