import React, { Component } from "react";

import "./App.scss";
import Content from "./Content/Content";
import Divider from "./Divider/Divider";
import NavTools from "./NavTools/NavTools";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar: false
    };
  }

  onClickNavbar = () => {
    this.setState({
      navbar: true
    });
  };

  onClickBody = () => {
    this.setState({
      navbar: false
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.onClickBody}>
          <h1 className="App-title dont-select">Title</h1>
        </header>
        <div className="fa fa-navicon nav-icon" onClick={this.onClickNavbar} />
        <div className={`navbar ${this.state.navbar ? "" : "navbar-disable"}`}>
          <div className="search">
            <div className="fa fa-search search-icon" />
            <input
              type="text"
              className="input-search"
              placeholder="Pesquisar..."
            />
          </div>
          <div className="navbar-components">
            <div className="child-component">
              <div className="title-component dont-select">
                Title of Component
              </div>
              <Content text="Component 1" />
              <Content text="Component 2" />
              <Content text="Component 3" />
              <Content text="Component 4" />
            </div>

            <div className="child-component">
              <div className="title-component">Title of Component</div>
              <Content text="Component 1" />
              <Content text="Component 2" />
              <Content text="Component 3" />
              <Content text="Component 4" />
            </div>

            <div className="child-component">
              <div className="title-component">Title of Component</div>
              <Content text="Component 1" />
              <Content text="Component 2" />
              <Content text="Component 3" />
              <Content text="Component 4" />
            </div>
          </div>
        </div>
        <div className="content" onClick={this.onClickBody}>
          <div className="card">
            <div className="card-content">
              <img
                src="https://cdn-images-1.medium.com/max/2000/1*ag4zkMJAJN0bvCR3z0uMYQ.jpeg"
                alt="predios"
                className="card-img"
              />
              <div className="card-title">
                <span style={{ paddingLeft: "11px" }}>Title Card</span>
              </div>
              <div className="card-description">
                <span style={{ paddingLeft: "11px" }}>
                  You should not assume that everyone knows lodash and
                  underscore.
                </span>
              </div>
              <div className="card-buy">
                <div className="card-price">
                  <span className="price">$17</span> per person*
                </div>
                <div className="card-avaliacao">
                  <div>
                    <span className="stars dont-select">
                      <span className="fa fa-star first-star" />{" "}
                      <span className="fa fa-star" />{" "}
                      <span className="fa fa-star" />{" "}
                      <span className="fa fa-star" />{" "}
                      <span className="fa fa-star" />{" "}
                    </span>
                    <span className="cont-reviews"> 28 reviews</span>
                  </div>
                </div>
                <div className="card-considerations">
                  <span className="consideration">
                    *Price may vary depending on selected date.
                  </span>
                </div>
                <div className="card-button dont-select">Book Now</div>
              </div>
            </div>
          </div>

          <Divider />

          <div className="login">
            <div className="login-context">
              <div className="login-header"> Sign In </div>
              <div className="login-inputs">
                <input
                  type="text"
                  className="login-input margin-plus"
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="login-input"
                  placeholder="Password"
                />
              </div>
              <div className="login-considerations">
                <div className="login-remember">
                  <label className="container dont-select">
                    Remember me
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <div className="login-password dont-select">
                    <span>Forgot Password</span>
                  </div>
                </div>
              </div>
              <div className="login-button dont-select">Sign In</div>
            </div>
          </div>

          <Divider />

          <div className="login">
            <div className="contact-context">
              <div className="contact-header">Contacts</div>
              <div className="contact-search">
                <div className="fa fa-search color-search" />{" "}
                <input
                  type="text"
                  placeholder="Search your Contacts"
                  className="input-contact"
                />
              </div>
              <div className="contact-content dont-select">
                <div className="contact-line">
                  <li className="status-on">
                    <span className="contact-color">Name 1</span>{" "}
                    <div className="contact-description">Member</div>
                  </li>
                </div>
                <div className="contact-line">
                  <li className="status-on">
                    <span className="contact-color">Name 2</span>{" "}
                    <div className="contact-description">Member</div>
                  </li>
                </div>
                <div className="contact-line">
                  <li className="status-off">
                    <span className="contact-color">Name 3</span>{" "}
                    <div className="contact-description">Member</div>
                  </li>
                </div>
                <div className="contact-line">
                  <li className="status-off">
                    <span className="contact-color">Name 4</span>{" "}
                    <div className="contact-description">Member</div>
                  </li>
                </div>
                <div className="contact-line">
                  <li className="status-off">
                    <span className="contact-color">Name 5</span>{" "}
                    <div className="contact-description">Member</div>
                  </li>
                </div>
              </div>
              <div className="contact-bottom">
                <div className="buttons">
                  <div className="button-cancel dont-select">Cancel</div>
                  <div className="button-invite dont-select">Invite</div>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div className="login">
            <div className="alert-context">
              <div className="alert-header">
                Welcome the space on the page!{" "}
                <span className="fa fa-close alert-close" />
              </div>
              <div className="alert-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </div>
              <div className="alert-bottom">
                <span className="alert-buttons">
                  <div className="button-learn dont-select">Learn More</div>
                  <div className="button-started dont-select">Get Started</div>
                </span>
              </div>
            </div>
          </div>

          <Divider />

          <div className="square">
            <div className="square-content">
              <div className="square-title">Powerful Features</div>
              <div className="square-context">
                <div className="square-line">
                  <div className="fa fa-envelope-o square-icon" />{" "}
                  <div className="line-context">
                    <div className="line-title">Embeddable Forms</div> <br />
                    <div className="line-description">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </div>
                  </div>
                </div>
                <div className="square-line">
                  <div className="fa fa-bullhorn square-icon" />{" "}
                  <div className="line-context">
                    <div className="line-title">Broadcast Annoucements</div>{" "}
                    <br />
                    <div className="line-description">
                      Aliquam eget odio sed ligula iaculis consequat at eget
                      orci.
                    </div>
                  </div>
                </div>
                <div className="square-line">
                  <div className="fa fa-signal square-icon" />{" "}
                  <div className="line-context">
                    <div className="line-title">Advanced Reporting</div> <br />
                    <div className="line-description">
                      Sed nec felis pellentesque, lacinia dui sed, ultricies
                      sapien. Pellentesque orci lectus.
                    </div>
                  </div>
                </div>
                <div className="square-line">
                  <div className="fa fa-bitbucket square-icon__bit" />{" "}
                  <div className="line-context">
                    <div className="line-title">Automations</div> <br />
                    <div className="line-description">
                      Mauris non tempor quam, et lacinia sapien, sed nec felis
                      pellentesque.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div className="sale">
            <div className="sale-card" style={{ marginRight: "20px" }}>
              <div className="sale-header">Freelancer</div>
              <div className="sale-subheader">
                Aliquam eget odio sed ligula iaculis consequat at eget orci.
              </div>
              <div className="sale-price">
                <div className="price-style">
                  $12 <span className="price-description">/ mo.</span>
                </div>
                <div className="price-consideration">
                  <span className="consideration-bold">Billed annually</span> or
                  $14 mountly.
                </div>
              </div>
              <div className="sale-description">
                <span>
                  <span className="consideration-bold">1</span> User
                </span>{" "}
                <br />
                <span>
                  <span className="consideration-bold">5</span> Projects
                </span>{" "}
                <br />
                <span>Download prototypes</span> <br />
                <span>Password protected prototypes</span>
              </div>
              <div className="sale-button dont-select">Get Started</div>
            </div>

            <div
              className="sale-card"
              style={{ borderTopColor: "rgb(122, 0, 255)" }}
            >
              <div className="sale-header">Startup</div>
              <div className="sale-subheader">
                Aliquam eget odio sed ligula iaculis consequat at eget orci.
              </div>
              <div className="sale-price">
                <div className="price-style">
                  $24 <span className="price-description">/ mo.</span>
                </div>
                <div className="price-consideration">
                  <span className="consideration-bold">Billed annually</span> or
                  $28 mountly.
                </div>
              </div>
              <div className="sale-description">
                <span>
                  <span className="consideration-bold">10</span> User
                </span>
                <br />
                <span>
                  <span className="consideration-bold">Unlimited</span> Projects
                </span>
                <br />
                <span>
                  <span className="consideration-bold">Annotate</span>{" "}
                  prototypes
                </span>
                <br />
                <span>Download advanced prototypes</span> <br />
                <span>Password protected prototypes</span>
              </div>
              <div
                className="sale-button dont-select"
                style={{ marginTop: "25px" }}
              >
                Get Started
              </div>
            </div>
          </div>

          <Divider />

          <div className="information">
            <div className="information-content">
              <div className="information-header">
                <div className="icon-attention" />
                <div className="text-header">Work in progress!</div>
              </div>
              <div className="information-definition">
                More detailed informations is coming soon.
              </div>
            </div>
          </div>

          <Divider />

          <NavTools />

          <Divider />

          <div className="sell">
            <div className="sell-card">
              <div>
                <img
                  src="https://cdn-images-1.medium.com/max/2000/1*n640CHGe2WMO5lFFhVMeqw.jpeg"
                  alt="ilustration of sell"
                  className="sell-header"
                />
              </div>
              <div className="sell-subheader">
                <div className="subheader-text">Living Room Chair</div>
                <div className="subheader-buttom dont-select">View Stats</div>
              </div>
              <div className="sell-price">$250.00</div>
              <div className="sell-description">
                Mauris non tempor quam, et lacinia sapien, sed nec felis
                pellentesque.
              </div>
              <div className="sell-moment">
                Posted 12 hrs ago{" "}
                <span className="sell-moment__city">Kitchener, ON </span>
              </div>
              <div className="sell-buttons">
                <div className="button-listing dont-select">Manage Listing</div>
                <div className="button-unpublish dont-select">Unpublish</div>
              </div>
            </div>
          </div>

          <Divider />

          <p className="App-intro">
            You can concatenate two transitions or more.{" "}
            <span className="icon-copyright">©</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
