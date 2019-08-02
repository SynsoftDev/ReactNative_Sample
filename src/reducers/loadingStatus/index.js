import { clone, extend } from 'lodash';
import { loadingResponse, loading } from '@lib/SFConstants';
import { combineReducers } from 'redux';
import initialState from './initial-state';

/***
 * Reducer for login  to send data and status
 * @author SynsoftGlobal
 */

const loadingStatusReducerFactory = data => (state = initialState[data], action) => {

    if(action.type == loading){
        return extend(clone(state), { isFetching: action.payload.value});
    } 

    return state;
};


const loadingStatusReducer = combineReducers({
    [loadingResponse]: loadingStatusReducerFactory(loadingResponse)
});


export default loadingStatusReducer;

