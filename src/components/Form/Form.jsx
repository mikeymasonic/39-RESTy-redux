import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';
// import { useDisable, useURL, useMethod, useBody } from '../../hooks/StateProvider';
// import { useDispatch } from 'react-redux';
// import { setURL, setMethod, setBody } from '../../actions/restyActions';
import { getURL, getMethod, getBody, getDisable } from '../../selectors/restySelectors';

const Form = ({ onChange, onSubmit }) => {
  // const dispatch = useDispatch();
  // const [url, setUrlLocal] = useState('');
  // const [method, setMethodLocal] = useState('');
  // const [body, setBodyLocal] = useState('');
  // const [disable, setDisableLocal] = useState(false);

  // const url = useURL();
  // const method = useMethod();
  // const body = useBody();
  // const disable = useDisable();

  const url = getURL();
  const method = getMethod();
  const body = getBody();
  const disable = getDisable();

  // const handleSubmit = () => {
  //   event.preventDefault();

  //   let requestObject;
  //   let saveObject;

  //   if(method === 'GET' || method === 'DELETE') {
  //     dispatch(
  //       setURL({ url }),
  //       setMethod({ method }),
  //       setBody({ body })
  //       );
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

  return (
    <div className={styles.Form}>
      <form onSubmit={onSubmit}>
        <label>URL:<input type="text" name="url" value={url} onChange={onChange}></input></label> 
        <div>
          <label><input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />GET</label>
          <label><input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />POST</label>
          <label><input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />PUT</label>
          <label><input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />PATCH</label>
          <label><input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />DELETE</label>
        </div>
        <textarea placeholder="JSON Body" name="body" value={body} onChange={onChange} disabled={disable}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.string,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Form;
