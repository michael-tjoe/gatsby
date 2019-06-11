import React, { Component } from "react"
import Link from "gatsby-link"
import classNames from "classnames/bind"
import style from "./mobilenav.module.scss"

const cx = classNames.bind(style)
export default class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showChildMenu: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { showChildMenu } = this.state
    this.setState({
      showChildMenu: !showChildMenu,
    })
  }

  render() {
    const { children, title, url, onCloseNav } = this.props
    const { showChildMenu } = this.state
    if (children) {
      return (
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${cx("parent-submenu")}`}
            onClick={this.handleClick}
          >
            <p>{title}</p>
            <span className={cx("nav-accordion", { active: showChildMenu })}>
              <i className="fas fa-angle-right" />
            </span>
          </button>
          <div className={cx("child-menu", { active: showChildMenu })}>
            {children}
          </div>
        </li>
      )
    }
    return (
      <li className="nav-item">
        <Link onClick={onCloseNav} className="nav-link" to={url}>
          {title}
        </Link>
      </li>
    )
  }
}
