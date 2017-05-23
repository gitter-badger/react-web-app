/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/App.jsx';

ReactDOM.render(<Welcome name="Sujay Kundu" />, document.getElementById('root'));