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

export const SET_HEADERS = 'SET_HEADERS';
export const setHeaders = () => dispatch => {
  return fetchResponse()
    .then(headers => {
      dispatch({
        type: SET_HEADERS,
        payload: headers
      });
    });
};
