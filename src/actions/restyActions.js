import { fetchResponse } from '../services/api';

export const SET_URL = 'SET_URL';
export const setURL = () => dispatch => {
  return fetchResponse()
    .then(url => {
      dispatch({
        type: SET_URL,
        payload: url
      });
    });
};

export const SET_METHOD = 'SET_METHOD';
export const setMethod = () => dispatch => {
  return fetchResponse()
    .then(method => {
      dispatch({
        type: SET_METHOD,
        payload: method
      });
    });
};

export const SET_BODY = 'SET_BODY';
export const setBody = () => dispatch => {
  return fetchResponse()
    .then(body => {
      dispatch({
        type: SET_BODY,
        payload: body
      });
    });
};

export const SET_REQUESTS = 'SET_REQUESTS';
export const setRequests = () => dispatch => {
  return fetchResponse()
    .then(requests => {
      dispatch({
        type: SET_REQUESTS,
        payload: requests
      });
    });
};

export const SET_DISABLE = 'SET_DISABLE';
export const setDisable = () => dispatch => {
  return fetchResponse()
    .then(disable => {
      dispatch({
        type: SET_DISABLE,
        payload: disable
      });
    });
};

export const SET_RESPONSE = 'SET_RESPONSE';
export const setResponse = () => dispatch => {
  return fetchResponse()
    .then(response => {
      dispatch({
        type: SET_RESPONSE,
        payload: response
      });
    });
};

// export function reducer(state, action) {
//   switch(action.type) {
//     case 'SET_URL':
//       return { ...state, url: action.payload };
//     case 'SET_METHOD':
//       return { ...state, method: action.payload };
//     case 'SET_BODY':
//       return { ...state, body: action.payload };
//     case 'SET_REQUESTS':
//       return { ...state, requests: action.payload };
//     case 'SET_DISABLE':
//       return { ...state, disable: action.payload };
//     case 'SET_RESPONSE':
//       return { ...state, response: action.payload };
//     case 'SET_HEADERS':
//       return { ...state, headers: action.payload };
    
//     default:
//       return state;
//   }
// }
