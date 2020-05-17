import { SET_URL, SET_METHOD, SET_BODY, SET_REQUESTS, SET_DISABLE, SET_RESPONSE, SET_HEADERS } from '../actions/restyActions';

const initialState = {
  url: 'https://api.github.com/users/mikeymasonic',
  method: 'GET',
  body: '',
  disable: true,
  headers: {},
  response: {},
  requests: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_URL:
      return { ...state, url: action.payload };
    case SET_METHOD:
      return { ...state, method: action.payload };
    case SET_BODY:
      return { ...state, body: action.payload };
    case SET_REQUESTS:
      return { ...state, requests: action.payload };
    case SET_DISABLE:
      return { ...state, disable: action.payload };
    case SET_RESPONSE:
      return { ...state, response: action.payload };
    case SET_HEADERS:
      return { ...state, headers: action.payload };
    default:
      return state;
  }
}
