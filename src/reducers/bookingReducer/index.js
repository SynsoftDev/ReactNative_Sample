
import {BOOKING_STATUS_DATA,bookingResponse } from  '@lib/SFConstants';
import { combineReducers } from 'redux';
import initialState from './initial-state';
import { extend } from 'lodash';

/***
 * Reducer for booking  to send data and status
 * @author SynsoftGlobal
 */
const bookingReducerFactory = data => (state = initialState[data],action) => {
    if (action.type === BOOKING_STATUS_DATA)
    {
        return extend({}, action.payload.value); 
    }
     return state;
};
    
 const bookingReducer = combineReducers({
        [bookingResponse] : bookingReducerFactory(bookingResponse)
});
    
    
export default bookingReducer;