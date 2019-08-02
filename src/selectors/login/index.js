import {
    sLOGIN,
    loginResponse
} from '@lib/SFConstants';


const createSelectorForLogin = loginData => state => state[sLOGIN][loginData];

export const loginSelector = createSelectorForLogin(loginResponse);
