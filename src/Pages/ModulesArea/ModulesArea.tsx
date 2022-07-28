import React from 'react';
import HeaderHome from '../../Components/HomeComponents/Header/HeaderHome';
import Modules from '../../Components/HomeComponents/Modules/Modules';
import { MainLimit } from '../Home/HomeComponents';

function ModulesArea() {
  return (
    <MainLimit>
      <HeaderHome />
      <Modules />
    </MainLimit>
  );
}

export default ModulesArea;
