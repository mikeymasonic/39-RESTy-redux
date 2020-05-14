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
