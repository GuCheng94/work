import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';//不用关心，单纯提高网页加载速度用的。

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
