import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './route'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Routes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
