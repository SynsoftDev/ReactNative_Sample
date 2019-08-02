import {
    USER_DATA
} from '@lib/SFConstants';

import { fetchDataFromServer } from '@lib/apiCall';
import * as AppConfig from '@AppConfig';
import { Actions, ActionConst } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { logout } from '@actions/login';
import Toast from 'react-native-simple-toast';

/*
   App launch method 
*/

export const appLaunch = (authToken) => dispatch => {
    fetchDataFromServer(AppConfig.GET_PROFILE, 'GET', '', authToken)
        .then(function (response) {
            let result = JSON.parse(response);
            dispatch(apiCallSuccessStatus(result))
        }, function (error) {
            if (error === AppConfig.API_UNAUTHORIZED) {
                Toast.show( AppConfig.LOGOUT_MSG,Toast.LONG);
                dispatch(logout());
            }
            dispatch(openScreenForSplash(''));
        });
}

/*
   Handle Api Result to update data on redux
*/
export const apiCallSuccessStatus = result => dispatch => {
    switch (result.status) {
        case AppConfig.STATUS_SUCCESS:
            AsyncStorage.setItem("user_id", result.data.id.toString());
            AsyncStorage.setItem("user_data", JSON.stringify(result));
            dispatch({ type: USER_DATA, payload: { value: result } });
            dispatch(openScreenForSplash(result));
            break;
        case AppConfig.STATUS_FAILURE:
            dispatch(openScreenForSplash(''));
            break;
        default:
            dispatch(openScreenForSplash(''));
            break;
    }
}

/*
   Open Screen After Splash Launch 
*/

export const openScreenForSplash = (result) => dispatch => {
    setTimeout(() => {
        if (result) {
            let data = result.data;
            if ((data.phone_verified === '1' || data.phone_verified === 1)
                && (data.company_id !== null || data.company_id)) {
                Actions.findVehicle({ type: ActionConst.RESET, cameFrom: 'login' })
            } else if (data.phone_verified === null || data.phone_verified === '0' || data.phone_verified === 0) {
                Actions.signupPhoneVerification({ type: ActionConst.RESET, cameFrom: 'login' })
            } else if (data.company_id === null || data.company_id === '0') {
                Actions.companyInfo({ type: ActionConst.RESET })
            } else {
                Actions.settings({ type: ActionConst.RESET })
            }
        } else {
            checkFromStorage(); //check from storage and redirect;
        }

    }, 1000)
}

export const openCompanyInfo = () => {
    Actions.companyInfo({ type: ActionConst.RESET })
}

export const openSignUpVerification = () => {
    Actions.signupPhoneVerification({ type: ActionConst.RESET })
}

export const openLoginScreen = () => {
    Actions.loginTab({ type: ActionConst.RESET });
}


/**
 * Check local storage
 */

export const checkFromStorage = () => {
    AsyncStorage.getItem("user_data").then((value) => {
        if (value) {
            let result = JSON.parse(value);
            if ((result.data.phone_verified === '1' || result.data.phone_verified === 1)
                && (result.data.company_id !== null || result.data.company_id)) {
                Actions.findVehicle({ type: ActionConst.RESET, cameFrom: 'login' })
            } else if (result.data.phone_verified === null || result.data.phone_verified === '0' 
            || result.data.phone_verified === 0) {
                Actions.signupPhoneVerification({ type: ActionConst.RESET, cameFrom: 'login' })
            } else if (result.data.company_id === null || result.data.company_id === '0') {
                Actions.companyInfo({ type: ActionConst.RESET })
            } else {
                Actions.settings({ type: ActionConst.RESET })
            }
        } else {
            openLoginScreen();
        }
    }).done();
}


