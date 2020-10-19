import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default class ProtectedRoute extends Component {
  render() {
    const Comp = this.props.component;
    let isAuth = () => {
      if (Cookies.get('chatemail')) return true;
      return false;
    };
    // let isAuth=true;
    return isAuth() ? <Comp /> : <Redirect to={{ pathname: '/' }} />;
  }
}
