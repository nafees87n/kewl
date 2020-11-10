import React, { useState, useEffect } from 'react';
import { HomeNav } from './HomeNav';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
const Homepage = () => {
  let history = useHistory();
  async function responseGoogle(data) {
    await Axios.post('/login/google', { tokenId: data.tokenId }).then((res) => console.log(res));
    history.push('/dashboard');
  }
  function failure() {
    history.push('/');
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
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENTID}
              className="googlebtn"
              loginHint={Cookies.get('chatemail')}
              onSuccess={responseGoogle}
              onFailure={failure}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
