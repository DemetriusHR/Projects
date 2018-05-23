import React from "react";
import FooterWrapper from "./Footer.Style";

class Footer extends React.Component {
  render() {
    return <FooterWrapper>{this.props.children}</FooterWrapper>;
  }
}

export default Footer;
