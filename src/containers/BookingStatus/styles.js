
import { StyleSheet, Dimensions } from 'react-native'
import * as AppConfig from '@AppConfig';
var width = Dimensions.get('window').width;


/* -------------Styles---------------- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: AppConfig.primaryColor
    },
    centerContent: {
        flexDirection: 'column',
        width: '100%',
        padding: 10,
    },

    headerBar: {
        flexDirection: 'row',
        height: 90,
        width: '100%',
        alignItems: 'center'
    },
    backBtn: {
        width: '10%',
        height: '100%',
        padding: 15,
        marginLeft: 10,
        alignItems: 'center',
        resizeMode: 'contain'
    },
    logo: {
        width: '85%',
        marginTop:10,
        height: 70,
        resizeMode: 'contain'
    },
    labelHeading: {
        fontSize: AppConfig.RF20,
        color: AppConfig.divider,
        fontFamily: AppConfig.ROBOTO_BOLD_ITALIC,
        textAlign: 'center',
        padding: 12,
        marginTop: '5%',
    },
    settingView: {
        width: '85%',
        justifyContent: 'center',
    },
    logoSettingImg: {
        alignSelf: 'center',
        resizeMode: 'contain',
        marginLeft: '25%'
    },

    vehicleImage: {
        width: '80%',
        height: 160,
        margin: 10,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    labelText: {
        fontSize: AppConfig.RF16,
        color: AppConfig.white,
        marginTop: '5%',
        marginLeft: 5,
        fontFamily: AppConfig.MONTSERRAT_REGULAR,
    },

    loginBtn: {
        alignSelf: 'center',
        height: 65,
        width: width * .65,
    },

    btnLabel: {
        textAlign: 'center',
        color: AppConfig.white,
        fontSize: AppConfig.RF17,
        fontFamily: AppConfig.MONTSERRAT_BOLD,
    },

});

export default styles;
