import React, { useState, useEffect } from 'react';
import { JavascriptErrorInfo, deviceInfo, JavascriptDebug } from '../src/index';
import storage from '../src/storage';
import './index.css';

function Demo() {
  // useEffect(() => {
  //   throw new Error("hello");
  // }, []);
  const javascriptDebug = new JavascriptDebug();
  const throwErorr = () => {
    throw new Error('click error');
    // storage.clearStorage();
  };

  const upload = () => {
    const storageErrorInfo = storage.getStorageErrorData();
    javascriptDebug.fetchErrorInfo(storageErrorInfo);
  };

  return (
    <div className='demo'>
      <div className='demo-button' onClick={() => throwErorr()}>
        throw Error
      </div>
      <div className='demo-button' onClick={() => upload()}>
        upload
      </div>
    </div>
  );
}

export default Demo;
