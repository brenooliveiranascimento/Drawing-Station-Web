/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateVersion, thereIsANewVersion } from './globalFuncions/versionControl';
import { updateExerciceData } from './Redux/actions/exercicesActions/exerciceActions';
import { accessLocalStore } from './globalFuncions/localStoreControl';
import { DRAWING_STATION_USER } from './__GlobalTypes/globalTypes';
import { signedUser } from './Redux/actions/authActions/authActions';
import Routes from './Routes/Routes';
import './app.css';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userData);
  const update = () => {
    updateVersion();
    dispatch(updateExerciceData());
  };

  const isLoged = (): boolean => !userData.name;

  const checkVersion = async () => await thereIsANewVersion() && update();

  const checkIsLoged = async () => {
    if (isLoged()) {
      const fetchUserInf: any = await accessLocalStore(DRAWING_STATION_USER);
      dispatch(signedUser(fetchUserInf?.uid));
    }
  };

  useEffect(() => {
    checkVersion();
    checkIsLoged();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
