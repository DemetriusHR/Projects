import React from "react";
import HeaderWrapper from "./Header.Style";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    };
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  render() {
    let searchInputClasses = ["searchInput"];

    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }
    return (
      <HeaderWrapper>
        <div className="menuIcon">
          <div className="dashTop" />
          <div className="dashBottom" />
          <div className="circle" />
        </div>
        <span className="title"> {this.props.title} </span>
        <input
          type="text"
          className={searchInputClasses.join(" ")}
          placeholder="Pesquisar..."
        />
        <div
          className="fa fa-search searchIcon"
          onClick={this.showSearch.bind(this)}
        />
      </HeaderWrapper>
    );
  }
}

export default Header;
