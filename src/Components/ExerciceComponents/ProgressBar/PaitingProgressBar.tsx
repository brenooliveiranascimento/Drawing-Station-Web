import React from 'react';
import { BackBar, Colorbar, MainBar } from './components';

function PaitingProgressBar() {
  return (
    <MainBar>
      <Colorbar />
      <BackBar />
    </MainBar>
  );
}

export default PaitingProgressBar;
