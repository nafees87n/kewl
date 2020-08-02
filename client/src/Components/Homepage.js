import React, { Component } from "react";
import { HomeNav } from "./HomeNav";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";
import keys from "../keys/keys";
const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&access_type=offline&response_type=code&redirect_uri=http://localhost:5000/login/redirect&prompt=consent&client_id=${keys.CLIENTID}`;
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.test = this.test.bind(this);
  }
  render() {
    return (
      <>
        <HomeNav />
        <div className="container">
          <div className="row homerow">
            <div className="col-md-6 col-sm-12 order-md-1 order-2" id="homebg">
              <div className="card bg-dark">
                <img className="card-img" src="homepage.jpg" />
              </div>
            </div>
            <div
              className="col-md-4 offset-md-2 col-sm-6 offset-sm-4 col-6 offset-4 order-md-2 order-1 align-self-center"
              id="loginbtn"
            >
              <a className="googlebtn" href={url}>
                <GoogleLogin className="googlebtn" />
              </a>
              {/* <a href={url} >
                {this.state.clicked ? (
                  <Redirect clicked to="/dashboard" />
                ) : (
                  <p>Try</p>
                )}
              </a> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
