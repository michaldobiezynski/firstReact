import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


const title = <h1>My First React Element</h1>;
const desc = <p>I just learned how to create a React node and Render
     it into the DOM.</p>;

const header = (
    <header>
        <h1> My First React Element</h1>
        <p>I just learned how to create a React node and Render
            it into the DOM.</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')

);

