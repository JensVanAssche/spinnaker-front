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
          <Route path="/spinnaker" component={Spinnaker} />
          <Route path="/boccia" component={Boccia} />
          <Route path="/dansen" component={Dansen} />
          <Route path="/hockey" component={Hockey} />
          <Route path="/handbal" component={Handbal} />
          <Route path="/zwemmen" component={Zwemmen} />
          <Route path="/fotos" component={Fotos} />
          <Route path="/videos" component={Videos} />
          <Route path="/publicaties" component={Publicaties} />
          <Route path="/nieuws" component={Nieuws} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
