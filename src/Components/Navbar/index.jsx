import { Link } from "react-router-dom";
import React from "react";
import PropTypes from 'prop-types'
const Navbar = ({ authuser }) => {
  //authuser = false
  return (
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
      <div className="container">
        <div className="topbar-left">
          <button className="topbar-toggler">☰</button>
          <Link className="topbar-brand" to="/">
            <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
            <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
          </Link>
        </div>
        <div className="topbar-right">
          <ul className="topbar-nav nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="index.html">Home</a> */}

              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="create-article.html">Write new article</a> */}
              <Link className="nav-link" to="/articles/create">Write new article</Link>
            </li>
            {
              console.log(authuser)
            }

              {
              authuser &&
              <li className="nav-item">
              <a className="nav-link">Hey {authuser.user.name}                
              
                  <i className="fa fa-caret-down" />
              </a>
              <div className="nav-submenu">
                <a className="nav-link" href="page-login.html">My articles</a>
                <a className="nav-link" href="true">Logout</a>
              </div>
            </li>
            }
            {
              
              !authuser &&
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            }
            {
              !authuser &&
              <li className="nav-item">
                <Link className="nav-link" to="/register">Signup</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>

  )
}
Navbar.propTypes = {
  authuser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }),
};

Navbar.defaultProps = {
  authuser: null,
};

export default Navbar;