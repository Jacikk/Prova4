import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from './services/auth.js';

import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/SignUp" component= {SignUp} />
            <Route path="/SignIn" component= {SignIn} />
            <Route path="/Perfil" component= {Perfil} />

            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;