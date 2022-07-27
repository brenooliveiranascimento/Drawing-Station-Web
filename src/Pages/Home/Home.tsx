/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import HeaderHome from '../../Components/HomeComponents/Header/HeaderHome';
import Modules from '../../Components/HomeComponents/Modules/Modules';
import SideBarHome from '../../Components/HomeComponents/SideBarHome/SidebarHome';
import { MainContent, MainLimit } from './HomeComponents';
import './styles.css';

function Home() {
  return (
    <section className="home_container">
      <SideBarHome />
      <img
        className="Logo_In_Home"
        src={require('../../Assets/drawing/logo1.png')}
        alt="DrawingStationSlogo"
      />
      <section className="Darkess" />
      <MainContent>
        <MainLimit>
          <HeaderHome />
          <Modules />
        </MainLimit>
      </MainContent>
    </section>
  );
}

export default Home;
