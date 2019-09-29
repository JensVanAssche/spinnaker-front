import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';

import Header from 'header/Header';
import Home from 'home/Home';
import Spinnaker from 'spinnaker/Spinnaker';
import Boccia from 'sporten/Boccia';
import Dansen from 'sporten/Dansen';
import Hockey from 'sporten/Hockey';
import Handbal from 'sporten/Handbal';
import Zwemmen from 'sporten/Zwemmen';
import BocciaKalender from 'kalender/BocciaKalender';
import HandbalKalender from 'kalender/HandbalKalender';
import HockeyKalender from 'kalender/HockeyKalender';
import Fotos from 'gallery/Fotos';
import Videos from 'gallery/Videos';
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
          <Route exact path="/sporten/boccia" component={Boccia} />
          <Route exact path="/sporten/dansen" component={Dansen} />
          <Route exact path="/sporten/hockey" component={Hockey} />
          <Route exact path="/sporten/handbal" component={Handbal} />
          <Route exact path="/sporten/zwemmen" component={Zwemmen} />
          <Route exact path="/sporten/boccia/kalender" component={BocciaKalender} />
          <Route exact path="/sporten/hockey/kalender" component={HockeyKalender} />
          <Route exact path="/sporten/handbal/kalender" component={HandbalKalender} />
          <Route exact path="/fotos" component={Fotos} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/publicaties" component={Publicaties} />
          <Route exact path="/nieuws" component={Nieuws} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
