import { TEXT_CHANGED } from './actionTypes';

export const textChanged = (text: string) => ({
  type: TEXT_CHANGED,
  payload: {
    text
  }
});
