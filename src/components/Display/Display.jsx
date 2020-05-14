import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Display.css';
// import { useResponse, useHeaders } from '../../hooks/StateProvider';
import { getResponse, getHeaders } from '../../selectors/restySelectors';

const Display = () => {
  const response = getResponse();
  const headers = getHeaders();

  return (
    <div className={styles.Display}>
      <ReactJson src={headers} theme="monokai" name="Headers"/>
      <ReactJson src={response} theme="monokai" name="Response" />
    </div>
  );
};

Display.propTypes = {
  headers: PropTypes.object,
  response: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};

export default Display;
