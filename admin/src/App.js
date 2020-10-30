import React, { Fragment } from 'react';
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from './pages/admin/admin';
import Login from './pages/login/login';
import './App.css'
const App = () => (
  <Fragment className="App">
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Admin} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
