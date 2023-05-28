import React from 'react';
// import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded fixed-top">
        <a className="btn btn-link navbar-brand" href="https://www.google.com">
          Hope Soaps
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="btn btn-link nav-link" href="https://www.google.com">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-link nav-link"
                href="https://www.google.com"
              >
                Soaps
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-link nav-link"
                href="https://www.google.com"
              >
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-link nav-link"
                href="https://www.google.com"
              >
                Knowledge
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-link nav-link"
                href="https://www.google.com"
              >
                Definitions
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;