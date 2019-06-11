import React, { Component } from "react"
import classNames from "classnames/bind"
import Link from "gatsby-link"
import MobileMenu from "./mobilenav"
import style from "./navbar.module.scss"
import logo from "../images/logo.png"

const cx = classNames.bind(style)
export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobileActive: false,
    }
    this.handleBurger = this.handleBurger.bind(this)
    this.handleCloseNav = this.handleCloseNav.bind(this)
  }

  handleBurger() {
    const { isMobileActive } = this.state
    this.setState({
      isMobileActive: !isMobileActive,
    })
  }

  handleCloseNav() {
    this.setState({
      isMobileActive: false,
    })
  }

  render() {
    const { isMobileActive } = this.state
    return (
      <div className={cx("main-nav")}>
        <div className="container main-nav-content">
          <div className="row">
            <div className={cx("brand-section")}>
              <a href="/">
                {/* <img alt="Xinglie" height="98px" src={logo} /> */}
              </a>
            </div>
            <div className={cx("menu-list-section")}>
              <ul id="mainMenu" className={cx("menu-list")}>
                <li>
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/service">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/guides">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  {/* <ul className={`${cx('submenu')}`}>
                    <li>
                      <Link className="nav-link" to="/terms">
                        Regulations
                      </Link>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className={cx("burger-section")}>
              <button
                type="button"
                onClick={this.handleBurger}
                className={cx("burger-wrapper", { active: isMobileActive })}
              >
                <i className={`fas fa-bars ${cx("burger-button")}`} />
              </button>
            </div>
          </div>
          <div className={`row ${cx("mobile-nav-row")}`}>
            <ul className={cx("mobile-nav", { show: isMobileActive })}>
              <MobileMenu
                onCloseNav={this.handleCloseNav}
                title="home"
                url="/"
              />
              <MobileMenu
                onCloseNav={this.handleCloseNav}
                title="services"
                url="/service"
              />
              <MobileMenu
                onCloseNav={this.handleCloseNav}
                title="guides"
                url="/guides"
              >
                {/* <ul className={cx('mobile-submenu')}>
                  <MobileMenu onCloseNav={this.handleCloseNav} title="About us" url="/about" />
                  <MobileMenu onCloseNav={this.handleCloseNav} title="Regulations" url="/terms" />
                </ul> */}
              </MobileMenu>

              <MobileMenu
                onCloseNav={this.handleCloseNav}
                title="contacts"
                url="/contact"
              />
              <MobileMenu
                onCloseNav={this.handleCloseNav}
                title="About"
                url="/About"
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
