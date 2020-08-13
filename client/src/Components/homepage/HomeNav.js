import React, { Component } from "react";
export function HomeNav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand" style={{ color: "white" }} to="#">
        LOGO
      </a>
      <button
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
          <a className="nav-item nav-link" to="#">
            First
          </a>
          <a className="nav-item nav-link" to="#">
            First
          </a>
          <a className="nav-item nav-link" to="#">
            First
          </a>
        </div>
      </div>
    </nav>
  );
}
