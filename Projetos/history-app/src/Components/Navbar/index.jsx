import React from 'react';

import { NavbarWrapper, ComponentWrapper, PicturePerfil } from './NavbarStyle';
import DropDown from './DropDown';
import { LanguageContext } from '../../Context';

class Navbar extends React.PureComponent {
  static contextType = LanguageContext;

  state = {
    visible: false
  };

  onChange = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible
    });
  };

  render() {
    const { visible } = this.state;
    const {
      dataBase: { title }
    } = this.context;

    return (
      <NavbarWrapper>
        <ComponentWrapper className="dont-select">
          <PicturePerfil
            img="https://cdn-images-1.medium.com/fit/c/32/32/1*dmbNkD5D-u45r44go_cf0g.png"
            onClick={() => this.onChange()}
          />
          <div style={{ display: `${visible ? '' : 'none'}` }}>
            <DropDown />
          </div>
          <span
            className="title-component"
            onClick={() => window.scrollTo(0, 0)}
          >
            {title}
          </span>
        </ComponentWrapper>
      </NavbarWrapper>
    );
  }
}

export default Navbar;
