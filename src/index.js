import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import { Provider } from 'react-redux';

import './index.css';

import configureStore from './store/configureStore';

const store = configureStore();
const rootEl = document.getElementById('root');

let render = () => {
  const App = require('./App').default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

if (module.hot) {
  const renderApp = render;
  const renderError = (error) => {
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    );
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      console.error(error);
      renderError();
    }
  };

  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}

render();
