/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Assets/Lottie/animationData.json';
import animationLoading from '../../Assets/Lottie/lf30_editor_0ktlr6ix.json';
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

  const defaultOptionsLoading: any = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="LoadingContainer">

      <Lottie
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 160,
          height: 180,
          marginBottom: -70,
        }}
        options={defaultOptionsLoading}
      />
      <img
        className="Logo"
        src={require('../../Assets/drawing/logo1.png')}
        alt="Dreawing logo"
      />
      {/* <Lottie
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: 400,
          height: 300,
        }}
        options={defaultOptions}
      /> */}
    </section>
  );
}

export default LoadingPage;
