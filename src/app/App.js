import React from 'react';
import { connect } from 'react-redux';
import { getAll } from './actions';
import { selectLoading } from './selectors';
import { Route } from 'react-router-dom';

import Header from 'header/Header';
import Home from 'home/Home';
import Spinnaker from 'spinnaker/Spinnaker';
import Boccia from 'sporten/boccia/Boccia';
import Dansen from 'sporten/dansen/Dansen';
import Hockey from 'sporten/hockey/Hockey';
import Handbal from 'sporten/handbal/Handbal';
import Zwemmen from 'sporten/zwemmen/Zwemmen';
import Fotos from 'gallery/Fotos';
import Album from 'gallery/Album';
import Videos from 'gallery/Videos';
import Publicaties from 'publicaties/Publicaties';
import Nieuws from 'nieuws/Nieuws';
import Article from 'nieuws/article/Article';
import Footer from 'footer/Footer';

class App extends React.Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return ( <div>loading</div> );
    }

    return (
      <div>
        <Route path="/" component={Header} />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/spinnaker" component={Spinnaker} />
            <Route path="/boccia" component={Boccia} />
            <Route path="/dansen" component={Dansen} />
            <Route path="/hockey" component={Hockey} />
            <Route path="/handbal" component={Handbal} />
            <Route path="/zwemmen" component={Zwemmen} />
            <Route exact path="/fotos" component={Fotos} />
            <Route path="/fotos/:id" component={Album} />
            <Route path="/videos" component={Videos} />
            <Route path="/publicaties" component={Publicaties} />
            <Route exact path="/nieuws" component={Nieuws} />
            <Route path="/nieuws/:id" component={Article} />
          </main>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAll,
};

const mapStateToProps = state => ({
  loading: selectLoading(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
