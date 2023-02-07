import React, { useState } from 'react'
import propTypes from 'prop-types'

function Navbar(props) {
  
  

  return (
    <div style={props.mode}>
      <nav  className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" style={props.mode} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link active" style={props.mode}  aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" style={props.mode}  href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={props.mode} >
                  Dropdown
                </a>
                <ul className="dropdown-menu" style={props.mode} >
                  <li><a className="dropdown-item" href="/" style={props.mode} >Action</a></li>
                  <li><a className="dropdown-item" href="/" style={props.mode} >Another action</a></li>
                  <li><hr
                    className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/" style={props.mode} >Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link disabled" style={props.mode} >{props.name}</a>
              </li>
            </ul>
            <button className='btn mx-4' onClick={props.changeMode} style={{fontSize: "23px", padding: "0px"}} title="Change Mode">{props.text}</button>
            <form className="d-flex" role="search">
              <input className="form-control me-2" style={props.mode} type="search" placeholder="Search" name
              ='query' aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string
}
Navbar.defaultProps = {
  title: "Navbar",
  name: "Disable"
}