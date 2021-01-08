import { TEXT_CHANGED } from './actionTypes';

const initialState = {
  chars: 0,
  words: 0,
  sentences: 0,
  paragraphs: 0
};

export const textReducer = (state = initialState, action: { type: string, payload: { text: string } }) => {
  if (action.type === TEXT_CHANGED) {
    // const chars = action.payload.text.replace(/\r?\n|\r|\t/g, '').length;
    // const words = action.payload.text.split(/\s+/g).length;
    // const sentences = (action.payload.text.match(/\.(\s)+./g) || [1]).length;
    const paragraphs = 0;

    return {
      ...state,
      chars: action.payload.text.replace(/\r?\n|\r|\t/g, '').length,
      words: action.payload.text.split(/\s+/g).length,
      sentences: (action.payload.text.match(/\.(\s)+./g) || [1]).length
    };
  } else {
    return state;
  }
};
