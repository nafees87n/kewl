import React, { Component } from "react";
import { HomeNav } from "./HomeNav";
import { GoogleLogin } from "react-google-login";
import { Redirect } from "react-router-dom";
import keys from '../keys/keys'
let headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("GET", "POST", "OPTIONS");
class Homepage extends Component {
  constructor(props){
    super(props);
    this.state  ={
      clicked:false
    }
    this.test=this.test.bind(this)
  }
  responseGoogle(response) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      // headers: { "Content-type": "application/json" },
      headers:headers,
      body: JSON.stringify({token:`${response.tokenId}`}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("wapas ", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  test() {
    console.log("clicked");
    this.setState({clicked:true})
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
              <GoogleLogin
                clientId={keys.CLIENTID}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <button onClick={this.test}>
                {this.state.clicked ? <Redirect clicked to="/dashboard"/>:
                  <p>Try</p>
                }  
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
