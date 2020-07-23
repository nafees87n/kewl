import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { Card } from "reactstrap";
class One extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="#">LOGO</a>
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
              <a className="nav-item nav-link" to="#">First</a>
              <a className="nav-item nav-link" to="#">First</a>
              <a className="nav-item nav-link" to="#">First</a>
            </div>

          </div>
        </nav>
        <div className="container">
          <div className="row homerow">
            <div className="col-md-6 col-sm-12 order-md-1 order-2" id="homebg">
              <div className="card bg-dark">
                <img className="card-img" src="homepage.jpg"/>
              </div>
            </div>
            <div className="col-md-4 offset-md-2 col-sm-6 offset-sm-4 col-6 offset-4 order-md-2 order-1 align-self-center" id="loginbtn">
              <GoogleLogin/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default One;
