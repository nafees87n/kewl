import React, { Component } from 'react';
import { HomeNav } from './HomeNav';
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';
const client_key = process.env.REACT_APP_CLIENTID;
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&access_type=offline&response_type=code&redirect_uri=http://localhost:3000/login/redirect&client_id=${client_key}`
    };
    this.signin = this.signin.bind(this);
  }
  componentDidMount() {
    if (Cookies.get('chatemail')) {
      let email = Cookies.get('chatemail');
      this.setState({
        url: `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&access_type=offline&response_type=code&redirect_uri=http://localhost:3000/login/redirect&login_hint=${email}&client_id=${client_key}`
      });
    }
  }
  signin() {
    window.location.href = this.state.url;
  }
  render() {
    return (
      <>
        <HomeNav />
        <div className="container">
          <div className="row homerow">
            <div className="col-md-6 col-sm-12 order-md-1 order-2" id="homebg">
              <div className="card bg-dark">
                <img className="card-img" src="homepage.jpg" alt="home_image" />
              </div>
            </div>
            <div
              className="col-md-4 offset-md-2 col-sm-6 offset-sm-4 col-6 offset-4 order-md-2 order-1 align-self-center"
              id="loginbtn"
            >
              <button className="googlebtn" onClick={this.signin}>
                <GoogleLogin className="googlebtn" />
                {/* <Redirect to='/dashboard'/> */}
              </button>
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
