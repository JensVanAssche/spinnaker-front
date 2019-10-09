import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'admin/actions';

function Dashboard({ logout }) {
  return (
    <div>
      Dashboard
      <p onClick={() => logout()}>Logout</p>
    </div>
  );
}

const mapDispatchToProps = {
  logout,
};

export default connect(
  null,
  mapDispatchToProps,
)(Dashboard);
