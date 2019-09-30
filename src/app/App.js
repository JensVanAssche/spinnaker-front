import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'header/Header';
import Home from 'home/Home';
import Spinnaker from 'spinnaker/Spinnaker';
import Boccia from 'sporten/boccia/Boccia';
import Dansen from 'sporten/dansen/Dansen';
import Hockey from 'sporten/hockey/Hockey';
import Handbal from 'sporten/handbal/Handbal';
import Zwemmen from 'sporten/zwemmen/Zwemmen';
import HandbalKalender from 'sporten/handbal/HandbalKalender';
import HockeyKalender from 'sporten/hockey/HockeyKalender';
import Fotos from 'gallery/Fotos';
import Videos from 'gallery/Videos';
import Publicaties from 'publicaties/Publicaties';
import Nieuws from 'nieuws/Nieuws';
import Footer from 'footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/spinnaker" component={Spinnaker} />
          <Route path="/boccia" component={Boccia} />
          <Route exact path="/dansen" component={Dansen} />
          <Route exact path="/hockey" component={Hockey} />
          <Route exact path="/handbal" component={Handbal} />
          <Route exact path="/zwemmen" component={Zwemmen} />
          <Route exact path="/hockey/kalender" component={HockeyKalender} />
          <Route exact path="/handbal/kalender" component={HandbalKalender} />
          <Route exact path="/fotos" component={Fotos} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/publicaties" component={Publicaties} />
          <Route exact path="/nieuws" component={Nieuws} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
