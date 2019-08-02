
/**
 * App Config file for all setup
 * @author SynsoftGlobal
 */

'use strict';

import {Dimensions,Platform} from 'react-native'
import RF from "react-native-responsive-fontsize"

var window = Dimensions.get('window');
exports.windowHeight = window.height;
exports.windowWidth = window.width;

/***
 * Server url and api staus
 * @author SynsoftGlobal
 */
var SERVER_URL = ""
exports.IMAGE_URL = "";

exports.STATUS_SUCCESS = 1;
exports.STATUS_FAILURE = 0;


/***
 * API List 
 * @author SynsoftGlobal
 */
exports.LOGIN = SERVER_URL +"api/login";
exports.REGISTER = SERVER_URL +"api/register";
exports.FORGOT_PASSWORD = SERVER_URL +"api/forgot_password";

exports.GENERATE_OTP = SERVER_URL + "securedapis/generate_OTP";
exports.VERIFY_OTP = SERVER_URL +"securedapis/verify_OTP";
exports.CHANGE_PASSWORD = SERVER_URL +"securedapis/changePassword";

exports.GET_PROFILE = SERVER_URL +"securedapis/getProfile";
exports.UPDATE_PROFILE = SERVER_URL +"securedapis/updateProfile";
exports.CHANGE_COUNTRY = SERVER_URL + "api/changeCountry";

//common api's
exports.COUNTRY_LIST = SERVER_URL +"common/get_countries"


//company info api's
//exports.COMP_NAME_LIST = SERVER_URL + "api/getCompanyListByCountryId";
exports.GET_COMP_INFO = SERVER_URL + "securedapis/getCompanyInfo";
exports.COMP_NAME_LIST = SERVER_URL +"securedapis/company_list";
exports.COMP_PROGRAM_LIST = SERVER_URL +"securedapis/program_list";
exports.STATE_LIST = SERVER_URL +"securedapis/state_list" 
exports.CITIES_LIST = SERVER_URL +"securedapis/city_list"
exports.COMP_LOST_NAME_LIST = SERVER_URL + "securedapis/lot_list";
exports.SAVE_COMPANY_DETAILS = SERVER_URL + "securedapis/saveCompanyInfo";
exports.DIVISON_NUM_LIST = SERVER_URL +"securedapis/division_no_list"


exports.CHECK_LOT_STATUS = SERVER_URL + "securedapis/checkLotStatus";
exports.VEHICLE_LIST = SERVER_URL +"securedapis/vehicle_list";
exports.VEHICLE_DETAIL= SERVER_URL +"securedapis/vehicle_details";
exports.BOOK_UNBOOK_VEHICLE = SERVER_URL +"securedapis/booking";
exports.BOOK_STATUS = SERVER_URL +"securedapis/getbookingstatus";



// General Element Dimensions
var navbarHeight = 64;
exports.navbarHeight = navbarHeight;
exports.statusBarHeight = 20;
exports.passwordMaxLength = 16;
exports.passwordMinLength = 8;
exports.emailMaxLength = 100;
exports.nameLength = 25;
exports.phoneLength = 15;
exports.phoneMinLength = 8;

exports.DeviceType="android";

/***
 * Colors
 * @author SynsoftGlobal
 */
exports.primaryColor = "#000000";
exports.statusBarColor=  "#1F1F1F";  
exports.black="#000000";
exports.blackLight = "#333333";
exports.white = "#ffffff";
exports.divider ="#e5ab0e";
exports.yellow = '#ecc456';

/***
 * FontSize
 * @author SynsoftGlobal
 */
exports.RF12 = RF(1.8);
exports.RF13 = RF(2.0);
exports.RF14 = RF(2.3);
exports.RF15 = RF(2.4);
exports.RF16 = RF(2.5);
exports.RF17 = RF(2.8);
exports.RF18 = RF(3.0);
exports.RF20 = RF(3.5);
exports.RF22 =RF(4);

/***
 * Fonts
 * @author SynsoftGlobal
 */
exports.MONTSERRAT_REGULAR = Platform.OS =='android'?'montserrat_regular':'Montserrat';
exports.MONTSERRAT_BOLD = Platform.OS =='android'?'montserrat_bold':'Montserrat-Bold';
exports.ROBOTO_BOLD_ITALIC = Platform.OS =='android'?'roboto_bold_italic':'Roboto-italic';
exports.ROBOTO_BOLD = Platform.OS =='android'?'roboto_bold':'Roboto-Bold';
exports.ROBOTO_REGULAR = Platform.OS =='android'?'roboto_regular':'Roboto';
exports.ROBOTO_THIN = Platform.OS =='android'?'roboto_thin':'Roboto-thin';
exports.ROBOTO_ITALIC = Platform.OS =='android'?'roboto_italic':'Roboto-italic';

/***
 * Messages
 * @author SynsoftGlobal
 */
exports.NO_INTERNET = "Seems your device is not connected with internet."
exports.API_ERROR = 'Something went wrong, Please try after sometime.';
exports.BOOK_VAL = 1,
exports.UNBOOK_VAL = 2;
exports.OTP_SEND_MESSAGE = 'Activation code has been sent on your registered mobile no.'
exports.API_UNAUTHORIZED = 'API_UNAUTHORIZED';
exports.LOGOUT_MSG= 'Seems you have been logged in to other device.';