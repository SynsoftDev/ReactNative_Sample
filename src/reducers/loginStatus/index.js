import { clone, extend } from 'lodash';
import { loginResponse, loginLoading, SF_NO_INTERNET } from '@lib/SFConstants';
import { combineReducers } from 'redux';
import initialState from './initial-state';

/***
 * Reducer for login  to send data and status
 * @author SynsoftGlobal
 */

const loginStatusReducerFactory = data => (state = initialState[data], action) => {

    if (action.type === SF_NO_INTERNET) {
        return extend(clone(state), { isNoInternet: action.payload.data });
    }

    
    if(action.type == loginLoading){
        return extend(clone(state), { isFetching: action.payload.value});
    } 

    return state;
};


const loginStatusReducer = combineReducers({
    [loginResponse]: loginStatusReducerFactory(loginResponse)
});


export default loginStatusReducer;

