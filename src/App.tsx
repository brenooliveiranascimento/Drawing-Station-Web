import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { updateVersion, thereIsANewVersion } from './globalFuncions/versionControl';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';

function App() {
  const checkVersion = async () => await thereIsANewVersion() && updateVersion();

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
