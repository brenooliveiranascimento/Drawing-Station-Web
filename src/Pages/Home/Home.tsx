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

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <section className="home_container">
      <SideBarHome />
      <MainContent>
        <Route path="/" exact component={ModulesArea} />
        <Route path="/Pintura" exact component={ExerciceArea} />
      </MainContent>
    </section>
  );
}

export default Home;
