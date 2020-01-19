export const RESET = 'RESET';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const changeText = (text) => text && ({
  type: CHANGE_TEXT,
  text,
});
