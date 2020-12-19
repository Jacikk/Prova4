import React, { Component } from 'react';
import Routes from './routes.js'

export default class App extends Component {
  static displayName = 'Even Better Events';

  render () {
    return (
        <Routes />
    );
  }
}
