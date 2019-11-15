import React from "react";
import { connect } from "react-redux";
import { getAll } from "redux/content/actions";
import { selectData, selectLoading } from "redux/content/selectors";
import { Route, Switch } from "react-router-dom";

import Website from "app/Website";
import Admin from "admin/Admin";

import Logo from "assets/images/logo_white.png";

class App extends React.Component {
  state = {
    error: false
  };

  componentDidMount() {
    this.props.getAll().then(res => {
      if (res.error) {
        this.setState({ error: true });
      }
    });
  }

  render() {
    const { error } = this.state;
    const { data, loading } = this.props;

    if (loading || !data)
      return (
        <div className="app-loading">
          <p>Laden...</p>
        </div>
      );

    if (!loading && error) {
      return (
        <div className="error">
          <img src={Logo} alt="logo" />
          <h2>
            Sorry, de website is momenteel niet beschikbaar.
            <br />
            Herlaad de pagina of probeer later opnieuw.
          </h2>
        </div>
      );
    }

    return (
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Website} />
      </Switch>
    );
  }
}

const mapDispatchToProps = {
  getAll
};

const mapStateToProps = state => ({
  data: selectData(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
