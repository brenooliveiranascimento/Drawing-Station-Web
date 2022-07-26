/* eslint-disable global-require */
import React from 'react';
import './styles.css';

function ImageCard() {
  return (
    <section className="auth_drawing_image">
      <section className="brightness" />
      <section className="centralizeContent">
        <img
          className="logo"
          src={require('../../../Assets/drawing/logo1.png')}
          alt="awdjowpa"
        />
        <h1>Te Levando Para o Próximo Nível</h1>
        <span className="message">Desenhos realistas com Lápis de cor</span>
      </section>
      <span className="me_area">Desenvolvido e mantido por @Breno Nascimento</span>
    </section>
  );
}

export default ImageCard;
