import {
    bookingLoading,
    BOOKING_STATUS_DATA,
} from '@lib/SFConstants';

import { Alert } from 'react-native';
import { fetchDataFromServer } from '@lib/apiCall';
import * as AppConfig from '@AppConfig';
import { Actions } from 'react-native-router-flux';
import { logout } from '@actions/login';
import Toast from 'react-native-simple-toast';


/**
 *   check booking status
 */

export const getBookingStatus = (authToken) => dispatch => {
    dispatch({ type: BOOKING_STATUS_DATA, payload: { value: {} } });
    dispatch({ type: bookingLoading, payload: { value: true } })
    fetchDataFromServer(AppConfig.BOOK_STATUS, 'GET', '', authToken)
        .then(function (response) {
            let result = JSON.parse(response);
            if (result) {
                dispatch(apiCallBookingSuccessStatus(result))
            } else {
                dispatch({ type: bookingLoading, payload: { value: false } })
            }
        }, function (error) {
            if (error === AppConfig.API_UNAUTHORIZED) {
                 Toast.show( AppConfig.LOGOUT_MSG,Toast.LONG);
                dispatch({ type: bookingLoading, payload: { value: false } })
                dispatch(logout());
            } else {
                dispatch(showMessage(AppConfig.API_ERROR,''));
            }
        });
}

/**
 * Handle Api Result to update data on redux
 */

export const apiCallBookingSuccessStatus = result => dispatch => {
    switch (result.status) {
        case AppConfig.STATUS_SUCCESS:
            dispatch({ type: bookingLoading, payload: { value: false } })
            dispatch({ type: BOOKING_STATUS_DATA, payload: { value: result } });
            break;
        case AppConfig.STATUS_FAILURE:
            dispatch({ type: bookingLoading, payload: { value: false } })
            dispatch({ type: BOOKING_STATUS_DATA, payload: { value: {} } });
            break;
        default:
            dispatch(showMessage(result.message,''));
            break;
    }
}

/**
 * Calling Booking Api
 */

export const bookUnBookVehicle = (data, authToken) => dispatch => {
    dispatch({ type: bookingLoading, payload: { value: true } })
    let URL = AppConfig.BOOK_UNBOOK_VEHICLE;
    fetchDataFromServer(URL, 'POST', data, authToken)
        .then(function (response) {
            let result = JSON.parse(response);
            if (result) {
                dispatch(apiBookingSuccessCall(result, data))
            } else {
                dispatch({ type: bookingLoading, payload: { value: false } })
            }

        }, function (error) {
            if (error === AppConfig.API_UNAUTHORIZED) {
                Toast.show( AppConfig.LOGOUT_MSG,Toast.LONG);
                dispatch({ type: bookingLoading, payload: { value: false } })
                dispatch(logout());
            } else {
                dispatch(showMessage(AppConfig.API_ERROR, ''));
            }
        });
}

/**
 * Manage Booking Api result to update data on redux
 */

export const apiBookingSuccessCall = (result, data) => dispatch => {
    switch (result.status) {
        case AppConfig.STATUS_SUCCESS:
            dispatch({ type: BOOKING_STATUS_DATA, payload: { value: result.data } });
            if (data.action === AppConfig.BOOK_VAL) {
                Alert.alert(
                    'Alert',
                    'Vehicle is booked successfully.',
                    [
                        {
                            text: 'OK', onPress: () => {
                                dispatch({ type: bookingLoading, payload: { value: false } })
                                openBookingStatus();
                            }
                        },
                    ],
                    { cancelable: false }
                )

            } else {
                Alert.alert(
                    'Alert',
                    'Vehicle is unbooked successfully.',
                    [

                        {
                            text: 'OK', onPress: () => {
                                dispatch({ type: bookingLoading, payload: { value: false } })
                                openFindVehicle();
                            }
                        },
                    ],
                    { cancelable: false }
                )

            }
            break;
        case AppConfig.STATUS_FAILURE:
            dispatch(showMessage(result.message, data));
            break;
        default:
            dispatch(showMessage(result.message, data));
            break;
    }
}

export const openBookingStatus = () => {
    Actions.bookingStatus();
}
export const openFindVehicle = () => {
    Actions.findVehicle();
}

/**
 * Common alert method
 */
export const showMessage = (message, data) => dispatch => {
    if (message === 'Unauthorized user.') {
        Alert.alert(
            'Alert',
            message,
            [
                {
                    text: 'OK', onPress: () => {
                        dispatch({ type: bookingLoading, payload: { value: false } })
                        dispatch(logout());
                    }
                },
            ],
            { cancelable: false }
        )
    } else {
        Alert.alert(
            'Alert',
            message,
            [
                {
                    text: 'OK', onPress: () => {
    
                        dispatch({ type: bookingLoading, payload: { value: false } })
                        Actions.pop();

                    }
                },
            ],
            { cancelable: false }
        )
    }
}







