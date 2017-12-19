import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Container from './components/Container';
import './styles/styles.scss';


const App = () => (
  <Provider store={store} >
    <Container />
  </Provider>
);

export default App;
