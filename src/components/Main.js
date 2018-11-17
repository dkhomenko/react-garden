import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
        </Switch>
    </main>
)

export default Main;