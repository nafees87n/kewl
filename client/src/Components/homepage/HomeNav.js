import React from 'react';
import { Link } from 'react-router-dom';
export function HomeNav() {
  return (
    <nav className="navbar navbar-dark" style={{backgroundColor:'#dc004e'}}>
      <Link className="navbar-brand" style={{ color: 'white' }} to="#">
        {'Kewl-> A Discussion Forum'}
      </Link>
      {/* <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" to="#">
            First
          </Link>
          <Link className="nav-item nav-link" to="#">
            First
          </Link>
          <Link className="nav-item nav-link" to="#">
            First
          </Link>
        </div>
      </div> */}
    </nav>
  );
}
