import { SAVE_WIDGETS } from '../actions/actions';
import { combineReducers } from 'redux'; 

function widgets(state = [], action) {
  switch (action.type) {
    case SAVE_WIDGETS:
      return [...state, action.value];
    default:
      return state;
  }
}

const widgetApp = combineReducers({
    widgets
});

export default widgetApp;
