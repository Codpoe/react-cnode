import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import model from './src/mobx/model.js';
import App from './src/components/App.js';
import Perf from 'react-addons-perf';

window.Perf = Perf;

ReactDom.render(
    <Provider model={model}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);

