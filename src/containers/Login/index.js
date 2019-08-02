import {
  Image, Text, View, Alert, TextInput,
  TouchableOpacity, Keyboard, ImageBackground, Dimensions
} from 'react-native';
import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from './styles'
import * as AppConfig from '@AppConfig';
import * as validation from '@lib/validation';

import { loginUserToShiftyy } from '@actions/login'
import { loginSelector } from '@selectors/login';
import { loginStatusSelector } from '@selectors/loginStatus';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import LoadingView from '../LoadingView';
import OfflineView from '../OfflineView';

/**
 * Login Component
 * @author SynsoftGlobal
 */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hidePassword: true,
    }
  }

/**
 * Hide/Show typed Password
 */
  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

 /**
 * Login Action
 */

  loginButton = () => {
    if (!validation.emptyTextValidation(this.state.email)) {
      Alert.alert('Alert', 'Please enter email address.')
      return;
    }

    if (!validation.validateEmail(this.state.email)) {
      Alert.alert('Alert', 'Please enter valid email.')
      return;
    }

    if (!validation.emptyTextValidation(this.state.password)) {
      Alert.alert('Alert', 'Please enter password.')
      return;
    }

    Keyboard.dismiss();
    let loginData = {
      email: this.state.email.trim(),
      password: this.state.password.trim()
    };
    this.props.onLoginUser(loginData);

  }

/**
 * SignUp Action
 */
  signUpButtonClick = () => {
    Actions.signUp();
  }

  forgotPasswordClick = () => {
    Actions.forgotPassword();
  }

  // to focus on next input field
  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

/**
 * Component render method
 */
  render() {
    const { status } = this.props;
    return (
      <View style={styles.container}>
        <OfflineView />
        <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
          <View style={{ height: Dimensions.get('window').height * .55 }}>
            <View style={styles.centerContent}>
              <Text style={[styles.labelEmail, { marginTop: '3%' }]}>EMAIL</Text>
              <View style={styles.inputView}>
                <Image source={require('@res/img/emailicon.png')} style={{
                  width: '8%',
                  padding: 6, resizeMode: 'contain'
                }} />
                <TextInput
                  style={[styles.input, { width: '92%' }]} placeholder="Enter Email"
                  placeholderTextColor="#BFBFBF"
                  underlineColorAndroid={'transparent'}
                  returnKeyType='next'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  maxLength={AppConfig.emailMaxLength}
                  autoCorrect={false}
                  value={this.state.email}
                  onChangeText={(text) => {
                    this.setState({ email: text });
                  }}
                  onSubmitEditing={() => this.focusNextField('password')} />
              </View>
              <View style={{ height: 1, width: '100%', backgroundColor: AppConfig.black }} />

              <Text style={[styles.labelEmail, { marginTop: '8%' }]}>PASSWORD</Text>
              <View style={styles.inputView}>
                <Image source={require('@res/img/passwordicon.png')} style={{ width: '8%', padding: 6, resizeMode: 'contain' }} />
                <TextInput
                  ref='password'
                  style={[styles.input, { width: '84%' }]} placeholder="Enter Password"
                  placeholderTextColor="#BFBFBF"
                  underlineColorAndroid={'transparent'}
                  returnKeyType='done'
                  autoCapitalize='none'
                  keyboardType='default'
                  secureTextEntry={this.state.hidePassword}
                  maxLength={AppConfig.passwordMaxLength}
                  value={this.state.password}
                  onChangeText={(text) => {
                    this.setState({ password: text });
                  }} />

                <TouchableOpacity onPress={this.managePasswordVisibility} style={{ width: '8%', resizeMode: 'contain' }}>
                  <Image source={(this.state.hidePassword) ?
                    require('@res/img//hide_pass.png')
                    : require('@res/img/show_pass.png')} style={{ width: 25, resizeMode: 'contain' }} />
                </TouchableOpacity>

              </View>
              <View style={{ height: 1, width: '100%', backgroundColor: AppConfig.black }} />

              <TouchableOpacity onPress={this.forgotPasswordClick}>
                <Text style={styles.labelForgotPassword}>
                  Forgot Email or Password?
               </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={this.loginButton} style={{ justifyContent: 'center' }}>
              <ImageBackground style={styles.loginBtn} source={require('@res/img/loginbtn.png')}
                imageStyle={{ resizeMode: 'stretch' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Text style={styles.btnLabel}>
                    LOGIN
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <LoadingView visible={status.isFetching} />
      </View>


    );
  }
}


/**
 * Props Methods
 */

 // getting props
function mapStateToProps(state) {
  return {
    data: loginSelector(state),
    status: loginStatusSelector(state)
  }
}

// sending user actions
function mapDispatchToProps(dispatch) {
  return {
    onLoginUser: (loginData) => dispatch(loginUserToShiftyy(loginData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)