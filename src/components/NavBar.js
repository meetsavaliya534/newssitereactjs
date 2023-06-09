import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country
                </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/general/us">US</Link></li>
                <li><Link className="dropdown-item" to="/general/uk">UK</Link></li>
                <li><Link className="dropdown-item" to="/general/cn">China</Link></li>
                <li><Link className="dropdown-item" to="/general/ru">Russia</Link></li>
                <li><Link className="dropdown-item" to="/general/ua">Ukraine</Link></li>
                <li><Link className="dropdown-item" to="/general/de">Germany</Link></li>
                <li><Link className="dropdown-item" to="/general/jp">Japan</Link></li>
                <li><Link className="dropdown-item" to="/general/au">Australia</Link></li>
                <li><Link className="dropdown-item" to="/general/it">Italy</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
