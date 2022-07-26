/* eslint-disable global-require */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Assets/Lottie/animationData.json';
import './styles.css';

function LoadingPage() {
  const defaultOptions: any = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="LoadingContainer">
      <img
        className="Logo"
        src={require('../../Assets/drawing/logo1.png')}
        alt="Dreawing logo"
      />
      <Lottie
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 400,
          height: 400,
        }}
        options={defaultOptions}
      />
    </section>
  );
}

export default LoadingPage;
