import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import ItemsPage from './items/ItemsPage';
import ManageItemPage from './items/ManageItemPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/item/:id' component={ManageItemPage}/>
            <Route path='/item' component={ManageItemPage}/>
            <Route path='/items' component={ItemsPage}/>
        </Switch>
    </main>
)

export default Main;