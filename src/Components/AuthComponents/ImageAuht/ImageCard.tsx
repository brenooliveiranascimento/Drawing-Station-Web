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
        <h1>Levado voce ao próximo nivel</h1>
      </section>

    </section>
  );
}

export default ImageCard;
