import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';

function App() {
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
