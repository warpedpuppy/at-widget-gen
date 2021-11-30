import { SAVE_WIDGETS } from '../actions/actions';

function widgetApp(state = [], action) {
  switch (action.type) {
    case SAVE_WIDGETS:
      return [...state, action.value];
    default:
      return state;
  }
}

export default widgetApp;
