import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import CareerContainer from './containers/CareerContainer'

export default () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={CareerContainer} />
        <Route exact path='/about' render={() => <h1>This is my about page. There are many like it, but this one is mine.</h1>}/>
      </Switch>
    </div>
  );
}
