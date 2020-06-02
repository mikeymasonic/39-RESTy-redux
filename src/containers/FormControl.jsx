import React, { useEffect } from 'react';
import Form from '../components/Form/Form';
import Display from '../components/Display/Display';
import List from '../components/List/List';
import { fetchResponse } from '../services/api';
import styles from './FormControl.css';
// import { useURL, useBody, useMethod, useDispatch, useRequests } from '../hooks/StateProvider';
import { useDispatch } from 'react-redux';
import { getURL, getBody, getMethod, getRequests, getDisable, getHeaders } from '../selectors/restySelectors';

const FormControl = () => {
  // const url = useURL();
  // const body = useBody();
  // const method = useMethod();
  // const dispatch = useDispatch();
  // const requests = useRequests();

  const url = getURL();
  const body = getBody();
  const method = getMethod();
  const requests = getRequests();
  const headers = getHeaders();
  const dispatch = useDispatch();

  useEffect(() => {
    // const storedReqs = JSON.parse(localStorage.getItem('requests'));
    // if(storedReqs) dispatch({ type: 'SET_REQUESTS', payload:storedReqs }); 
    const storedReqs = JSON.parse(localStorage.getItem('requests'));
    if(storedReqs) dispatch(requests(storedReqs)); 

    if(method === 'GET' || method === 'DELETE') {
      dispatch(getDisable(true));
    } else if(method === 'POST' || method === 'PUT' || method === 'PATCH') {
      dispatch(getDisable(false));
    }
  }, [method]);

  //   if(method === 'GET' || method === 'DELETE') {
  //     dispatch({ type: 'SET_DISABLE', payload: true });
  //   } else if(method === 'POST' || method === 'PUT' || method === 'PATCH') {
  //     dispatch({ type: 'SET_DISABLE', payload: false });
  //   }
  // }, [method]);

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'url':
        return dispatch(url(target.value));
      case 'method':
        return dispatch(method(target.value));
      case 'body':
        return dispatch(dispatch(target.value));
    }
  };

  // const handleChange = ({ target }) => {
  //   switch(target.name) {
  //     case 'url':
  //       return dispatch({ type: 'SET_URL', payload: target.value });
  //     case 'method':
  //       return dispatch({ type: 'SET_METHOD', payload: target.value });
  //     case 'body':
  //       return dispatch({ type: 'SET_BODY', payload: target.value });
  //   }
  // };

  const handleSubmit = () => {
    event.preventDefault();

    let requestObject;
    let saveObject;

    if(method === 'GET' || method === 'DELETE') {
      dispatch(body(''));
      requestObject = { 
        method: method 
      };
      saveObject = {
        url: url,
        method: method,
        body: ''
      };
    } else {
      requestObject = { 
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      };
      saveObject = {
        url: url,
        method: method,
        body: body
      };
    }

    // const handleSubmit = () => {
    //   event.preventDefault();

    //   let requestObject;
    //   let saveObject;

    //   if(method === 'GET' || method === 'DELETE') {
    //     dispatch({ type: 'SET_BODY', payload:'' });
    //     requestObject = { 
    //       method: method 
    //     };
    //     saveObject = {
    //       url: url,
    //       method: method,
    //       body: ''
    //     };
    //   } else {
    //     requestObject = { 
    //       method: method,
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: body
    //     };
    //     saveObject = {
    //       url: url,
    //       method: method,
    //       body: body
    //     };
    //   }

    fetchResponse(url, requestObject)
      .then(response => { 
        if(!response.headers && !response.response || (!response.ok)) {
          dispatch(response(response.response));
          dispatch(headers(response.response));
          throw Error ('Bad Request');
        } else {
          dispatch(response(response.response));
          dispatch(headers(response.headers));    
          handleSave(saveObject);
        }
      });
  };

  //   fetchResponse(url, requestObject)
  //     .then(response => { 
  //       if(!response.headers && !response.response || (!response.ok)) {
  //         dispatch({ type: 'SET_RESPONSE', payload:response.response });
  //         dispatch({ type: 'SET_HEADERS', payload:response.headers });
  //         throw Error ('Bad Request');
  //       } else {
  //         dispatch({ type: 'SET_RESPONSE', payload:response.response });
  //         dispatch({ type: 'SET_HEADERS', payload:response.headers });    
  //         handleSave(saveObject);
  //       }
  //     });
  // };

  const handleSave = (saveObject) => {
    let alreadyExists = false;
    requests.find(request => {
      if(request.method === saveObject.method && request.url === saveObject.url && request.body === saveObject.body) alreadyExists = true;
    });

    if(!alreadyExists) {
      const newRequests = [...requests, saveObject];
      dispatch(requests(newRequests));
      localStorage.setItem('requests', JSON.stringify(newRequests));
    }
    alreadyExists = false;
  };

  const handleClear = () => {
    localStorage.clear();
    dispatch(requests([]));
  };

  const handleLoad = (url, method, body) => {
    dispatch(url(url));
    dispatch(method(method));
    dispatch(body(body));
  };

  // const handleSave = (saveObject) => {
  //   let alreadyExists = false;
  //   requests.find(request => {
  //     if(request.method === saveObject.method && request.url === saveObject.url && request.body === saveObject.body) alreadyExists = true;
  //   });

  //   if(!alreadyExists) {
  //     const newRequests = [...requests, saveObject];
  //     dispatch({ type: 'SET_REQUESTS', payload:newRequests });
  //     localStorage.setItem('requests', JSON.stringify(newRequests));
  //   }
  //   alreadyExists = false;
  // };

  // const handleClear = () => {
  //   localStorage.clear();
  //   dispatch({ type: 'SET_REQUESTS', payload:[] });
  // };

  // const handleLoad = (url, method, body) => {
  //   dispatch({ type: 'SET_URL', payload:url });
  //   dispatch({ type: 'SET_METHOD', payload:method });
  //   dispatch({ type: 'SET_BODY', payload:body });
  // };

  return (
    <div className={styles.FormControl}>
      <div className={styles.left}>
        <List handleClear={handleClear} handleLoad={handleLoad}/>
      </div>
      <div className={styles.right}>
        <Form onChange={handleChange} onSubmit={handleSubmit}/>
        <Display />
      </div>
    </div>
  );
};

export default FormControl;
