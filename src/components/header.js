import React from "react"
import classNames from "classnames/bind"
import style from "./header.module.scss"

const cx = classNames.bind(style)

const Header = () => {
  return (
    <div className={cx("header")}>
      <div className="container">
        <div className={`row ${cx("header-row")}`}>
          <div className={cx("header-socialMedia")}>
            <ul className={cx("nav")}>
              <li className={cx("nav-item")}>
                <a
                  className={cx("nav-link")}
                  href="https://www.facebook.com/xingliecargo"
                >
                  facebook
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className={cx("nav-item")}>
                <a
                  className={cx("nav-link")}
                  href="https://www.facebook.com/xingliecargo"
                >
                  <i className="fab fa-instagram" />
                  instagram
                </a>
              </li>
              <li className={cx("nav-item")}>
                <a
                  className={cx("nav-link")}
                  href="https://www.facebook.com/xingliecargo"
                >
                  <i className="fab fa-youtube" />
                  youtube channel
                </a>
              </li>
            </ul>
          </div>
          <div className={cx("header-address")}>
            <p>
              <i className="fas fa-map-marker-alt" />
              &nbsp;Terusan Bandengan, North Jakarta, Indonesia 14450
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
