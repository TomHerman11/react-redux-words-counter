import { TEXT_CHANGED } from './actionTypes';

const initialState = {
  chars: 0,
  words: 0,
  sentences: 0,
  paragraphs: 0
};

export const textReducer = (state = initialState, action: { type: string, payload: { text: string } }) => {
  if (action.type === TEXT_CHANGED) {
    return {
      ...state,
      chars: action.payload.text.length,
      words: action.payload.text.split(/\w+/g).length - 1,
      sentences: action.payload.text.split(/\w\s?[.|!|?|;|\n]/g).length - 1,
      paragraphs: action.payload.text.split(/[\r\n|(\r\n)]+(?!\s*$)/g).length
    };
  } else {
    return state;
  }
};
