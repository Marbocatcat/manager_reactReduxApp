import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginUserFail, loginUserSuccess } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange = text => {
    this.props.emailChanged(text);
  }

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@placeholder.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <Text style={style.errorTextStyle}>{this.props.error}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const style = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error } = auth;
  return {
    email,
    password,
    error
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail })(LoginForm);
