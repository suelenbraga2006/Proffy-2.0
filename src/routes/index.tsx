import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import SignUpSuccess from '../pages/SignUpSuccess';
import ForgotSuccess from '../pages/ForgotSuccess';
import Dashboard from '../pages/Dashboard';
import Forgot from '../pages/Forgot';

import Route from './Route';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/signupsuccess" component={SignUpSuccess} />
            <Route path="/forgotsuccess" component={ForgotSuccess} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    </BrowserRouter>
)

export default Routes;