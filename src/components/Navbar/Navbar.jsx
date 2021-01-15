import React, { Component } from "react";

import logo from "../../assets/img/logo/xpolar_logo.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
       
        <a className="navbar-brand col-md-3 col-lg-2 me-0  mb-1 m text-center" href="#">
          <img src={logo}  ></img>
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="d-flex justify-content-end">
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link text-light font-weight-bold" href="#">
                Rauf Dimaampao
              </a>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
