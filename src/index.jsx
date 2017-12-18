/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root,
);

if (module.hot) module.hot.accept(App, () => render(App));
