import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';

import Header from 'header/Header';
import Home from 'home/Home';
import Spinnaker from 'spinnaker/Spinnaker';
import Sporten from 'sporten/Sporten';
import Kalender from 'kalender/Kalender';
import Gallery from 'gallery/Gallery';
import Publicaties from 'publicaties/Publicaties';
import Nieuws from 'nieuws/Nieuws';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="ui container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/spinnaker" component={Spinnaker} />
          <Route exact path="/sporten" component={Sporten} />
          <Route exact path="/kalender" component={Kalender} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/publicaties" component={Publicaties} />
          <Route exact path="/nieuws" component={Nieuws} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
