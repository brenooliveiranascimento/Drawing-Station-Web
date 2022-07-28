/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route } from 'react-router-dom';
import SideBarHome from '../../Components/HomeComponents/SideBarHome/SidebarHome';
import ExerciceArea from '../ExerciceArea/ExerciceArea';
import ModulesArea from '../ModulesArea/ModulesArea';
import { MainContent } from './HomeComponents';
import './styles.css';

function Home() {
  return (
    <section className="home_container">
      <SideBarHome />
      {/* <img
        className="Logo_In_Home"
        src={require('../../Assets/drawing/logo1.png')}
        alt="DrawingStationSlogo"
      /> */}
      <section className="Darkess" />
      <MainContent>
        <Route path="/" exact component={ModulesArea} />
        <Route path="/Pintura" exact component={ExerciceArea} />
      </MainContent>
    </section>
  );
}

export default Home;
