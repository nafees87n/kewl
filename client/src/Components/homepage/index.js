import React, { useState,useEffect } from 'react';
import { HomeNav } from './HomeNav';
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';
const client_key = process.env.REACT_APP_CLIENTID;
const currUrl=window.location.href;
const Homepage=()=>  {
  const [url,setUrl]=useState(`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&access_type=offline&response_type=code&redirect_uri=${currUrl}login/redirect&client_id=${client_key}`)
  useEffect(() => {
    if (Cookies.get('chatemail')){
      let email = Cookies.get('chatemail');
      setUrl(`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&access_type=offline&response_type=code&redirect_uri=${currUrl}login/redirect&login_hint=${email}&client_id=${client_key}`)
    }   
  },[]);
  function signin() {
    window.location.href = url;
  }
  
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
              <button className="googlebtn" onClick={signin}>
                <GoogleLogin className="googlebtn" />
              </button>
            </div>
          </div>
        </div>
      </>
    );

}

export default Homepage;
