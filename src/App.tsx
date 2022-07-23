import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateVersion, thereIsANewVersion } from './globalFuncions/versionControl';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import { updateExerciceData } from './Redux/actions/exercicesActions/exerciceActions';
import { accessLocalStore } from './globalFuncions/localStoreControl';
import { DRAWING_STATION_USER } from './__GlobalTypes/globalTypes';
import { signedUser } from './Redux/actions/authActions/authActions';

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
      dispatch(signedUser(fetchUserInf.uid));
    }
  };

  useEffect(() => {
    checkVersion();
    checkIsLoged();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/Home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
