import React from 'react';
import {Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import IndecisionApp from '../components/IndecisionApp';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={IndecisionApp} exact={true}/>
                <PublicRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;