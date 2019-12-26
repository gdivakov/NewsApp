import React from 'react';
import store from './config/configStore';
import {Provider} from 'react-redux';
import Navigation from './navigation';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
