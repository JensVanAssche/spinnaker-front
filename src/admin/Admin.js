import React from "react";
import { connect } from "react-redux";
import { selectIsLoggedIn, selectLoading } from "redux/auth/selectors";
import { me } from "redux/auth/actions";

import NonAuthRoute from "routing/NonAuthRoute";
import AuthRoute from "routing/AuthRoute";

import Login from "admin/auth/Login";
import Dashboard from "admin/dashboard/Dashboard";

class Admin extends React.Component {
  componentDidMount() {
    this.props.me();
  }

  render() {
    const { isLoggedIn, loading, match } = this.props;

    if (loading) return <div>Loading</div>;

    return (
      <div>
        <NonAuthRoute
          path={`${match.path}/login`}
          component={Login}
          isLoggedIn={isLoggedIn}
        />
        <AuthRoute
          exact
          path={match.path}
          component={Dashboard}
          isLoggedIn={isLoggedIn}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  me
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
  loading: selectLoading(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
