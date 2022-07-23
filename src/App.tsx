import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateVersion, thereIsANewVersion } from './globalFuncions/versionControl';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import { updateExerciceData } from './Redux/actions/exercicesActions/exerciceActions';

function App() {
  const dispatch = useDispatch();

  const update = () => {
    updateVersion();
    dispatch(updateExerciceData());
  };

  const checkVersion = async () => await thereIsANewVersion() && update();

  useEffect(() => {
    checkVersion();
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
