/* eslint-disable global-require */
import React from 'react';
import './styles.css';

function ImageCard() {
  return (
    <section className="auth_image_container">
      <img
        className="auth_drawing_image"
        src={require('../../../Assets/drawing/blueRose.jpg')}
        // src="../../../Assets/blob-scene-haikei (3).svg"
        alt="awdjowpa"
      />
    </section>
  );
}

export default ImageCard;
