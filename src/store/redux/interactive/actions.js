export const RESET = 'RESET';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const change_text = text => text && ({
    type: CHANGE_TEXT,
    text
})
