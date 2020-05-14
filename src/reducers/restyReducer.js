import { SET_URL, SET_METHOD, SET_BODY, SET_REQUESTS, SET_DISABLE, SET_RESPONSE, SET_HEADERS } from '../actions/restyActions';

export default function reducer(state, action) {
  switch(action.type) {
    case SET_URL:
      return { ...state, url: action.payload };
    case SET_METHOD:
      return { ...state, method: action.payload };
    case SET_BODY:
      return { ...state, method: action.payload };
    case SET_REQUESTS:
      return { ...state, method: action.payload };
    case SET_DISABLE:
      return { ...state, method: action.payload };
    case SET_RESPONSE:
      return { ...state, method: action.payload };
    case SET_HEADERS:
      return { ...state, method: action.payload };
    default:
      return state;
  }
}
