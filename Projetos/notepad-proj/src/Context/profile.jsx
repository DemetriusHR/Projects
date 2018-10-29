import React from 'react';

import { dateBirthdayConvert } from '../Utils/date';
import dataFileProfile from './jsons/dataProfile.json';

export const ProfileContext = React.createContext();

export default class ProfileProvider extends React.Component {
  state = {
    profiles: dataFileProfile.profiles,
    actionsProfiles: {
      handleInputChangeName: (e) => this.handleInputChangeName(e),
      handleInputChangeNickname: (e) => this.handleInputChangeNickname(e),
      handleInputChangeDate: (e) => this.handleInputChangeDate(e),
      handleInputChangeEmail: (e) => this.handleInputChangeEmail(e),
      handleInputChangeImg: (e) => this.handleInputChangeImg(e),
      onSave: (id) => this.onSave(id),
      onCancel: () => this.onCancel()
    },
    img: '',
    name: '',
    nickname: '',
    dateOfBirthday: '',
    email: ''
  };

  handleInputChangeName = (event) => {
    const text = event.target.value;

    this.setState({
      name: text
    });
  };

  handleInputChangeNickname = (event) => {
    const text = event.target.value;

    this.setState({
      nickname: text
    });
  };

  handleInputChangeDate = (event) => {
    const text = event.target.value;

    this.setState({
      dateOfBirthday: text
    });
  };

  handleInputChangeEmail = (event) => {
    const text = event.target.value;

    this.setState({
      email: text
    });
  };

  handleInputChangeImg = (event) => {
    const text = event.target.value;

    this.setState({
      img: text
    });
  };

  onSave = (id) => {
    const { profiles, dateOfBirthday, img, name, nickname, email } = this.state; // eslint-disable-line
    const arrayChange = [...profiles];
    const dateBirthday = dateBirthdayConvert(dateOfBirthday);

    arrayChange[id] = {
      id,
      img: img !== '' ? img : arrayChange[id].img,
      name: name !== '' ? name : arrayChange[id].name,
      nickname: nickname !== '' ? nickname : arrayChange[id].nickname,
      dateOfBirthday:
        dateOfBirthday !== '' ? dateBirthday : arrayChange[id].dateOfBirthday,
      email: email !== '' ? email : arrayChange[id].email
    };

    this.setState({
      profiles: arrayChange
    });

    this.onCancel();
  };

  onCancel = () => {
    this.setState({
      img: '',
      name: '',
      nickname: '',
      dateOfBirthday: '',
      email: ''
    });
  };

  render() {
    const { children } = this.props;
    return (
      <ProfileContext.Provider value={{ ...this.state }}>
        {children}
      </ProfileContext.Provider>
    );
  }
}

const ProfileConsumer = ProfileContext.Consumer;

export function contextProfileWrapper(WrappedComponent) {
  return function Wrapper(props) {
    return (
      <ProfileConsumer>
        {(context) => <WrappedComponent {...props} {...context} />}
      </ProfileConsumer>
    );
  };
}
