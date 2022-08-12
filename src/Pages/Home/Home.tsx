/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideBarHome from '../../Components/HomeComponents/SideBarHome/SidebarHome';
import { fetchComments } from '../../Redux/actions/exercicesActions/exerciceActions';
import ExerciceArea from '../ExerciceArea/ExerciceArea';
import ModulesArea from '../ModulesArea/ModulesArea';
import { MainContent } from './HomeComponents';
import './styles.css';
import IncompleteModule from '../IncompleteModules/IncompleteModules';
import About from '../About/About';
import User from '../User/User';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <section className="home_container">
      <SideBarHome />
      <section className="Darkess" />
      <MainContent>
        <Route path="/" exact component={ModulesArea} />
        <Route path="/Pintura" exact component={ExerciceArea} />
        <Route path="/Materiais" exact component={IncompleteModule} />
        <Route path="/Esboço" exact component={IncompleteModule} />
        <Route path="/about" exact component={About} />
        <Route path="/User" exact component={User} />
      </MainContent>
    </section>
  );
}

export default Home;
