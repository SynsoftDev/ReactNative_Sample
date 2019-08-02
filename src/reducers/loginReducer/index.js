
import {loginResponse,USER_DATA,LOGOUT } from  '@lib/SFConstants';
import { combineReducers } from 'redux';
import initialState from './initial-state';
import { clone, extend } from 'lodash';

/***
 * Reducer for login  to send data and status
 * @author SynsoftGlobal
 */

const loginReducerFactory = data => (state = initialState[data],action) => {
    if (action.type === USER_DATA)
    {

        return extend(clone(state), action.payload.value); 
    }

    if(action.type === LOGOUT){
        return null
    }
    return state;
};
    
    
 const loginReducer = combineReducers({
        [loginResponse] : loginReducerFactory(loginResponse)
});
    
    
export default loginReducer;