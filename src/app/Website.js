import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "header/Header";
import Home from "home/Home";
import Spinnaker from "spinnaker/Spinnaker";
import Boccia from "sporten/boccia/Boccia";
import Dansen from "sporten/dansen/Dansen";
import Hockey from "sporten/hockey/Hockey";
import Handbal from "sporten/handbal/Handbal";
import Zwemmen from "sporten/zwemmen/Zwemmen";
import Fotos from "gallery/Fotos";
import Album from "gallery/Album";
import Videos from "gallery/Videos";
import Publicaties from "publicaties/Publicaties";
import Nieuws from "nieuws/Nieuws";
import Article from "nieuws/article/Article";
import Footer from "footer/Footer";
import NotFound from "notFound/NotFound";

class Website extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/spinnaker" component={Spinnaker} />
            <Route path="/boccia" component={Boccia} />
            <Route exact path="/dansen" component={Dansen} />
            <Route path="/hockey" component={Hockey} />
            <Route path="/handbal" component={Handbal} />
            <Route path="/zwemmen" component={Zwemmen} />
            <Route exact path="/fotos" component={Fotos} />
            <Route exact path="/fotos/page/:page" component={Fotos} />
            <Route exact path="/fotos/album/:id" component={Album} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/page/:page" component={Videos} />
            <Route exact path="/publicaties" component={Publicaties} />
            <Route exact path="/nieuws" component={Nieuws} />
            <Route exact path="/nieuws/page/:page" component={Nieuws} />
            <Route exact path="/nieuws/article/:id" component={Article} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default Website;
