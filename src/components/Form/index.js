import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default () => {
  return(
    <div className="container-form">
      <div className="box-form">
        <h2>Entrar</h2>
        <input type="text" placeholder="Email ou número de telefone" />
        <input type="password" placeholder="Senha" />
        <Link
          to="/browse"
        >
          <input type="submit" value="Entrar" />
        </Link>
        <div className="help">
          <div className="left">
            <input type="checkbox" />
            <h5>Lembre-se de mim</h5>
          </div>
          <div>
            <h4>Precisa de ajuda?</h4>
          </div>
        </div>
      </div>
    </div>
  );
}