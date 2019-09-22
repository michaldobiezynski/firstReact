import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

const myTitleID = 'main-title';
const name = 'Michal';

const title = <h1 id={myTitleID}>My First React Element</h1>;
const desc = <p>I just learned how to create a React node and Render
     it into the DOM.</p>;

const header = (
    <header>
        <h1>{name}'s First React Element!</h1>
        {desc}
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')

);

