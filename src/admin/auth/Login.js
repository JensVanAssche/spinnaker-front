import React from 'react';
import { connect } from 'react-redux';
import { Card, Input, Button, Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { validateRequired } from 'utils/validate';
import { login } from 'admin/actions';
import './login.scss';

class Login extends React.Component {
  state = {
    password: '',
  };

  handlePasswordChange = event =>
    this.setState({ password: event.target.value });

  validateForm = (password) => {
    if (!validateRequired(password)) return false;
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const { password } = this.state;
    const { login } = this.props;

    const isValid = this.validateForm(password);

    if (isValid) {
      login(password);
    };
  };

  render() {
    return (
      <div className="login">
        <Card>
          <Form onSubmit={this.handleSubmit}>
            <Link to="/">Terug naar de website</Link>
            <h2>Login</h2>
            <Form.Field>
              <Input
                type="password"
                name="password"
                placeholder="wachtwoord"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </Form.Field>
            <Form.Field>
              <Button primary type="submit">
                Login
              </Button>
            </Form.Field>
          </Form>
        </Card>

      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
