import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {
    sLOGINSTATUS, sLOGIN,
    sPROFILE, sPROFILE_STATUS,
    sFINDVEHICLE, sFIND_VEHICLE_STATUS,
    sBOOKING, sBOOKINGSTATUS,
    sVehcileDetail, sUSER_COMPANY_INFO,
    sLOADING_STATUS,
} from '@lib/SFConstants';

import loginReducer from './loginReducer';
import loginStatus from './loginStatus';

import bookingReducer from './bookingReducer';
import bookingStatus from './bookingStatus';

import vehicleDetailReducer from './vehicleDetailReducer';

import userCompanyInfoReducer from './userCompanyInfoReducer';
import loadingStatus from './loadingStatus';


//https://github.com/rt2zz/redux-persist/issues/659
const config = {
    key: 'root',
    storage
}


const rootReducer = persistCombineReducers(config, {
    [sLOGIN]: loginReducer,
    [sLOGINSTATUS]: loginStatus,

    [sPROFILE]: profileReducer,
    [sPROFILE_STATUS]: profileStatus,

    [sFINDVEHICLE]: findVehicleReducer,
    [sFIND_VEHICLE_STATUS]: findVehicleStatus,

    [sBOOKING]: bookingReducer,
    [sBOOKINGSTATUS]: bookingStatus,

    [sVehcileDetail]: vehicleDetailReducer,
    [sUSER_COMPANY_INFO]: userCompanyInfoReducer,

    [sLOADING_STATUS]:loadingStatus,


});

export default rootReducer
