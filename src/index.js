import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./container/FormContainer/FormContainer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <FormContainer />
    </Provider>,
    document.getElementById('root')
);