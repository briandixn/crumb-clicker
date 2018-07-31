import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from './board';
import registerServiceWorker from './registerServiceWorker';
//////index.js has royal blue css attached to it. 
ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
