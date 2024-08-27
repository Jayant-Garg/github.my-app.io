import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (<nav className={`px-3 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="#">Brand</a>
    {/* <Link className="navbar-brand" to="#home">Brand</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">{props.dd1}</a>
          {/* <Link className="nav-link" to="/home">{props.dd1}</Link> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.dd2}</a>
          <Link className="nav-link" to="/about">{props.dd2}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Us</a>
          <Link className="nav-link" to="#contact">Contact Us</Link>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
  dd1: PropTypes.string.isRequired,
  dd2: PropTypes.string.isRequired
}










