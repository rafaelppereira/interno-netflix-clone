import React from 'react';

import './styles.css';

import LogoIcon from '../../assets/logo-netflix.png';

export default () => {
  return(
    <div className="container-header">
      <img src={LogoIcon} alt="Netflix" />
    </div>
  );
}