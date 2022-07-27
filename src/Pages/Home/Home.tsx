import React from 'react';
import { HeaderContent } from '../../Components/HomeComponents/Header/headerComponents';
import SideBarHome from '../../Components/HomeComponents/SideBarHome/SidebarHome';
import { MainContent, MainLimit } from './HomeComponents';
import './styles.css';

function Home() {
  return (
    <section className="home_container">
      <SideBarHome />
      <MainContent>
        <MainLimit>
          <HeaderContent />
        </MainLimit>
      </MainContent>
    </section>
  );
}

export default Home;
