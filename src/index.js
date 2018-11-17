import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

let model = { title: "gardening" };

function HomePage() {
    return <Home title={model.title} onClick={() => { model.title = model.title + '!'; render(); } } />;
}

function AboutPage() {
    return <div>All about gardening!</div>;
}

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </React.Fragment>
        </BrowserRouter>, document.getElementById('root'));
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
