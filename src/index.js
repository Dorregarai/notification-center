import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './container/FormContainer/FormContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
        <FormContainer />
    </Provider>,
    document.getElementById('root')
);