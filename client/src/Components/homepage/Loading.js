import React, { useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'; // what is usehistory
import userInfo from '../userinfo/userinfo';
export function Loading() {
  let history = useHistory();
  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const accesscode = params.get('code');
    async function request() {
      await Axios.get('/login/redirect', {
        params: {
          code: accesscode
        }
      }).then((res) => Cookies.set('chatToken', res.data.token));
      const { email } = await userInfo();
      Cookies.set('chatemail', email);
      history.push('/two');
      // history.push("/dashboard");
    }
    request();
  });
  return (
    <>
      <div className="loader"></div>
    </>
  );
}
