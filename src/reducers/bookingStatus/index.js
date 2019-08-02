import { clone, extend } from 'lodash';
import { bookingResponse, bookingLoading, SF_NO_INTERNET } from '@lib/SFConstants';
import { combineReducers } from 'redux';
import initialState from './initial-state';

/***
 * Reducer for booking status  to send data and status
 * @author SynsoftGlobal
 */

const bookingStatusReducerFactory = data => (state = initialState[data], action) => {

    if (action.type === SF_NO_INTERNET) {
        return extend(clone(state), { isNoInternet: action.payload.data });
    }

    
    if(action.type == bookingLoading){
        return extend(clone(state), { isFetching: action.payload.value});
    } 

    return state;
};


const bookingStatusReducer = combineReducers({
    [bookingResponse]: bookingStatusReducerFactory(bookingResponse)
});


export default bookingStatusReducer;

