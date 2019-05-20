import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Restaurant from './pages/restaurant';

const Routes = ()  => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/restaurants/:id" component={Restaurant} />
        </Switch>
    </BrowserRouter>
);

export default Routes;