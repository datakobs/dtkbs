import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-has-image fixed-top bg-light">
  <div className="container">
  <a className="navbar-brand" href="#"> <img src="../images/datakobsbrandnav.png" height="30" alt="datakobsbrandnav" /> </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div id="navbarNavDropdown" className="navbar-collapse collapse">
    <ul className="navbar-nav mr-auto ml-5">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dienstleistungen
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Conversion Optimierung</a>
          <a className="dropdown-item" href="#">Zielgruppenanalysen</a>
          <a className="dropdown-item" href="#">Strategie & Roadmapping</a>
          <a className="dropdown-item" href="#">Analytics Integration</a>
          </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projekte</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Unternehmen</a>
      </li>
    </ul>
  </div>
  <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="{{ url('/register') }}">Kontakt</a>
      </li>
    </ul>
  </div>
  <div className="streifen"><div className="navdesc"></div></div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
