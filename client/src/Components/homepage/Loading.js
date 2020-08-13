import React, { useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
export function Loading() {
  let history = useHistory();
  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const accesscode = params.get("code");
    console.log(accesscode);
    async function request() {
      await Axios.get("http://localhost:5000/login/redirect", {
        params: {
          code: accesscode,
        },
      })
        .then((res) => Cookies.set("chatemail", res.data.email))
        .then(console.log("SUCCESS"));
      history.push("/dashboard");
    }
    request();
  });
  return (
    <>
      <div className="loader"></div>
    </>
  );
}
