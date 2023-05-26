/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {
  LinkButtons,
  SubmitButtons,
  registerButton,
  homeButton,
  forgotButton,
  inputStyle,
  HeaderBar,
} from 'src/components/LoginForm/ResetPassword';

const title = {
  pageTitle: 'Mot de passe oublié',
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    }
    else {
      try {
        const response = await axios.post(
          'http://omedocs.herokuapp.com/forgotpassword',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'email envoyé') {
          this.setState({
            showError: false,
            messageFromServer: 'email envoyé',
            showNullError: false,
          });
        }
      }
      catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'Email non reconnu') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const {
      email, messageFromServer, showNullError, showError,
    } = this.state;

    return (
      <div>
        <HeaderBar title={title} />
        <form className="profile-form" onSubmit={this.sendEmail}>
          <TextField
            style={inputStyle}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Adresse mail"
          />
          <SubmitButtons
            buttonStyle={forgotButton}
            buttonText="Envoyer le lien par mail"
          />
        </form>
        {showNullError && (
          <div>
            <p>Ce champ ne peut pas être vide.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              Le mail n'est pas reconnu. Essayez à nouveau ou créez un nouveau compte.
            </p>
            <LinkButtons
              buttonText="Inscription"
              buttonStyle={registerButton}
              link="/login"
            />
          </div>
        )}
        {messageFromServer === 'email envoyé' && (
          <div>
            <h3>Veuillez accéder à votre boite mail pour réinistialiser votre mot de passe</h3>
          </div>
        )}
        <LinkButtons buttonText="Accueil" buttonStyle={homeButton} link="/" />
      </div>
    );
  }
}

export default ForgotPassword;
