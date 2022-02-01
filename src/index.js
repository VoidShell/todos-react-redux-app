import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import rootReducer from "./modules";
import {Provider} from "react-redux";
import App from "./App";
import {composeWithDevTools} from "redux-devtools-extension";

const state = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById('root')
);
