import React from "react";
import { connect } from "react-redux";
import { getAll } from "./actions";
import { selectLoading } from "./selectors";
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
    const { loading } = this.props;

    if (loading) {
      return <div />;
    }

    if (!loading && error) {
      return (
        <div className="error">
          <img src={Logo} alt="logo" />
          <h2>
            Sorry, onze servers zijn momenteel niet beschikbaar.
            <br />
            Probeer later nog eens opnieuw!
          </h2>
        </div>
      );
    }

    return (
      <div>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Website} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAll
};

const mapStateToProps = state => ({
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
