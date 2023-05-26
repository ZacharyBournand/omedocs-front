/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

import {
  LinkButtons,
  updateButton,
  homeButton,
  loginButton,
  HeaderBar,
  forgotButton,
  inputStyle,
  SubmitButtons,
} from 'src/components/LoginForm/ResetPassword';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

const title = {
  pageTitle: 'Réinitialiser mon mot de passe',
};

export default class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      updated: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { token },
      },
    } = this.props;
    try {
      const response = await axios.get('http://localhost:3003/reset', {
        params: {
          resetPasswordToken: token,
        },
      });
      // console.log(response);
      if (response.data.message === 'password reset link a-ok') {
        this.setState({
          username: response.data.username,
          updated: false,
          isLoading: false,
          error: false,
        });
      }
    }
    catch (error) {
      console.log(error.response.data);
      this.setState({
        updated: false,
        isLoading: false,
        error: true,
      });
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const {
      match: {
        params: { token },
      },
    } = this.props;
    try {
      const response = await axios.put(
        'http://localhost:3020/updatePasswordViaEmail',
        {
          username,
          password,
          resetPasswordToken: token,
        },
      );
      console.log(response.data);
      if (response.data.message === 'password updated') {
        this.setState({
          updated: true,
          error: false,
        });
      }
      else {
        this.setState({
          updated: false,
          error: true,
        });
      }
    }
    catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const {
      password, error, isLoading, updated,
    } = this.state;

    if (error) {
      return (
        <div>
          <HeaderBar title={title} />
          <div style={loading}>
            <h4>Il y a eu un problème. S'il vous plait, faites une nouvelle demande.</h4>
            <LinkButtons
              buttonText="Accueil"
              buttonStyle={homeButton}
              link="/"
            />
            <LinkButtons
              buttonStyle={forgotButton}
              buttonText="Mot de passe oublié ?"
              link="/reset"
            />
          </div>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          <HeaderBar title={title} />
          <div style={loading}>CHargement des données...</div>
        </div>
      );
    }
    return (
      <div>
        <HeaderBar title={title} />
        <form className="password-form" onSubmit={this.updatePassword}>
          <TextField
            style={inputStyle}
            id="password"
            label="password"
            onChange={this.handleChange('password')}
            value={password}
            type="password"
          />
          <SubmitButtons
            buttonStyle={updateButton}
            buttonText="Modifier mon mot de passe"
          />
        </form>

        {updated && (
          <div>
            <p>
              Votre mot de passe a été modifié avec succès, essayez de connecter à nouveau.
            </p>
            <LinkButtons
              buttonStyle={loginButton}
              buttonText="Se connecter"
              link="/login"
            />
          </div>
        )}
        <LinkButtons buttonText="Accueil" buttonStyle={homeButton} link="/" />
      </div>
    );
  }
}

ResetPassword.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
};
