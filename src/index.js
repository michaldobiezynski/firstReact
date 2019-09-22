import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


const title = React.createElement(
    'h1',
    {id: 'main-title', title: 'This is a title.'},
    'My First React Element!'
);

ReactDOM.render(
    title,
    document.getElementById('root')

);

console.log(title);