const standart = {
  count: 0,
  text: 'Empty text',
};

export default (state = standart, action) => {
  let newState = {};

  switch (action.type) {
    case 'ff':
      newState = { newState: action.text };
      break;

    default:
      break;
  }

  return {
    ...state,
    ...newState,
  };
};
