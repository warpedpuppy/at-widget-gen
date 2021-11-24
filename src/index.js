import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WidgetList from './WidgetList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import widgetApp from './reducers/reducers';
const store = createStore(widgetApp);

ReactDOM.render(
  <Provider store={store}>
    <WidgetList />
  </Provider>,
  document.getElementById('root')
);
