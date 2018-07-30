import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from './board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
