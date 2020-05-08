import React from 'react';
import Header from './Components/Header'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'
import AccountInfo from './Pages/Account/AccountInfo'
import View from './Pages/View/View'
import Edit from './Pages/Edit/Edit'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './Helper/PrivateRoute'

var routers = {
  login: '/Login',
  register: '/Register',
  home: '/Home',
  create: '/Create',
  account: '/Account/:id',
  view: '/View/:id',
  edit: '/Edit/:id'
}

function App() {
  return (
    <div>
      <div className="container">
        <Switch>
          <Redirect exact from="/" to={ routers.login }></Redirect>
          <Route exact path={ routers.login } component={ Login }></Route>
          <Route exact path={ routers.register } component={ Register }></Route>
        </Switch>
      </div>
      <div>
        <PrivateRoute exact path={ routers.home } component={ Home }></PrivateRoute>
        <PrivateRoute exact path={ routers.create } component={ Create }></PrivateRoute>
        <PrivateRoute exact path={ routers.account } component={ AccountInfo }></PrivateRoute>
        <PrivateRoute exact path={ routers.view } component={ View }></PrivateRoute>
        <PrivateRoute exact path={ routers.edit } component={Edit}></PrivateRoute>
      </div>
    </div>
  );
}

export default App;
