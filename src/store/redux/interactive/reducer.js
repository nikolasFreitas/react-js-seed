import {CHANGE_COUNTER, CHANGE_TEXT} from './actions';

const standart = {
  count: 0,
  text: 'Empty text',
};

export default (state = standart, action) => {
  let newState = {};

  switch (action.type) {
    case CHANGE_TEXT:
      newState = { text: action.text };
      break;
    
    case CHANGE_COUNTER:
      newState = { count: action.numb};
      break;

    default:
      break;
  }

  return {
    ...state,
    ...newState,
  };
};
