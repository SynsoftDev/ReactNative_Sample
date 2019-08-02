
import { StyleSheet, Dimensions } from 'react-native'
import * as AppConfig from '@AppConfig';
var width = Dimensions.get('window').width;

/* -------------Styles---------------- */
const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    flexDirection: 'column',
  },
  centerContent: {
    flexDirection: 'column',
    width: width * .93,
    marginTop: '15%',
    marginRight: 10,
    marginLeft: 5,
    backgroundColor: AppConfig.white,
    borderColor: AppConfig.white,
    borderRadius: 4,
    padding: 15,

  },
  logo: {
    marginTop: 5,
  },

  inputView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  labelEmail: {
    fontSize: AppConfig.RF14,
    color: '#C4C4C4',
    marginTop: '3%',
    marginLeft:5,
    fontFamily: AppConfig.MONTSERRAT_REGULAR,
  },

  input: {
    width: '95%',
    height: 45,
    padding: 8,
    fontSize: AppConfig.RF17,
    color: AppConfig.black,
    fontFamily: AppConfig.ROBOTO_THIN ,
  },
  labelForgotPassword: {
    fontSize: AppConfig.RF14,
    color: AppConfig.blackLight,
    opacity:0.8,
    marginTop: '10%',
    fontFamily: AppConfig.ROBOTO_ITALIC,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: '8%'
  },
  loginBtn: {
    marginTop: -28,
    alignSelf: 'center',
    height: 65,
    width: width*.70

  },
  btnLabel: {
    textAlign: 'center',
    color: AppConfig.white,
    fontSize: AppConfig.RF18,
    fontFamily: AppConfig.MONTSERRAT_BOLD,
  },
  bottom: {
    flex: 1,
  },

  labelConnect: {
    textAlign: 'center',
    color: AppConfig.white,
    alignSelf: 'center',
    fontSize: AppConfig.RF15,
    fontFamily: AppConfig.ROBOTO_THIN,
    fontStyle: 'italic',
  },
  socialView: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  socialBtnView: {
    width: width * .44,
    height: 45,
    marginTop: 10
  },
  socialBtn: {
    height: 45,
    width: width * .42,
    resizeMode: 'stretch'
  },
  socialDividerView: {
    marginLeft: 8,
    marginRight: 15,
    marginTop: 24

  },
  socialDivider: {
    height: 25,
    width: 1,
    backgroundColor: AppConfig.divider
  }

});

export default styles;
