import React from 'react';

import './styles.css';

import HeaderLogin from '../../components/HeaderLogin/index';
import Form from '../../components/Form/index';

export default () => {
  return(
    <div className="container">
      <div className="content">
        <HeaderLogin/>
        <Form/>
      </div>
      <div className="overlay"></div>
    </div>
 
  );
}