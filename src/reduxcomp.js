import React from 'react';
import { render } from 'react-dom';
import UserData from './userdata'
import Result from './index'
import { Provider } from 'react-redux'
import store from './store'

render(<Provider store={store}>
  <Result />
</Provider>, document.getElementById("root"));

