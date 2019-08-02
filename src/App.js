/**
 * SynsoftGlobal
 * Version 1.0.0
 * @author - SynsoftGlobal
 * @createdDate - 17 Dec 2018
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, Router, Scene } from 'react-native-router-flux';
import configureStore from '@lib/configureStore';
import { StyleSheet, Platform, SafeAreaView, BackHandler, Alert, Keyboard } from 'react-native';
import * as AppConfig from '@AppConfig';

import LoadingView from '@containers/LoadingView';
import Splash from '@containers/Splash';
import LoginTab from '@containers/LoginTab';
import Login from '@containers/Login';


const ConnectedRouter = connect()(Router);
const { store, persistor } = configureStore()


/* -----------Styles-----------------  */
const styles = StyleSheet.create({
  navigationbar: {
    backgroundColor: AppConfig.primaryColor,
    height: Platform.OS === 'ios' ? 44 : 54,
    borderBottomColor: 'transparent',
  },
  navigationTitle: {
    fontSize: 18,
    color: AppConfig.white,
    textAlign: 'center',
  },
});


const Scenes = Actions.create(
  <Scene key="root" navigationBarStyle={styles.navigationbar} titleStyle={styles.navigationTitle}>

    <Scene key='splash' component={Splash} hideNavBar={true} />
    <Scene key='loginTab' component={LoginTab} hideNavBar={true} />
    <Scene key='login' component={Login} hideNavBar={true} />
    <Scene key='signup' component={SignUp} hideNavBar={true} />
    
  </Scene>
);


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress() {
    Picker.hide();
    Keyboard.dismiss();
    if (Actions.state.index === 0) {
      Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
          { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false });
      return true;
    }

    Actions.pop();
    return true;
  }
  render() {
    if (Platform.OS === 'ios') {
      return (
        <Provider store={store} persistor={persistor}>
          <SafeAreaView style={{ flex: 1, backgroundColor: AppConfig.primaryColor }}>
            <ConnectedRouter scenes={Scenes} />
          </SafeAreaView>
        </Provider>
      );
    }
    else {
      return (
        <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
        </Provider>

      );
    }
  }
}


