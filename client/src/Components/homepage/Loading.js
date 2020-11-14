import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'; // what is usehistory

export function Loading() {
  let history = useHistory();
  useEffect(() => {
    if (Cookies.get('chatToken')) {
      history.push('/dashboard');
    }
  });
  return (
    <>
      <div className="loader"></div>
    </>
  );
}
