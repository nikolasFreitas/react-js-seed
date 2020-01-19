export const RESET = 'RESET';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_COUNTER = 'CHANGE_COUNTER';

export const changeText = (text) => text && ({
  type: CHANGE_TEXT,
  text,
});

export const changeCounter = (numb) => numb && ({
  type: CHANGE_COUNTER,
  numb
})
