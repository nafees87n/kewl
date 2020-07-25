import React, { Component } from "react";
import { HomeNav } from "./HomeNav";
import { GoogleLogin } from "react-google-login";
const data = { ex: "HI" };
class Homepage extends Component {
  responseGoogle(response) {
    // console.log(response);
    // console.log(response.profileObj);
    fetch("http://localhost:5000/goo", {
      method: "POST",
      headers:{'Content-type':'application/json'},
      body: JSON.stringify(response),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  test() {
    fetch("http://localhost:5000/foo")
    .then((res)=>res.json())
    .then(console.log)
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
                clientId="663571945289-n5o7daalove9ka7rrdu1k6fd9k5heu1d.apps.googleusercontent.com"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <button onClick={this.test}>Try</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
