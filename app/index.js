import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import assetService from './services/assetService';

import Root from './containers/Root';
import reducers from './reducers';

const store = createStore(reducers,{}, applyMiddleware(assetService))

render(
    <Root store={store} />,
    document.getElementById('root')
);

store.dispatch({type: 'GET_STATUS'})