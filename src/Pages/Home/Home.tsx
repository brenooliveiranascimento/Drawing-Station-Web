import React from 'react';
import HeaderHome from '../../Components/HomeComponents/Header/HeaderHome';
import SideBarHome from '../../Components/HomeComponents/SideBarHome/SidebarHome';
import { MainContent, MainLimit } from './HomeComponents';
import './styles.css';

function Home() {
  return (
    <section className="home_container">
      <SideBarHome />
      <MainContent>
        <MainLimit>
          <HeaderHome />
        </MainLimit>
      </MainContent>
    </section>
  );
}

export default Home;
